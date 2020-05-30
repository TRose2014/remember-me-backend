const mongoose = require('mongoose');
const { Schema } = mongoose;

const infoModel = new Schema({
  name: { type:String },
  image_url: { type:String },
  personal_bio: { type:String },
  police_encounter: { type:String },
});

infoModel.set('collection', 'people');

module.exports = mongoose.model('Info', infoModel);