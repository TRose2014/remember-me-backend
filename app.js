require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const infoRouter = express.Router();
const port = process.env.PORT || 3000;
const Info = require('./models/infoModel');

infoRouter.route('/info')
  .get((req, res) => {
    Info.find((err, people ) => {
      if(err){
        return res.send(`There was an error: ${err}`);
      }else{
        return res.json(people);
      }
    });
  });

app.use(cors());
app.use('/', infoRouter);
app.get('/', (req, res) => {
  res.send('Welcome from remember me backend');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
