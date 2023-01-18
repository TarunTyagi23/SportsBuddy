import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Contact Us</p>
        <p className="footer-subscription-text">
          Complete this form and we will get in touch with you!
        </p>
        <div className="input-areas">
          <form>
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="footer-input"
            />
          </form>
          <form>
            <input
              type="mobile-number"
              name="mobile-number"
              placeholder="Your Mobile Number"
              className="footer-input"
            />
          </form>
          <Button buttonStyle="btn--outline">Submit</Button>
        </div>
      </section>
      <div className="footer-logo">
        <Link to="/" className="social-logo">
          Sports Buddy <FontAwesomeIcon icon={faHippo} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
