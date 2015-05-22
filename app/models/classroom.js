var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClassroomSchema = new Schema({
  numberOfSeats: { type: Number, default: 0 },
  name: { type: String, default: ''},
  hasKeg: { type: Boolean, default: false }
});

// need to register the model
mongoose.model('Classroom', ClassroomSchema);
