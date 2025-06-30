import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";
import {
  ContactSection,
  AddressSection,
} from "../../containers";
import "./Contact.css";

interface ContactProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Contact: React.FC<ContactProps> = (props) => {
  const { theme } = props;

  if (!pageEnabled.contact) {
    return null;
  }

  return (
    <div className="main-page">
      <Header/>
      <ContactSection theme={theme}/>
      <AddressSection theme={theme} />
      {/* <ContactMessage theme={theme} /> */}
      <Footer/>
      <TopButton />
    </div>
  );
};

export default Contact;
