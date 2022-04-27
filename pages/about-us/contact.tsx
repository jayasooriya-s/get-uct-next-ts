import { TopBanner, EnquiryForm, ContactCard } from "../../components";
import styles from "./Contact.module.css";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { domain } from "../../config";
import { useEffect, useState } from "react";
export default function Contact() {
  const [topBanner, setTopBanner] = useState<TopBanner>({});
  const [address, setAddress] = useState<AddressModel[]>([
    {
      address: "3rd Floor, 120 Baker Street, London, England, W1U 6TU",
      title: "LONDON ADDRESS:",
    },
  ]);
  const [contactEmail, setContactEmail] =
    useState<string>("contact@getuct.com");

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `${domain}/api/contact-screen?populate[topBanner][populate]=*&[populate][address]=*`
      );
      if (response.status == 200) {
        const dataList = await response.json();
        setContactEmail(dataList.data.attributes.contactEmail);
        setTopBanner({
          bg: `${domain}${dataList.data.attributes.topBanner.image.data.attributes.url}`,
          bigTitle: dataList.data.attributes.topBanner.bigTitle,
          smallTitle: dataList.data.attributes.topBanner.smallTitle,
        });
        var _addressList: AddressModel[] = [];
        dataList.data.attributes.address &&
          dataList.data.attributes.address.map((i: any) => {
            let _address: AddressModel = new AddressModel(i.title, i.address);
            _addressList.push(_address);
          });
        setAddress(_addressList);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <TopBanner
        backgroundImage={
          topBanner.bg ?? "https://getuct.com/wp-content/uploads/2021/06/88.jpg"
        }
        titleBig={topBanner.bigTitle}
        title={topBanner.smallTitle}
      />
      <div className={styles.descriptionAndImage}>
        <div
          className={styles.rowImage}
          style={{
            backgroundImage: `url(https://getuct.com/wp-content/uploads/2021/06/REQUEST-A-FREE-CALL-BACK.jpg)`,
          }}
        >
          <div className={styles.address}>
            <div className={styles.address_list}>
              <ContactCard
                title={"EMAIL:"}
                detail={contactEmail}
                icon={<AiOutlineMail />}
              ></ContactCard>
              {address.map((item: AddressModel) => (
                <ContactCard
                  icon={<AiOutlineHome />}
                  title={item.title}
                  detail={item.address}
                  key={item.title}
                />
              ))}
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

class AddressModel {
  title: string;
  address: string;

  constructor(title: string, address: string) {
    this.address = address;
    this.title = title;
  }
}

interface TopBanner {
  smallTitle?: string;
  bigTitle?: string;
  bg?: string;
}
