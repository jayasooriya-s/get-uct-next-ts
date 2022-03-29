import React from "react";
import styles from "./EnquiryForm.module.css";
import { BiPhone } from "react-icons/bi";
export default function EnquiryForm() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {<BiPhone className={styles.icon} />}
      </div>
      <div>
        <div className={styles.subHeading}>Contact Us</div>
        <div className={styles.headLine}>FOR ENQUIRIES</div>
        <form className={styles.forms}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telephone"
            className={styles.input}
          />
          <textarea
            name="detail"
            placeholder="Detail"
            cols={30}
            rows={4}
            className={styles.input}
          />
          <div className={styles.submitContainer}>
            <input type="submit" value="SUBMIT" className={styles.submit} />
          </div>
        </form>
      </div>
    </div>
  );
}
