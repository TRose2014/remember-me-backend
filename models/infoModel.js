const mongoose = require('mongoose');
const { Schema } = mongoose;
const uri = process.env.DB_URI || 'mongodb://localhost/rememberAPI';

const infoModel = new Schema({
  name: { type:String },
  image_url: { type:String },
  personal_bio: { type:String },
  last_seen: { type:String },
  date_lost: { type:String },
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

infoModel.set('collection', 'people'); //Mongoose by default produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. Set this option if you need a different name for your collection.

module.exports = mongoose.model('Info', infoModel);
