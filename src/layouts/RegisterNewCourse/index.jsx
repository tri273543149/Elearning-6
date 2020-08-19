import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { registerNewCourse } from "../../store/actions/course";

const RegisterNewCourse = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);
  const credentials = useSelector((state) => state.user.credentials) || {
    taiKhoan: "",
  };
  let { taiKhoan } = credentials;
  const renderCourseItem = () => {
    if (courses && courses.length > 0) {
      return courses.map((course, key) => (
        <div className="col-3 mb-4" key={key}>
          <div className="item">
            <img src={course.hinhAnh} alt="/" />
            <div className="name">{course.tenKhoaHoc}</div>
            <div className="desc">{course.moTa}</div>
            <button
              className="w-100 btn btn-primary"
              onClick={() => dispatch(registerNewCourse(taiKhoan, course))}
            >
              Register
            </button>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="register_new_course">
      <div className="container-fluid">
        <div className="row">{renderCourseItem()}</div>
      </div>
    </div>
  );
};

export default RegisterNewCourse;
