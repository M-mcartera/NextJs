import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      imgSrc="https://img.xcitefun.net/users/2014/07/359037,xcitefun-sunset-beach-6.jpg"
      imgAlt="some alt"
      title="some title"
      address="some address"
      detail="some details"
    />
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context.params.meetupId);
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        imgSrc:
          "https://img.xcitefun.net/users/2014/07/359037,xcitefun-sunset-beach-6.jpg",
        id: meetupId,
        imgAlt: "some alt",
        title: "some title",
        address: "some address",
        detail: "some details",
      },
    },
  };
}
export default MeetupDetails;
