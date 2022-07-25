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
        <span className="info-user-number">+98 9394094563</span>
        <a href="https://t.me/fcb_6666" className="info-send">
          Send a Message
        </a>
      </div>
      <div className="info-box-wrapper flex">
        <BsWhatsapp className="info-icon" />
        <span>Whatsapp</span>
        <span className="info-user-number">+98 9394094563</span>
        <a href="https://wa.me/989394094563" className="info-send">
          Send a Message
        </a>
      </div>
      <div className="info-box-wrapper flex">
        <MdOutlineMailOutline className="info-icon" />
        <span>Email</span>
        <span className="info-user-number">mohammad@gmail.com</span>
        <a
          href="https://mohammadyousefvand1999@gmail.com/"
          className="info-send"
        >
          Send a Message
        </a>
      </div>
      <div className="info-box-wrapper flex">
        <FaLinkedinIn className="info-icon" />
        <span>Linkedin</span>
        <span className="info-user-number">mohammadyousefvand</span>
        <a
          href="https://www.linkedin.com/in/mohammad-yousefvand-a9b045226/"
          className="info-send"
        >
          See Profile
        </a>
      </div>
    </>
  );
}

export default ContactInfoBox;
