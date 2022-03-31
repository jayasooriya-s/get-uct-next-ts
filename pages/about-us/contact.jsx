import React from "react";
import { TopBanner, EnquiryForm, ContactCard } from "../../components";
import styles from "./Contact.module.css";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
export default function contact() {
  return (
    <div>
      <TopBanner
        backgroundImage={"https://getuct.com/wp-content/uploads/2021/06/88.jpg"}
      />
      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url("https://getuct.com/wp-content/uploads/2021/06/REQUEST-A-FREE-CALL-BACK.jpg")`,
          }}
        >
          <div className={styles.address}>
            <div className={styles.address_list}>
              <ContactCard
                title={"EMAIL:"}
                detail={"contact@getuct.com"}
                icon={<AiOutlineMail />}
              ></ContactCard>
              <ContactCard
                title={"LONDON ADDRESS:"}
                detail={"3rd Floor, 120 Baker Street, London, England, W1U 6TU"}
                icon={<AiOutlineHome />}
              ></ContactCard>
              <ContactCard
                title={"DUBAI ADDRESS:"}
                detail={"724 Tamani Arts, Business Bay, Dubai"}
                icon={<AiOutlineHome />}
              ></ContactCard>
              <ContactCard
                title={"MUMBAI ADDRESS:"}
                detail={"202, LBS Marg, Vikhroli West, Mumbai - 83"}
                icon={<AiOutlineHome />}
              ></ContactCard>
              <ContactCard
                title={"CHENNAI ADDRESS:"}
                detail={"49 & 50L, Whites Rd, Royapettah, Chennai - 14"}
                icon={<AiOutlineHome />}
              ></ContactCard>
            </div>
          </div>
        </div>
        <div className={styles.enquiryForm}>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
