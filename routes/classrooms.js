var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Classroom = mongoose.model('Classroom');

router.route('/')
  .get(function(req, res) {
    Classroom.find({}, function(err, classrooms) {
      if (err) console.log(err);
      res.render('classrooms/index', {classrooms: classrooms});
    });
  }).post(function(req, res){
	  var classroom = new Classroom({
		    name: req.body.name,
		    hasKeg: req.body.hasKeg,
        numberOfSeats: req.body.numberOfSeats
	  });

  	classroom.save(function (err) {
  		if (err) console.log(err);
  	});
  	res.redirect('/classrooms');
});

router.get('/new', function(req, res) {
  res.render('classrooms/new');
});

router.route('/:id')
  .get(function(req, res) {
    Classroom.findOne({_id: req.params.id}, function(err, classroom) {
      res.render('classrooms/show', { classroom: classroom });
    });
  }).post(function(req, res){
  	Classroom.findByIdAndUpdate({_id: req.params.id}, { $set: req.body }, function(err, classroom) {
      if (err) console.log(err);
    });

    res.redirect('/classrooms');
	});

router.get('/edit/:id/', function(req, res) {
  Classroom.findOne({_id: req.params.id}, function(err, classroom){
    res.render('classrooms/edit', {classroom: classroom });
  });
});

router.post('/:id/delete', function(req, res) {
  Classroom.findOneAndRemove({_id: req.params.id}, function(err){
    if (err) console.log(err)
  });
  res.redirect('/classrooms');
})

module.exports = router;
