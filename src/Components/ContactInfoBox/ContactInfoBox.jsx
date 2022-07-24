import React from "react";
import "./ContactInfoBox.css";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactInfoBox() {
  return (
    <>
      <div className="info-box-wrapper flex">
        <FaTelegramPlane className="info-icon" />
        <span>Telegram</span>
        <span>+98 9394094563</span>
        <span className="info-send">send a message</span>
      </div>
      <div className="info-box-wrapper flex">
        <BsWhatsapp className="info-icon" />
        <span>Whatsapp</span>
        <span>+98 9394094563</span>
        <span className="info-send">send a message</span>
      </div>
      <div className="info-box-wrapper flex">
        <MdOutlineMailOutline className="info-icon" />
        <span>Email</span>
        <span>mohammad@gmail.com</span>
        <span className="info-send">send a message</span>
      </div>
      <div className="info-box-wrapper flex">
        <FaLinkedinIn className="info-icon" />
        <span>Linkedin</span>
        <span>mohammadyousefvand</span>
        <span className="info-send">send a message</span>
      </div>
    </>
  );
}

export default ContactInfoBox;
