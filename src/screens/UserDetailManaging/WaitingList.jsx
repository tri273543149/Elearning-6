import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { confirmUserCourse } from "../../store/actions/course";

const WaitingList = ({ userDetail }) => {
  const dispatch = useDispatch();
  const waitingCourseList = useSelector(
    (state) => state.registerCourse.waitingCourseList
  );
  const renderCourseItem = () => {
    if (waitingCourseList && waitingCourseList.length > 0) {
      return waitingCourseList.map((course, index) => (
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
              className="btn btn-warning"
              onClick={() => dispatch(confirmUserCourse(course, userDetail))}
            >
              Confirm
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div className="waiting_courselist">
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

export default WaitingList;
