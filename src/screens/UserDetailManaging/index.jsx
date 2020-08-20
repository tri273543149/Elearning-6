import React, { useState, useEffect, useCallback } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCoursesUserRegistered,
  getCoursesUserUnregistered,
  getCourseWaitingList,
} from "../../store/actions/user";

import RegisterCourses from "./RegisterCourses";
import UnregisterCourses from "./UnregisterCourses";
import WaitingList from "./WaitingList";

const UserDetailManaging = ({ match }) => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const userArray = useSelector((state) => state.users.userArray);
  let { taiKhoan } = match.params;

  const initialFetch = useCallback(() => {
    dispatch(getCoursesUserUnregistered(taiKhoan));
    dispatch(getCoursesUserRegistered(taiKhoan));
    dispatch(getCourseWaitingList(taiKhoan));
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
                  <span className="font-weight-bold">{taiKhoanNguoiDung}</span>
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
                COURSES OF THIS STUDENT
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
                COURSES THIS STUDENT HAVE'NT REGISTERED YET
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-waitingcourse-tab"
                data-toggle="pill"
                href="#pills-waitingcourse"
                role="tab"
                aria-controls="pills-waitingcourse"
                aria-selected="false"
              >
                WAITING REGISTERED LIST
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
              id="pills-waitingcourse"
              role="tabpanel"
              aria-labelledby="pills-waitingcourse-tab"
            >
              <WaitingList userDetail={userDetail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailManaging;
