//import what we need
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const tweetCtrl = require('./controller/tweetController');
const { CONNECTION_STRING, PORT } = process.env;

const app = express();
app.use(express.json())

//create routes (endpoints) GET, POST, PUT, DELETE
app.post('/api/tweets/', tweetCtrl.addTweet);


massive({
 connectionString: CONNECTION_STRING,
 ssl: {
  rejectUnauthorized: false,
 },
}).then((dbInstance) => {
 app.set('db', dbInstance)
 console.log('db connected')
})

//create listener
app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
});