import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUserToCourse } from "../../store/actions/course";

const UnregisteredStudent = ({ courseDetail }) => {
  const dispatch = useDispatch();
  const unregisteredStudentList = useSelector(state => state.register.unregisteredStudentList);
  const renderStudentItem = () => {
    if (unregisteredStudentList && unregisteredStudentList.length > 0) {
      return unregisteredStudentList.map((student, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{student.taiKhoan}</td>
          <td>{student.hoTen}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => dispatch(registerUserToCourse(courseDetail, student))}
            >
              Register
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="unregistered_student">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Index</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderStudentItem()}</tbody>
      </table>
    </div>
  );
};

export default UnregisteredStudent;
