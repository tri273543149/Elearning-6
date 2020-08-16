import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
// import components
import ControlBar from "./ControlBar";
import RenderFirstStyle from "./RenderFirstStyle";
import RenderSecondStyle from "./RenderSecondStyle";
import Footer from "../../components/Footer";

const Courses = () => {
  const courses = useSelector((state) => state.course.courses);
  const listStatus = useSelector((state) => state.course.listStatus);
  const filter = useSelector((state) => state.filter);

  // --------------------------
  const renderComponentStyle = () => {
    let temptArr = [];
    switch (filter.filterType) {
      case "search":
        temptArr = courses.filter((course) => {
          return (
            course.tenKhoaHoc
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
      case "category":
        if (filter.filterValue === "All") {
          temptArr = [...courses];
        } else {
          for (let course of courses) {
            if (course.danhMucKhoaHoc.maDanhMucKhoahoc === filter.filterValue) {
              temptArr = [...temptArr, course];
            }
          }
        }
        break;
      default:
        temptArr = courses;
        break;
    }
    if (listStatus) {
      return temptArr.map((course, key) => (
        <div className="col-12 col-md-3 mb-3" key={key}>
          <RenderFirstStyle course={course} />
        </div>
      ));
    } else {
      return temptArr.map((course, key) => (
        <div className="col-12 col-md-6 mb-3" key={key}>
          <RenderSecondStyle course={course} />
        </div>
      ));
    }
  };
  return (
    <section className="courses">
      <div className="top_content">
        <div className="container">
          <ControlBar listStatus={listStatus} />
        </div>
      </div>
      <div className="mid_content">
        <div className="container">
          <div className="row m-0">{renderComponentStyle()}</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Courses;
