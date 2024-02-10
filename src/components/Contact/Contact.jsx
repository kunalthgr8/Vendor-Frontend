import React from "react";
import "./Contact.css";
import { LuPhoneCall } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactInfo = ({ icon, text }) => (
  <div className="Individual-Contact">
    {icon}
    <Link to="#">{text}</Link>
  </div>
);

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Customer-Contact">
        <header className="Title-Customer">
          <h1>Customer Support</h1>
          <h2>Your Satisfaction is our Priority !!</h2>
        </header>
        <div className="Contact-Support">
          <div className="Vertical-Contact">
            <ContactInfo icon={<GrLocation />} text="IIT Bhilai" />
            <ContactInfo icon={<LuPhoneCall />} text="+91 7973203702" />
            <ContactInfo
              icon={<BiLogoGmail />}
              text="kunalsingla@iitbhilai.ac.in"
            />
          </div>
          <div className="Vertical-Contact">
            <ContactInfo icon={<FaSquareXTwitter />} text="@Kunalthgr8" />
            <ContactInfo icon={<FaFacebookSquare />} text="Kunal Singla" />
            <ContactInfo icon={<FaInstagram />} text="kunalsingla1126" />
          </div>
        </div>
      </div>
      <div className="Feedback-Contact">
        <div className="Title-Feedback">Complaint</div>
        <textarea placeholder="Write your message" />
        <div className="Submit-Feedback">
          <button type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
