module.exports = {
 addTweet: async (req, res) => {
  //connect to our database
  const db = req.app.get('db');
  //get the data from the req.body
  const { tweet } = req.body;

  //save the data to the database
  const addTweet = await db.tweets.add_tweet([tweet]);

  //send the data back to the client
  res.status(200).send(addTweet);
 }
}