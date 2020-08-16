import React, { useState, useEffect } from "react";
import "./index.css";
import { courseService } from "../../services";
import TabName from "./TabName";
import CourseItem from "./CourseItem";

const CategoriedCourses = () => {
  const [danhSachKhoaHoc, setDanhSachKhoaHoc] = useState([]);
  const [danhSachDanhMuc, setDanhSachDanhMuc] = useState([]);
  const [maDanhMuc, setMaDanhMuc] = useState("Backend");
  const [activeIndex, setActiveIndex] = useState(0);

  // ----------------------------------
  useEffect(() => {
    courseService
      .layKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        setDanhSachKhoaHoc(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, [maDanhMuc]);
  const renderCourseItem = () => {
    return danhSachKhoaHoc.map((course, key) => (
      <div className="col-2" key={key}>
        <CourseItem course={course} />
      </div>
    ));
  };

  // ----------------------------------
  const onChangeMaDanhMuc = (maDanhMuc, activeIndex) => {
    setMaDanhMuc(maDanhMuc);
    setActiveIndex(activeIndex);
  };

  // ----------------------------------
  useEffect(() => {
    courseService
      .layDanhMucKhoaHoc()
      .then((res) => {
        setDanhSachDanhMuc(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);
  const renderMaDanhMuc = () => {
    return danhSachDanhMuc.map((category, key) => (
      <TabName
        category={category}
        key={key}
        index={key}
        onChangeMaDanhMuc={onChangeMaDanhMuc}
        activeIndex={activeIndex}
      />
    ));
  };
  return (
    <section className="categoried_courses">
      <p className="title">Top categories</p>
      <p className="body">
        Learn in-demand skills with over 16,000+ online courses taught by
        real-world professionals.
      </p>
      <nav>
        <ul>{renderMaDanhMuc()}</ul>
      </nav>
      <div className="row m-0">{renderCourseItem()}</div>
    </section>
  );
};

export default CategoriedCourses;
