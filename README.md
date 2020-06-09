# Remember-Me

# Game-plan for this project
* Use mongodb to store information for each person subjected to police brutaility from 2000 to 2020
* Resources for names and their stories:
  - https://www.buzzfeednews.com/article/nicholasquah/heres-a-timeline-of-unarmed-black-men-killed-by-police-over
  - https://www.latimes.com/nation/la-na-police-deaths-20160707-snap-htmlstory.html

  - Want to store name, image-url, personal bio, their police encounter

* Use react to display cards (props use material-ui)
  - https://material-ui.com
  - Each person gets a card, front card says their name. Flip the card and it has their picture and bio
    - If flip is too challenging have all on one side
    - Acutally might be distracting with cards flipping, just have all info on one ard
      - Both bios will have to be one to two sentences
      - Personal bio can be remember me for : ..... or who I was
      - Police encounter bio can say.. my encounter or 
      - The bottom of each card can say remember me
  - Card colors will be black, red and green

* Have a resource page that says How to support or help


Steps:
1. Deploy mongoDB to heroku with dummy data and try to retrieve via React app
  * https://www.freecodecamp.org/forum/t/how-to-deploy-your-mongodb-app-to-heroku/19347
  - Finish pluralsight node.js app using mongoose
    - Create json file that will have the names, bios, image_url etc
2. Start gathering the data and put it in json file
3. Used a fixed grid
  - Phones - display one card
  - Tablets - displays two cards
  - Everything else, either two or three cards...depending on how big cards are
4. 

  #### Website callled I am.. I am Corey Jones. I lived in..... I did this... I did that....I was .... yeard old

  On XX-XX-XXXX I...was in the park, in the store, walking home. 
  
  I never came home.

  Remember Me

  *** change remember me on bottom of card to I am Corey Jones....can also delete Name:Corey Jones section

  **** I was XX years old....

### Mongodb Commands
To add data from infoJson.js to mongodb
To import Book data into your mongoDB database. Make sure MongoDB is running then run `mongo rememberAPI < infoJson.js` from the command line.

show dbs - Shows all databases
> use <db>
> show collections
people
> db.<collection>.find() || db.<collection>.find().pretty()

Mongoose pluralizes collections. Mongodb had people, but Mongoose is looking for peoples. Had to set the collection name in the infoModel.js

Created mongolab-curved-15649 as MONGODB_URI

MONGODB_URI=mongodb://heroku_brk6g069:31n34u6fqcla3bl104ptp76c29@ds259325.mlab.com:59325/heroku_brk6g069

Terminal:
mongo ds259325.mlab.com:59325/heroku_brk6g069 -u heroku_brk6g069 -p 31n34u6fqcla3bl104ptp76c29

To add data to the deployed Mongodb run `mongo ds259325.mlab.com:59325/heroku_brk6g069 -u heroku_brk6g069 -p 31n34u6fqcla3bl104ptp76c29 < infoJson.js`


To go to admin page:
- Log into heroku and click mlab

User I made:
mongodb://testtest:testtest1@ds259325.mlab.com:59325/heroku_brk6g069

Personal Bio: Born on XX-XX-XXXX, XXXXXXX grew up/lived in XXXXXX. XXXXXXX worked for/went to school at .XXXXXX liked to do this.

My Encounter: On XX-XX-XXXX XXXXXXX was at XXXXX,XXXX

Create assets directory and download and save images

Resources used:
https://www.blackpast.org
