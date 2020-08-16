import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAction } from "../../../store/actions";
import { ADD_TO_CART } from "../../../store/constants/cart";

const CourseItem = ({ course }) => {
    const dispatch = useDispatch();
    let { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = course;
    return (
      <div className="courseitem">
        <div
          className="cart"
          onClick={() => dispatch(createAction(ADD_TO_CART, course))}
        >
          <i className="fa fa-cart-plus"></i>
        </div>
        <NavLink to={`/course-detail/${maKhoaHoc}`}>
          <div className="item">
            <img src={hinhAnh} alt="/" />
            <div className="text_box">
              <div className="course_name">{tenKhoaHoc}</div>
              <div className="course_desc">{moTa}</div>
              <div className="course_star">
                <span>4.9</span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  };
  
  export default CourseItem;