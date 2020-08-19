import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUserToCourse } from "../../store/actions/course";

const UnregisterCourses = ({ userDetail }) => {
  const dispatch = useDispatch();
  const unregisteredCourseList = useSelector(
    (state) => state.registerCourse.unregisteredCourseList
  );

  const renderCourseItem = () => {
    if (unregisteredCourseList && unregisteredCourseList.length > 0) {
      return unregisteredCourseList.map((course, index) => (
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
              className="btn btn-success"
              onClick={() => dispatch(registerUserToCourse(course, userDetail))}
            >
              Register
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

export default UnregisterCourses;
