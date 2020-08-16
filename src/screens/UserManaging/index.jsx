import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";

const UserManaging = () => {
  const dispatch = useDispatch();
  const userArray = useSelector((state) => state.users.userArray);
  const renderUserItem = () => {
    if (userArray && userArray.length > 0) {
      return userArray.map((user, key) => (
        <UserItem user={user} key={key} index={key + 1} />
      ));
    }
  };
  return (
    <section className="user_managing">
      <div className="control_bar">
        <button
          className="btn btn-success"
          onClick={() => dispatch(createAction(IS_MODAL_OPEN, "AddNewUser"))}
        >
          ADD NEW USER
        </button>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Phone" />
        <select>
          <option value="all">UserType</option>
          <option value="HV">HV</option>
          <option value="GV">GV</option>
        </select>
      </div>
      <div className="content_box">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Index</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Fullname</th>
              <th>UserType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderUserItem()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default UserManaging;
