import React from "react";
import "./ContactUs.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <hr />
      <footer class="footer">
        <div class="footer-left">
          <h1>
            Pro<span>In</span>Site
          </h1>

          <p class="footer-links">
            <a href="/">Home</a> · <a href="/">Blog</a> · <a href="/">About</a>{" "}
            · <a href="/">Contact</a>
          </p>

          <p class="footer-company-name">proinsite &copy; 2019</p>
        </div>

        <div class="footer-center">
          <div className="footer-center-info">
            <FaMapMarker className="footer-center-icon" />
            <p>
              <span>21 Revolution Street</span> Delhi, India
            </p>
          </div>

          <div className="footer-center-info">
            <FaPhone className="footer-center-icon" />
            <p>+1 555 123456</p>
          </div>

          <div className="footer-center-info">
            <FaEnvelope className="footer-center-icon" />
            <p>
              <a href="mailto:support@company.com">contact@proinsite.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            ProInSite is a blog for web designers, graphic designers, web
            developers &amp; SEO Learner.
          </p>

          <div class="footer-icons">
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
