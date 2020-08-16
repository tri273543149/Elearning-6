import React, { useState, useEffect } from "react";
import "./index.css";
import { courseService } from "../../services";
import CourseItem from "./CourseItem";
import PaginatedItem from "./PaginatedItem";

const PaginatedCourses = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    courseService
      .layDanhSachKhoaHocPhanTrang(page)
      .then((res) => {
        setCourseList(res.data.items);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    courseService
      .layDanhSachKhoaHocPhanTrang(page)
      .then((res) => {
        setCourseList(res.data.items);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const renderCourseItem = () => {
    if (courseList && courseList.length > 0) {
      return courseList.map((course, key) => (
        <div className="col-3" key={key}>
          <CourseItem course={course} />
        </div>
      ));
    }
  };
  const renderPaginatedItem = () => {
    if (totalPages !== 0) {
      return (
        <div className="col-12">
          <PaginatedItem onChangePage={onChangePage} totalPages={totalPages} />
        </div>
      );
    }
  };
  return (
    <div className="paginated_courses">
      <p className="title">Popular Learning Courses</p>
      <p className="body">
        Learn the most relevant skills with business, creative, and tech courses
        - dozens of courses added each week.
      </p>
      <div className="container">
        <div className="row">
          {renderCourseItem()}
          {renderPaginatedItem()}
        </div>
      </div>
    </div>
  );
};

export default PaginatedCourses;
