import React, { useState, useEffect } from "react";
import "./index.css";
import { courseService } from "../../services";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { ADD_TO_CART } from "../../store/constants/cart";
import Image from "./test1.jpg";

const CourseDetail = ({ history, match }) => {
  const dispatch = useDispatch();
  const [courseDetail, setCourseDetail] = useState({});
  let { maKhoaHoc } = match.params;
  useEffect(() => {
    courseService
      .layThongTinKhoaHoc(maKhoaHoc)
      .then((res) => {
        setCourseDetail(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, [maKhoaHoc]);
  const handleOnByNow = (course) => {
    dispatch(createAction(ADD_TO_CART, course));
    history.push("/shopping-cart");
  };
  let { tenKhoaHoc, hinhAnh, moTa, ngayTao, nguoiTao, luotXem } = courseDetail;
  return (
    <section className="course_detail">
      <div className="item_fixed">
        <img src={hinhAnh} alt="/" />
        <div className="content_box">
          <p className="course_price">
            <span>$12.99</span>
            <span className="line_through">$99.99</span>
            <span className="sale_off">86% off</span>
          </p>
          <button
            className="btn btn-danger w-100"
            onClick={() => dispatch(createAction(ADD_TO_CART, courseDetail))}
          >
            Add to cart
          </button>
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => handleOnByNow(courseDetail)}
          >
            Buy now
          </button>
          <button className="btn btn-outline-success w-100">
            PREVIEW THIS COURSE
          </button>
          <p className="guarantee">30-Day Money-Back Guarantee</p>
        </div>
      </div>
      <div className="top_content">
        <div className="container">
          <div className="row m-0">
            <div className="col-8">
              <p className="course_name">
                {tenKhoaHoc ? tenKhoaHoc : "Lorem ipsum dolor sit amet."}
              </p>
              <p className="course_mota">
                {moTa
                  ? moTa
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
              </p>
              <p className="course_rating">
                <span className="badge badge-warning">Highest Rated</span>
                <span className="rating_number">4.9</span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
                <span className="rating_figure">({luotXem ? luotXem : "0"} views)</span>
                <span className="rating_students">(60.654 students)</span>
              </p>
              <p className="course_author">
                Created by{" "}
                <span className="author_name">
                  {nguoiTao ? nguoiTao.hoTen : ""}
                </span>
              </p>
              <p className="course_date">
                <i className="fa fa-hourglass-start"></i>
                Last updated{" "}
                <span className="course_created_date">{ngayTao}</span>
              </p>
              <div className="button_content">
                <button className="btn btn-outline-light">
                  Wishlist<i className="fa fa-heart"></i>
                </button>
                <button className="btn btn-outline-light">
                  Share<i className="fa fa-share"></i>
                </button>
                <button className="btn btn-outline-light">
                  Gift this course<i className="fa fa-gift"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid_content">
        <div className="container">
          <div className="row m-0">
            <div className="col-8">
              <div className="content_box">
                <p className="title">What you'll learn</p>
                <div className="d-flex">
                  <div>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Create and use Groups
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Create and use Static Sets
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Control Reference Lines with Parameters
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Create highly interactive Dashboards
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Understand the difference between Groups and Sets
                    </p>
                  </div>
                  <div>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Use multiple fields in the colour property
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Use Sets as filters
                    </p>
                    <p className="body">
                      <i className="fa fa-check"></i>
                      Combine Sets into more Sets
                    </p>
                  </div>
                </div>
                <p className="text-primary mt-3">Watch more...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot_content">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="requirement">
                <p className="title">Requirements</p>
                <ul>
                  <li>
                    No prior knowledge is necessary. This course starts with the
                    basics before diving into more advanced tips and strategies.
                  </li>
                  <li>
                    The main requirement is a willingness to commit to the
                    process and put in the work. This course outlines the steps,
                    but it's up to you to take action and do what it takes to
                    make your blog a success.
                  </li>
                </ul>
              </div>
              <div className="description">
                <p className="title">Description</p>
                <p className="body">
                  UDEMY'S #1 BESTSELLING BLOGGING COURSE — REDESIGNED WITH ALL
                  NEW CURRICULUM FOR 2020 AND BEYOND
                </p>
                <p className="sub_body">
                  Merrill provides invaluable tips and examples for starting a
                  blog and making it into a career."{" "}
                  <span className="font-weight-bold">—CNN</span>
                </p>
                <p className="sub_body">
                  "...the entire process for turning a blog into a bonafide
                  moneymaker."{" "}
                  <span className="font-weight-bold">—The Next Web</span>
                </p>
                <p className="sub_body">
                  "Brad is clearly experienced, accomplished and an expert in
                  this subject. His knowledge will be very helpful for those who
                  are able to absorb and implement all of his suggestions and
                  tips."{" "}
                  <span className="font-weight-bold">—Leah, Udemy student</span>
                </p>
                <p className="sub_body">
                  "Totally AWESOME course!!!!! You have addressed every aspect
                  of getting started with a new blog, but better yet what it
                  takes to make it a success. I can't wait to get started."{" "}
                  <span className="font-weight-bold">
                    —Terry, Udemy student
                  </span>
                </p>
              </div>
              <div className="bottom_box">
                <p className="title">Featured review</p>
                <div className="d-flex">
                  <img src={Image} alt="/" />
                  <div>
                    <p className="font-weight-bold m-0">Santiago Suarez</p>
                    <p className="text m-0">4 courses</p>
                    <p className="text m-0">3 reviews</p>
                  </div>
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                  <span>a year ago</span>
                </div>
                <div className="text_box">
                  What an excellent course!! I would recommend it to anyone
                  looking to learn the skills you need to start a blog. The
                  instructor explains concepts very clearly, giving detailed
                  examples with graphics so it's easy to learn and remember, and
                  provides step by step instructions about creating content
                  online. I'm only halfway, but I already have a few useful
                  tools at my disposal. Can't wait to get started!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
