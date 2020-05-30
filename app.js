require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/rememberAPI');
const infoRouter = express.Router();
const port = process.env.PORT || 3000;
const Info = require('./models/infoModel');

infoRouter.route('/info')
  .get((req, res) => {
    // const query = {};
    // if (req.query.name) {
    //   query.name = req.query.name;
    // }
    // Info.find(query, (err, people) => {
    //   if (err) {
    //     return res.send(err);
    //   }
    //   console.log('people', people )
    //   return res.json(people);
    // });
    Info.find((err, people ) => {
      if(err){
        return res.send(`There was an error: ${err}`);
      }else{
        return res.json(people);
      }
    });
  });


app.use('/', infoRouter) 
app.get('/', (req, res) => {
  res.send('Welcome from remember me backend')
});

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});