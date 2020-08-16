import React from "react";
import "./index.css";
import img_1 from "./images/course_1.jpg";
import img_2 from "./images/course_2.jpg";
import img_3 from "./images/course_3.jpg";
import img_4 from "./images/course_4.jpg";
import img_5 from "./images/course_5.jpg";
import img_6 from "./images/course_6.jpg";
import img_7 from "./images/course_7.jpg";
import img_8 from "./images/course_8.jpg";
import img_9 from "./images/course_9.jpg";
import img_10 from "./images/course_10.jpg";
import img_11 from "./images/course_11.jpg";
import img_12 from "./images/course_12.jpg";

const courseData = [
  {
    id: 1,
    name: "The Web Developer Bootcamp",
    desc:
      "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
    image: img_1,
    author: "Colt Steele",
    rating: "4.6",
    ratingNumber: "179,122",
  },
  {
    id: 2,
    name: "Angular - The Complete Guide (2020 Edition)",
    desc:
      "Master Angular 10 and build awesome, reactive web apps with the successor of Angular.js",
    image: img_2,
    author: "Maximilian",
    rating: "4.6",
    ratingNumber: "126,592",
  },
  {
    id: 3,
    name: "The Complete JavaScript Course 2020: Build Real Projects!",
    desc:
      "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
    image: img_3,
    author: "Rob Percival",
    rating: "4.6",
    ratingNumber: "80,311",
  },
  {
    id: 4,
    name: "The Complete Web Developer Course 2.0",
    desc:
      "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
    image: img_4,
    author: "Maximilian",
    rating: "4.6",
    ratingNumber: "62,185",
  },
  {
    id: 5,
    name: "The Complete 2020 Web Development Bootcamp",
    desc:
      "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
    image: img_5,
    author: "Angela Yu",
    rating: "4.6",
    ratingNumber: "78,747",
  },
  {
    id: 6,
    name: "Modern React with Redux [2020 Update]",
    desc:
      "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
    image: img_6,
    author: "Stephen Grider",
    rating: "4.6",
    ratingNumber: "59,323",
  },
];

const myWishList = [
  {
    id: 1,
    name: "Ultimate AWS Certified Solutions Architect Associate 2020",
    desc:
      "Pass the AWS Certified Solutions Architect Associate Certification SAA-C02. Complete Amazon Web Services Cloud training!",
    image: img_7,
    author: "Colt Steele",
    rating: "4.6",
    ratingNumber: "179,122",
  },
  {
    id: 2,
    name: "Kubernetes for the Absolute Beginners - Hands-on",
    desc:
      "Master Angular 10 and build awesome, reactive web apps with the successor of Angular.js",
    image: img_8,
    author: "Maximilian",
    rating: "4.6",
    ratingNumber: "126,592",
  },
  {
    id: 3,
    name: "Kubernetes for the Absolute Beginners - Hands-on",
    desc:
      "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
    image: img_9,
    author: "Rob Percival",
    rating: "4.6",
    ratingNumber: "80,311",
  },
  {
    id: 4,
    name: "Cisco CCNA 200-301 – The Complete Guide to Getting Certified",
    desc:
      "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!",
    image: img_10,
    author: "Maximilian",
    rating: "4.6",
    ratingNumber: "62,185",
  },
  {
    id: 5,
    name: "Learn Network Hacking From Scratch (WiFi & Wired)",
    desc:
      "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
    image: img_11,
    author: "Angela Yu",
    rating: "4.6",
    ratingNumber: "78,747",
  },
  {
    id: 6,
    name: "Learn Network Hacking From Scratch (WiFi & Wired)",
    desc:
      "Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
    image: img_12,
    author: "Stephen Grider",
    rating: "4.6",
    ratingNumber: "59,323",
  },
];

const myQuizes = [
  {
    id: 1,
    course: "Ultimate AWS Certified Solutions Architect Associate 2020",
    quize:
      "Pass the AWS Certified Solutions Architect Associate Certification SAA-C02. Complete Amazon Web Services Cloud training!",
    process: "100%",
    status: "Done",
    icon: "fa fa-check text-success",
  },
  {
    id: 2,
    course: "The Web Developer Bootcamp",
    quize:
      "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
    process: "80%",
    status: "Paused",
    icon: "fa fa-pause text-secondary",
  },
  {
    id: 3,
    course: "The Complete JavaScript Course 2020: Build Real Projects!",
    quize:
      "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
    process: "0%",
    status: "Failed",
    icon: "fa fa-times text-danger",
  },
  {
    id: 4,
    course: "The Complete Web Developer Course 2.0",
    quize:
      "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
    process: "65%",
    status: "Paused",
    icon: "fa fa-pause text-secondary",
  },
  {
    id: 5,
    course: "Angular - The Complete Guide (2020 Edition)",
    quize:
      "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
    process: "100%",
    status: "Done",
    icon: "fa fa-check text-success",
  },
  {
    id: 6,
    course: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp",
    quize:
      "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
    process: "74%",
    status: "Paused",
    icon: "fa fa-pause text-secondary",
  },
  {
    id: 7,
    course: "Leadership: Practical Leadership Skills",
    quize:
      "Master leadership skills and leadership techniques with this highly practical advice and training",
    process: "100%",
    status: "Done",
    icon: "fa fa-check text-success",
  },
];

const myOrders = [
  {
    id: 1,
    code: "45cbc4a0e4123f6920000002",
    time: "July 17 2019 10:21 pm",
    process: "Pending",
  },
  {
    id: 2,
    code: "45cbc4a0e4123f6927654922",
    time: "June 20 2020 15:14 pm",
    process: "Success",
  },
  {
    id: 1,
    code: "45cbc4a0e4123f6927654341",
    time: "June 23 2020 21:26 pm",
    process: "Pending",
  },
  {
    id: 1,
    code: "45cbc4a0e4123f6927654911",
    time: "Sept 20 2020 08:25 am",
    process: "Success",
  },
  {
    id: 1,
    code: "45cbc4a0e4123f69276549573",
    time: "Sept 27 2020 11:12 am",
    process: "Pending",
  },
  {
    id: 1,
    code: "45cbc4a0e4123f6927654922",
    time: "Nove 30 2020 09:08 pm",
    process: "Success",
  },
];
const MyCourses = () => {
  const renderMyCourses = () => {
    return courseData.map((course, key) => (
      <div className="col-4 item_box" key={key}>
        <div className="item">
          <img src={course.image} alt="/" />
          <div className="name">{course.name}</div>
          <div className="desc">{course.desc}</div>
          <div className="author">
            {course.author}
            <i className="fa fa-star ml-2"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
          </div>
        </div>
      </div>
    ));
  };
  const renderMyWishlist = () => {
    return myWishList.map((course, key) => (
      <div className="col-4 item_box" key={key}>
        <div className="item">
          <img src={course.image} alt="/" />
          <div className="name">{course.name}</div>
          <div className="desc">{course.desc}</div>
          <div className="author">
            {course.author}
            <i className="fa fa-star ml-2"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
          </div>
        </div>
      </div>
    ));
  };
  const renderMyQuizes = () => {
    return myQuizes.map((quize, key) => (
      <tr key={key}>
        <td>{key + 1}</td>
        <td>
          <div className="name">{quize.course}</div>
        </td>
        <td>
          <div className="quize">{quize.quize}</div>
        </td>
        <td className="process">{quize.process}</td>
        <td className="status ">
          <i className={quize.icon}></i>
          <span className="font-weight-bold">{quize.status}</span>
        </td>
      </tr>
    ));
  };
  const renderMyOrders = () => {
    return myOrders.map((order, key) => (
      <div className="col-12 order" key={key}>
        <div className="code">{order.code}</div>
        <div className="time">{order.time}</div>
        <div className={key % 2 !== 0 ? "text-success" : "text-danger"}>
          {order.process}
        </div>
      </div>
    ));
  };
  return (
    <div className="my_courses">
      <div className="container-fluid">
        <div className="row tab_content">
          <div className="col-12 d-flex justify-content-center">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="my-courses-tab"
                  data-toggle="pill"
                  href="#my-courses"
                  role="tab"
                  aria-controls="my-courses"
                  aria-selected="true"
                >
                  My Courses
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="my-wishlist-tab"
                  data-toggle="pill"
                  href="#my-wishlist"
                  role="tab"
                  aria-controls="my-wishlist"
                  aria-selected="false"
                >
                  My Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="my-quizes-tab"
                  data-toggle="pill"
                  href="#my-quizes"
                  role="tab"
                  aria-controls="my-quizes"
                  aria-selected="false"
                >
                  My Quizes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="my-orders-tab"
                  data-toggle="pill"
                  href="#my-orders"
                  role="tab"
                  aria-controls="my-orders"
                  aria-selected="false"
                >
                  My Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 mt-2">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="my-courses"
                role="tabpanel"
                aria-labelledby="my-courses-tab"
              >
                <div className="container-fluid">
                  <div className="row">
                    {renderMyCourses()}
                    <button className="btn_showmore">
                      Show more <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="my-wishlist"
                role="tabpanel"
                aria-labelledby="my-wishlist-tab"
              >
                <div className="container-fluid">
                  <div className="row">
                    {renderMyWishlist()}{" "}
                    <button className="btn_showmore">
                      Show more <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="my-quizes"
                role="tabpanel"
                aria-labelledby="my-quizes-tab"
              >
                <div className="container-fluid">
                  <div className="row my_quizes">
                    <div className="col-12">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Course</th>
                            <th>Quize</th>
                            <th>Process</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>{renderMyQuizes()}</tbody>
                      </table>
                    </div>
                    <button className="btn_showmore">
                      Show more <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="my-orders"
                role="tabpanel"
                aria-labelledby="my-orders-tab"
              >
                <div className="container-fluid">
                  <div className="row orders">
                    {renderMyOrders()}
                    <button className="btn_showmore">
                      Show more <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
