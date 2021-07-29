import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetUpHandler(meetData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meetData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push('/');
    }
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}
export default NewMeetupPage;
