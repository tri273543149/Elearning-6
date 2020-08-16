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
              <a>Udemy for Business</a>
            </li>
            <li>
              <a>Teach on Udemy</a>
            </li>
            <li>
              <a>Get the app</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Help and Support</a>
            </li>
            <li>
              <a>Affiliate</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Terms</a>
            </li>
            <li>
              <a>Privacy policy and cookie policy</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
            <li>
              <a>Futured Courses</a>
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
