import React, { useState } from "react";
import styles from "./EnquiryForm.module.css";
import { BiPhone } from "react-icons/bi";
import { domain } from "../../config";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../index";
export default function EnquiryForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telePhone, setTelePhone] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  async function submitForm(event: any) {
    setIsLoading(true);
    event.preventDefault();
    let data = {
      data: {
        name: name,
        email: email,
        telephone: telePhone,
        detail: detail,
      },
    };
    try {
      const response = await fetch(`${domain}/api/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status == 200) {
        console.log("success");
        setName("");
        setEmail("");
        setTelePhone("");
        setDetail("");
        setIsLoading(false);
        toast.success("Success");
      }
    } catch (e: any) {
      console.log(`  ${e.message}`);
      setIsLoading(false);
      toast.error(e.message);
    }
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Loader></Loader>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className={styles.iconContainer}>
          {<BiPhone className={styles.icon} />}
        </div>
        <div>
          <div className={styles.subHeading}>Contact Us</div>
          <div className={styles.headLine}>FOR ENQUIRIES</div>
          <form className={styles.forms} onSubmit={submitForm}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={styles.input}
              value={name}
              onChange={(value) => setName(value.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(value) => setEmail(value.target.value)}
              required
            />
            <input
              type="tel"
              name="telephone"
              id="telephone"
              placeholder="Telephone"
              className={styles.input}
              value={telePhone}
              onChange={(value) => setTelePhone(value.target.value)}
            />
            <textarea
              name="detail"
              placeholder="Detail"
              id="detail"
              cols={30}
              rows={4}
              className={styles.input}
              value={detail}
              onChange={(value) => setDetail(value.target.value)}
            />
            <div className={styles.submitContainer}>
              <input type="submit" value="SUBMIT" className={styles.submit} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
