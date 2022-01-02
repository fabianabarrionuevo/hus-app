import React from "react";
import '../../styles/index.css';
import './footer.css';

const Footer = () => {
  return (
    <div className="contact-conatiner">
      <ul className="contacts-items">
        <li>
          <a href="tel:+5493516000000">
            <p>Teléfono:</p>
            549 351 600 0000
          </a>
        </li>
        <li>
          <a href="mailto:cakestore@gmail.com">
            <p>Email:</p>
            cakestore@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            Instagram <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;