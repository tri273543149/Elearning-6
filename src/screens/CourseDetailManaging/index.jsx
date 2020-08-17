import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserOfCourse } from "../../store/actions/course";
import {
  registerUserToCourse,
  unregisterUserFromCourse,
} from "../../store/actions/course";
import { FILTER } from "../../store/constants/filter";
import { filterAction } from "../../store/actions";

const CourseDetailManaging = ({ match }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const [keyUsername, setKeyUsername] = useState("");
  const handleOnSearchUsername = (e) => {
    setKeyUsername(e.target.value);
  };
  useEffect(() => {
    if (keyUsername !== "") {
      dispatch(filterAction(FILTER, "username", keyUsername));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyUsername]);

  const userArray = useSelector((state) => state.users.userArray);
  const courseDetail = useSelector(
    (state) =>
      state.courseDetail || {
        tenKhoaHoc: "",
        biDanh: "",
        moTa: "",
        ngayTao: "",
        lstHocVien: [],
      }
  );
  const { maKhoaHoc } = match.params;
  useEffect(() => {
    dispatch(getUserOfCourse(maKhoaHoc));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let { tenKhoaHoc, biDanh, moTa, ngayTao, lstHocVien } = courseDetail;

  const renderListHocVien = () => {
    if (lstHocVien && lstHocVien.length > 0) {
      return lstHocVien.map((hv, key) => (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{hv.taiKhoan}</td>
          <td>{hv.hoTen}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleOnUnregisterUserFromCourse(hv.taiKhoan)}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  const handleOnRegisterUserToCourse = (user) => {
    dispatch(registerUserToCourse(maKhoaHoc, user));
  };
  const handleOnUnregisterUserFromCourse = (taiKhoan) => {
    dispatch(unregisterUserFromCourse(maKhoaHoc, taiKhoan));
  };
  const renderStudentItem = () => {
    if (userArray && userArray.length > 0) {
      let temptArray = [];
      for (let user of userArray) {
        if (user.maLoaiNguoiDung === "HV") {
          temptArray = [...temptArray, user];
        }
      }
      let updateArray_second = [];
      switch (filter.filterType) {
        case "username":
          updateArray_second = temptArray.filter((user) => {
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
        default:
          updateArray_second = [...temptArray];
          break;
      }
      return updateArray_second.map((user, key) => (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.hoTen}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => handleOnRegisterUserToCourse(user)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <section className="coursedetail_managing">
      <p className="title">Course Detail</p>
      <div className="container">
        <p className="subtitle">User to This Course</p>
        <div className="row">
          <div className="col-6">
            <div className="gridsystem">
              <div className="font-weight-bold">Course Name</div>
              <div className="item">{tenKhoaHoc}</div>
              <div className="font-weight-bold">Alias</div>
              <div className="item">{biDanh}</div>
              <div className="font-weight-bold">Description</div>
              <div className="item">{moTa}</div>
              <div className="font-weight-bold">Created date</div>
              <div className="item">{ngayTao}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="table_content">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Username</th>
                    <th>Fullname</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{renderListHocVien()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <input
              type="text"
              placeholder="Username"
              onKeyUp={handleOnSearchUsername}
            />
          </div>
          <div className="col-12">
            <div className="content_box text-center">
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
                <tbody>{renderStudentItem()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailManaging;
