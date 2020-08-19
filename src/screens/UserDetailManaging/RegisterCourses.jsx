import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { unregisterUserFromCourse } from "../../store/actions/course";

const RegisterCourses = ({ userDetail }) => {
  const dispatch = useDispatch();
  const registeredCourseList = useSelector(
    (state) => state.registerCourse.registeredCourseList
  );

  const renderCourseItem = () => {
    if (registeredCourseList && registeredCourseList.length > 0) {
      return registeredCourseList.map((course, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <NavLink to={`/admin-course-detail/${course.maKhoaHoc}`}>
              {course.maKhoaHoc}
            </NavLink>
          </td>
          <td>
            <div className="item">{course.tenKhoaHoc}</div>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(unregisterUserFromCourse(course, userDetail))
              }
            >
              Unregister
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div className="register_courses">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Index</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderCourseItem()}</tbody>
      </table>
    </div>
  );
};

export default RegisterCourses;
