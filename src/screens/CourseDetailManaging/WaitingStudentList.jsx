import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmUserToCourse } from "../../store/actions/course";

const WaitingStudentList = ({ courseDetail }) => {
  const dispatch = useDispatch();
  const waitingList = useSelector(state => state.register.waitingList);
  const renderStudentItem = () => {
    if (waitingList && waitingList.length > 0) {
      return waitingList.map((student, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{student.taiKhoan}</td>
          <td>{student.hoTen}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(confirmUserToCourse(courseDetail, student))}
            >
              Confirm
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

export default WaitingStudentList;
