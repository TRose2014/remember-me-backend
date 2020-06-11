# Remember-Me - backend

## Tia Rose

### This app is to remember those we lost to police brutality. Although this is only a handful of names, I plan on adding more and eventually would love to create individual web pages that tell their story.

✊🏿✊🏾✊🏽✊🏼✊🏻

### Links and Resources
* [back-end-deployed](https://remember-me-1-backend.herokuapp.com/)
* [front-end-deployed](https://remember-me.netlify.app)
* [front-end-repo](https://github.com/TRose2014/remember-me)

### Prerequisites
Before continuing, please ensure you have [npm](https://www.npmjs.com/get-npm) installed on your computer

#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Install dependencies
* Run `npm i` || `npm install` in terminal

#### Running the app
* `npm start`
* Open `http://localhost:${PORT}` to view it in the browser.

#### Mongo Schema
Located in `/models/infoModel.js`

#### Endpoints:
* Endpoint: `/`
  * Returns simple welcome message.
* Endpoint: `/info`
  * Returns an object for each person with the following properties for the front-end to consume:
    - name
    - image_url
    - personal_bio
    - last_seen
    - date_lost
