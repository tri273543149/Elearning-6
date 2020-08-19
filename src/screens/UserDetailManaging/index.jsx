import React, { useState, useEffect, useCallback } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCoursesUserRegistered,
  getCoursesUserUnregistered,
} from "../../store/actions/user";

import RegisterCourses from "./RegisterCourses";
import UnregisterCourses from "./UnregisterCourses";

const UserDetailManaging = ({ match }) => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const userArray = useSelector((state) => state.users.userArray);
  let { taiKhoan } = match.params;

  const initialFetch = useCallback(() => {
    dispatch(getCoursesUserUnregistered(taiKhoan));
    dispatch(getCoursesUserRegistered(taiKhoan));
  }, [dispatch, taiKhoan]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const intialFetchUserDetail = useCallback(() => {
    for (let user of userArray) {
      if (user.taiKhoan === taiKhoan) {
        setUserDetail(user);
        break;
      }
    }
  }, [taiKhoan, userArray]);

  useEffect(() => {
    intialFetchUserDetail();
  }, [intialFetchUserDetail]);

  let { hoTen, soDt, email, maLoaiNguoiDung } = userDetail;
  let taiKhoanNguoiDung = userDetail.taiKhoan;
  return (
    <section className="user_detail_managing">
      <div className="content_box">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Username</td>
              <td>Fullname</td>
              <td>Phone</td>
              <td>Email</td>
              <td>UserType</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to={`/profile/${taiKhoanNguoiDung}`}>
                  {taiKhoanNguoiDung}
                </NavLink>
              </td>
              <td>{hoTen}</td>
              <td>{soDt}</td>
              <td>{email}</td>
              <td>{maLoaiNguoiDung}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-coursein-tab"
                data-toggle="pill"
                href="#pills-coursein"
                role="tab"
                aria-controls="pills-coursein"
                aria-selected="true"
              >
                User's Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-courseout-tab"
                data-toggle="pill"
                href="#pills-courseout"
                role="tab"
                aria-controls="pills-courseout"
                aria-selected="false"
              >
                Courses Unregistering
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-coursewaiting-tab"
                data-toggle="pill"
                href="#pills-coursewaiting"
                role="tab"
                aria-controls="pills-coursewaiting"
                aria-selected="false"
              >
                Courses Waiting List
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-coursein"
              role="tabpanel"
              aria-labelledby="pills-coursein-tab"
            >
              <RegisterCourses userDetail={userDetail} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-courseout"
              role="tabpanel"
              aria-labelledby="pills-courseout-tab"
            >
              <UnregisterCourses userDetail={userDetail} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-coursewaiting"
              role="tabpanel"
              aria-labelledby="pills-coursewaiting-tab"
            >
              3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailManaging;
