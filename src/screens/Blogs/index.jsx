import React from "react";
import "./index.css";
import Footer from "../../components/Footer";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";

const dataArray = [
  {
    img: img1,
    name: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
    author: "Angela Yu",
    date: "September 21, 2019",
  },
  {
    img: img2,
    name: "Why Splunk Certification is a Top Skill for Data Scientists",
    author: "Adam Frisbee",
    date: "August 15, 2019",
  },
  {
    img: img3,
    name: "Succeeding at the Top: Leadership Skills for Senior Leaders",
    author: "Ron Carucci",
    date: "September 14, 2019",
  },
  {
    img: img4,
    name: "Angular vs. React: Which Framework is Best for Your Next Project?",
    author: "Kelly Schwarze",
    date: "September 11, 2019",
  },
  {
    img: img5,
    name:
      "What is a Full Stack Developer? How Does It Compare to Back-End or Front-End Developers?",
    author: "Colt Steele",
    date: "August 28, 2019",
  },
  {
    img: img6,
    name: "Unity vs Unreal – which game engine is best for you?",
    author: "Ben Tristem",
    date: "July 09, 2019",
  },
  {
    img: img7,
    name: "What is a PHP Function? Understanding Syntax, Types, and More",
    author: "Julia Sinclare",
    date: "September 11, 2019",
  },
  {
    img: img8,
    name:
      "Information Security Analyst: How to Get Started in This Growing IT Career",
    author: "David Zomaya",
    date: "October 21, 2019",
  },
  {
    img: img9,
    name: "Why the AWS Security Specialty Should Be Your Next IT Certification",
    author: "Rich Crisci",
    date: "September 01, 2019",
  },
  {
    img: img10,
    name: "10 New & Noteworthy Online Courses in June 2020 on Udemy",
    author: "Sifia Abbasi",
    date: "August 16, 2019",
  },
];

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="mid_content">
        <div className="container">
          <p className="title">Popular Articles</p>
          <div className="row">
            <div className="col-9">
              <div className="container-fluid">
                <div className="row">
                  {dataArray.map((blog, key) => (
                    <div className="col-12 col-md-6" key={key}>
                      <div className="item_box">
                        <img src={blog.img} alt="/" />
                        <div className="box">
                          <div className="name">{blog.name}</div>
                          <div className="author">{blog.author}</div>
                          <div className="date">{blog.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="categories">
                <p className="subtitle">Categories</p>
                <div className="item">
                  <ul>
                    <li className="mt-1 font-weight-bold text-danger">
                      Popular
                    </li>
                    <li>Development</li>
                    <li>IT and Software</li>
                    <li>Data Science</li>
                    <li>Soft Skills</li>
                    <li>Business</li>
                    <li>Marketing</li>
                  </ul>
                </div>
              </div>
              <div className="recent_post">
                <p className="subtitle">Recent Posts</p>
                <div className="item">
                  <img src={img10} alt="/" />
                  <div className="name">
                    Why Swift UI Should Be on the Radar of Every Mobile
                    Developer
                  </div>
                  <div className="author">Angela Yu</div>
                  <div className="date">September 21, 2019</div>
                </div>
                <div className="item">
                  <img src={img4} alt="/" />
                  <div className="name">
                    Angular vs. React: Which Framework is Best for Your Next
                    Project?
                  </div>
                  <div className="author">Kelly Schwarze</div>
                  <div className="date">August 15, 2019</div>
                </div>
                <div className="item">
                  <img src={img9} alt="/" />
                  <div className="name">
                    What is a PHP Function? Understanding Syntax, Types, and
                    More
                  </div>
                  <div className="author">Julia Sinclare</div>
                  <div className="date">September 11, 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blogs;
