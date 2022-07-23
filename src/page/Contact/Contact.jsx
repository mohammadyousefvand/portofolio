import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact flex w-full p-x">
      <span className="contact-title ">Contact me</span>
      <div className="contact-wrapper flex">
        <div className="contact-info-wrapper flex p-x">
          <span>...</span>
        </div>
        <div className="contact-field-wrapper flex p-x"></div>
      </div>
    </div>
  );
}

export default Contact;
