import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
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

export function getStaticProps(){
  return{
    props:{ 
      meetups: preset_meetups
    }
  }
}

export default HomePage;
