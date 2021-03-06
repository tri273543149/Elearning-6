import React, { useEffect, useCallback, useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import UnregisteredStudent from "./UnregisteredStudent";
import RegisteredStudent from "./RegisteredStudent";
import WaitingStudentList from "./WaitingStudentList";
import {
  getUnregiteredUserList,
  getRegisteredUserList,
  getUserWaitingList,
} from "../../store/actions/user";

const CourseDetailManaging = ({ match }) => {
  const dispatch = useDispatch();
  const [courseDetail, setCourseDetail] = useState({});
  const courses = useSelector((state) => state.course.courses);
  let { maKhoaHoc } = match.params;

  const intialFetch = useCallback(() => {
    dispatch(getUnregiteredUserList(maKhoaHoc));
    dispatch(getRegisteredUserList(maKhoaHoc));
    dispatch(getUserWaitingList(maKhoaHoc));
  }, [dispatch, maKhoaHoc]);
  useEffect(() => {
    intialFetch();
  }, [intialFetch]);

  const initialFetchCourseDetail = useCallback(() => {
    for (let course of courses) {
      if (course.maKhoaHoc === maKhoaHoc) {
        setCourseDetail(course);
        break;
      }
    }
  }, [maKhoaHoc, courses]);

  useEffect(() => {
    initialFetchCourseDetail();
  }, [initialFetchCourseDetail]);

  let {
    hinhAnh,
    tenKhoaHoc,
    moTa,
    nguoiTao,
    ngayTao,
    danhMucKhoaHoc,
  } = courseDetail;
  return (
    <section className="course_detail_managing">
      <p className="title">Course Information</p>
      <div className="content_box">
        <div className="row">
          <div className="col-4">
            <img src={hinhAnh} alt="/" />
          </div>
          <div className="col-8">
            <p className="name mb-0">
              <span className="font-weight-bold">Course name: </span>
              {tenKhoaHoc}
            </p>
            <p className="desc mb-0">
              <span className="font-weight-bold">Description: </span>
              {moTa}
            </p>
            <p className="author mb-0">
              <span className="font-weight-bold">Author: </span>
              {nguoiTao ? nguoiTao.hoTen : ""}
            </p>
            <p className="date mb-0">
              <span className="font-weight-bold">Created date: </span>
              {ngayTao}
            </p>
            <p className="mb-0">
              <span className="font-weight-bold">Category: </span>
              {danhMucKhoaHoc ? danhMucKhoaHoc.maDanhMucKhoahoc : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="tab_content">
        <div>
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-in-tab"
                data-toggle="pill"
                href="#pills-in"
                role="tab"
                aria-controls="pills-in"
                aria-selected="true"
              >
                ALL STUDENT IN THIS COURSE
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-out-tab"
                data-toggle="pill"
                href="#pills-out"
                role="tab"
                aria-controls="pills-out"
                aria-selected="false"
              >
                STUDENTS HAVE'NT REGISTERED THIS COURSE YET
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-waitingstudent-tab"
                data-toggle="pill"
                href="#pills-waitingstudent"
                role="tab"
                aria-controls="pills-waitingstudent"
                aria-selected="false"
              >
                WAITING REGISTERED STUDENTS
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-in"
              role="tabpanel"
              aria-labelledby="pills-in-tab"
            >
              <RegisteredStudent courseDetail={courseDetail} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-out"
              role="tabpanel"
              aria-labelledby="pills-out-tab"
            >
              <UnregisteredStudent courseDetail={courseDetail} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-waitingstudent"
              role="tabpanel"
              aria-labelledby="pills-waitingstudent-tab"
            >
              <WaitingStudentList courseDetail={courseDetail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailManaging;
