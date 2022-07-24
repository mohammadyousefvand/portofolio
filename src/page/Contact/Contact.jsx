import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactInfoBox from "../../Components/ContactInfoBox/ContactInfoBox";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact flex w-full p-x">
      <span className="contact-title ">Contact me</span>
      <div className="contact-wrapper flex">
        <div className="contact-info-wrapper flex">
          <ContactInfoBox />
        </div>
        <div className="contact-field-wrapper flex center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
