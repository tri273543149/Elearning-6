import React, { useState, useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_OPEN } from "../../store/constants/modal";
import { FILTER } from "../../store/constants/filter";
import { filterAction } from "../../store/actions";

const UserManaging = () => {
  const dispatch = useDispatch();
  const userArray = useSelector((state) => state.users.userArray);
  const filter = useSelector((state) => state.filter);

  const [keyUsername, setKeyUsername] = useState("");
  const [keyPhone, setKeyPhone] = useState("");
  const [userType, setUserType] = useState("all");

  const handleOnSearchUsername = (e) => {
    setKeyUsername(e.target.value);
  };

  const handleOnSearchPhone = (e) => {
    setKeyPhone(e.target.value);
  };

  const handleOnChangeUserType = (e) => {
    setUserType(e.target.value);
  };

  useEffect(() => {
    if (keyUsername !== "") {
      dispatch(filterAction(FILTER, "username", keyUsername));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyUsername]);

  useEffect(() => {
    if (keyPhone !== "") {
      dispatch(filterAction(FILTER, "phone", keyPhone));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPhone]);

  useEffect(() => {
    if (userType !== "") {
      dispatch(filterAction(FILTER, "userType", userType));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);

  const renderUserItem = () => {
    if (userArray && userArray.length > 0) {
      let temptArray = [];
      switch (filter.filterType) {
        case "username":
          temptArray = userArray.filter((user) => {
            return (
              user.taiKhoan
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
                .indexOf(
                  filter.filterValue
                    .trim()
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d")
                    .replace(/Đ/g, "D")
                ) !== -1
            );
          });
          break;
        case "phone":
          temptArray = userArray.filter((user) => {
            return (
              user.soDt
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
                .indexOf(
                  filter.filterValue
                    .trim()
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d")
                    .replace(/Đ/g, "D")
                ) !== -1
            );
          });
          break;
        case "userType":
          if (filter.filterValue === "all") {
            temptArray = [...userArray];
          } else {
            for (let user of userArray) {
              if (user.maLoaiNguoiDung === filter.filterValue) {
                temptArray = [...temptArray, user];
              }
            }
          }
          break;
        default:
          temptArray = [...userArray];
      }
      return temptArray.map((user, key) => (
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
        <input
          type="text"
          placeholder="Username"
          onKeyUp={handleOnSearchUsername}
        />
        <input type="text" placeholder="Phone" onKeyUp={handleOnSearchPhone} />
        <select onClick={handleOnChangeUserType}>
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
