//api/new-meetup
import { PASSWORD } from "..";
const { MongoClient } = require("mongodb");
// const uri = "mongodb+srv://mcartera:flyiq440@cluster0.o8jgq.mongodb.net/meetupsDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

async function handler(req, res) {
  if (req.method === "POST") {
    //code for POST
    const data = req.body;

    const { title, image, address, descripton } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://mcartera:pastelevine@cluster0.o8jgq.mongodb.net/meetupsDB?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({message: "Meetup inserted"}); 
  }
}
export default handler;
