import React from "react";
import "./index.css";
import UserImg from "./usericon.png";
import { NavLink } from "react-router-dom";

const OnSignIn = ({ credentials }) => {
  return (
    <>
      <NavLink
        to="/admin-courses"
        className={
          credentials.maLoaiNguoiDung === "GV" ? "admin_signin" : "d-none"
        }
      >
        <i className="fa fa-cog mr-3"></i>
      </NavLink>
      <NavLink to={`/profile/${credentials.taiKhoan}`}>
        <div className="on_sign_in">
          <span>{credentials.hoTen}</span>
          <img src={UserImg} alt="/" />
        </div>
      </NavLink>
    </>
  );
};

export default OnSignIn;
