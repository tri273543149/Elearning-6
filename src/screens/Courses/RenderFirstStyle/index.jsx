import React from "react";
import { createAction } from "../../../store/actions";
import { ADD_TO_CART } from "../../../store/constants/cart";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const RenderFirstStyle = ({ course }) => {
  const dispatch = useDispatch();
  let { hinhAnh, tenKhoaHoc, maKhoaHoc, moTa } = course;
  return (
    <div className="renders_style_1_box">
      <i
        className="fa fa-cart-plus icon_1"
        onClick={() => dispatch(createAction(ADD_TO_CART, course))}
      ></i>
      <NavLink to={`/course-detail/${maKhoaHoc}`}>
        <div className="course_item_1">
          <img src={hinhAnh} alt="/" />
          <div className="text_box">
            <div className="course_name">{tenKhoaHoc}</div>
            <div className="course_desc">{moTa}</div>
            <div className="course_star">
              <span className="text-dark mr-2">4.9</span>
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

export default RenderFirstStyle;
