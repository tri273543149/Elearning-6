import React from "react";
import "./index.css";
import LogoUdemy from "./logo-coral.svg";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="footer_content">
          <ul>
            <li>
              <span>Udemy for Business</span>
            </li>
            <li>
              <span>Teach on Udemy</span>
            </li>
            <li>
              <span>Get the app</span>
            </li>
            <li>
              <span>About us</span>
            </li>
            <li>
              <span>Contact us</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>Blogs</span>
            </li>
            <li>
              <span>Help and Support</span>
            </li>
            <li>
              <span>Affiliate</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Terms</span>
            </li>
            <li>
              <span>Privacy policy and cookie policy</span>
            </li>
            <li>
              <span>Sitemap</span>
            </li>
            <li>
              <span>Futured Courses</span>
            </li>
          </ul>
          <select>
            <option>English</option>
            <option>French</option>
            <option>Vietnamese</option>
          </select>
        </div>
        <div className="footer_content_2">
          <img src={LogoUdemy} alt="/" />
          <p className="m-0">
            <i className="fa fa-copyright"></i>
            <span>Udemy, Inc.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
