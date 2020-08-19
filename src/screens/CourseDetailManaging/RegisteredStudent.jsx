import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unregisterUserFromCourse } from "../../store/actions/course";

const RegisteredStudent = ({ maKhoaHoc }) => {
  const dispatch = useDispatch();
  const registeredStudentList = useSelector(state => state.register.registeredStudentList);
  const renderStudentItem = () => {
    if (registeredStudentList && registeredStudentList.length > 0) {
      return registeredStudentList.map((student, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{student.taiKhoan}</td>
          <td>{student.hoTen}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(unregisterUserFromCourse(maKhoaHoc, student))}
            >
              Unregister
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="registered_student">
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

export default RegisteredStudent;
