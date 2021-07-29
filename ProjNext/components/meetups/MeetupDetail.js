import { Fragment } from "react";

import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={styles.detail}>
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.detail}</p>
    </section>
  );
}

export default MeetupDetail;