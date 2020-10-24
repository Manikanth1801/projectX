import React from "react";
import "./ContactUs.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarker,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaYoutube
} from "react-icons/fa";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function ContactUs() {
  return (
    <div id="contactUs">
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
              <span>Ambad link roda, nashik</span> Maharashtra 422010
            </p>
          </div>

          <div className="footer-center-info">
            <FaPhone className="footer-center-icon" />
            <p>+91 7972902094</p>
          </div>

          <div className="footer-center-info">
            <FaEnvelope className="footer-center-icon" />
            <p>
              <a href="mailto:support@company.com">support@proinsite.in</a>
            </p>
          </div>

          
        </div>

        

        <div class="footer-right">

        <div className="footer-center-info">
            <FaEnvelope className="footer-center-icon" />
            <p>
              <a href="mailto:info@company.com">info@proinsite.in</a>
            </p>
          </div>

          <p class="footer-company-about">
            <span>About the company</span>
            ProInSite is a blog for web designers, graphic designers, web
            developers &amp; SEO Learner.
          </p>

          <div class="footer-icons">
            
            <a href="https://www.instagram.com/proinsite_edutek/?r=nametag" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCG4WwnzzCQ3fibwPy1wusqQ" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/proinsite-edutek-7b7ab31b5/" target="_blank">
              <FaLinkedin />
            </a>
            {/* <a href="/">
              <FaGithub />
            </a> */}
          
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
