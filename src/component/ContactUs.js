import React from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact_us.png'; // Make sure to have an image in your assets folder
import { RiWhatsappFill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-content">
        <div className="contact-us-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-us-text">
          <h1>Contact Us</h1>
          <p>If you have any questions regarding the notes or our app, feel free to reach out to us. We are here to help you!</p>
          <p>Email: <a href="mailto:civilhandnotes@gmail.com">✉️civilhandnotes@gmail.com</a></p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Whatsapp: <RiWhatsappFill color='green' style={{ marginLeft: '5px' }} />
            <a href='https://wa.me/918609522792' target='_blank' rel='noopener noreferrer'>+918609522792</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
