import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetUpHandler(meetData) {
    console.log(meetData);
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}
export default NewMeetupPage;
