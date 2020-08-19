import React from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../../store/actions";
import { IS_MODAL_OPEN } from "../../../store/constants/modal";
import { findUser } from "../../../store/actions/user";
import { deleteUser } from "../../../store/actions/user";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const UserItem = ({ user, index }) => {
  const dispatch = useDispatch();
  let { taiKhoan, hoTen, email, soDt, maLoaiNguoiDung, soDT } = user;
  const getUserInfo = () => {
    dispatch(createAction(IS_MODAL_OPEN, "UpdateUser"));
    dispatch(findUser(taiKhoan));
  };
  const handleOnDeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteUser(taiKhoan));
        Swal.fire("Deleted!", "success");
      }
    });
  };
  return (
    <tr>
      <td>{index}</td>
      <td>
        <NavLink to={`/admin-user-detail/${taiKhoan}`}>
          <span className="font-weight-bold"> {taiKhoan}</span>
        </NavLink>
      </td>
      <td>{email}</td>
      <td>{soDt ? soDt : soDT}</td>
      <td>{hoTen}</td>
      <td>{maLoaiNguoiDung}</td>
      <td>
        <button className="btn btn-primary mr-1" onClick={getUserInfo}>
          <i className="fa fa-cog"></i>
        </button>
        <button className="btn btn-danger" onClick={handleOnDeleteUser}>
          <i className="fa fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
