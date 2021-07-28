import MeetupList from "../components/meetups/MeetupList";
const meetups = [
  {
    id: "m1",
    title: "FIRST MEETUP",
    img: "https://tse1.explicit.bing.net/th?id=OIP.47BCnbweqHEvU984X1T5_wHaHY&pid=Api&P=0&w=300&h=300",
    address: "some text",
    description: "SOme text description",
  },
  {
    id: "m2",
    title: "FIRST MEETUP",
    img: "https://tse1.explicit.bing.net/th?id=OIP.47BCnbweqHEvU984X1T5_wHaHY&pid=Api&P=0&w=300&h=300",
    address: "some text",
    description: "SOme text description",
  },
  {
    id: "m3",
    title: "FIRST MEETUP",
    img: "https://tse1.explicit.bing.net/th?id=OIP.47BCnbweqHEvU984X1T5_wHaHY&pid=Api&P=0&w=300&h=300",
    address: "some text",
    description: "SOme text description",
  },
];
function HomePage() {
  return (
      <MeetupList meetups={meetups} />
  );
}

export default HomePage;
