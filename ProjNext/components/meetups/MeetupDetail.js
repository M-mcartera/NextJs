import { Fragment } from "react";

import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={styles.detail}>
      <img
        src={props.image}
        alt={props._id}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.details}</p>
    </section>
  );
}

export default MeetupDetail;