import { useEffect, useState } from "react";
const { MongoClient } = require("mongodb");
import MeetupList from "../components/meetups/MeetupList";

export const PASSWORD = "pastelevine";
const preset_meetups = [
  {
    id: "m1",
    title: "FIRST MEETUP",
    image:
      "https://img.xcitefun.net/users/2014/07/359037,xcitefun-sunset-beach-6.jpg",
    address: "some text",
    description: "SOme text description",
  },
  {
    id: "m2",
    title: "FIRST MEETUP",
    image:
      "https://img.xcitefun.net/users/2014/07/359037,xcitefun-sunset-beach-6.jpg",
    address: "some text",
    description: "SOme text description",
  },
  {
    id: "m3",
    title: "FIRST MEETUP",
    image:
      "https://img.xcitefun.net/users/2014/07/359037,xcitefun-sunset-beach-6.jpg",
    address: "some text",
    description: "SOme text description",
  },
];
function HomePage(props) {
  const [loadedMeets, setLoadedMeets] = useState([]);

  useEffect(() => {
    setLoadedMeets(preset_meetups);
  }, []);
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mcartera:pastelevine@cluster0.o8jgq.mongodb.net/meetupsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
