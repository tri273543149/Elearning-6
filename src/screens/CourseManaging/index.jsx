import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { createAction } from "../../store/actions";

const CourseManaging = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  const renderCourseItem = () => {
    return courses.map((course, key) => (
      <div className="col-12 p-0" key={key}>
        <CourseItem course={course} index={key + 1} />
      </div>
    ));
  };
  return (
    <section className="course_managing">
      <div className="control_bar">
        <button
          className="btn btn-success mr-auto"
          onClick={() => dispatch(createAction(IS_MODAL_OPEN, "AddNewCourse"))}
        >
          <i className="fa fa-plus mr-2"></i>ADD NEW COURSE
        </button>
        <input type="text" placeholder="Search course" />
        <select>
          <option value="All">Category</option>
          <option value="BackEnd">BackEnd</option>
          <option value="Design">Design</option>
          <option value="DiDong">Mobile</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="FullStack">FullStack</option>
          <option value="TuDuy">Mentality</option>
        </select>
      </div>
      <div className="content_box">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="title_box">
              <div className="item_1 text-center">Course</div>
              <div className="item_2 text-center">Created by</div>
              <div className="item_3 text-center">Published at</div>
              <div className="item_4 text-center">Actions</div>
            </div>
          </div>
          {renderCourseItem()}
        </div>
      </div>
    </section>
  );
};

export default CourseManaging;
