import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// import components
import CourseItem from "./CourseItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const CarouselCourses = () => {
  const courses = useSelector(state => state.course.courses);
  const renderCourseItem = () => {
    return courses.map((course, key) => (
      <SwiperSlide key={key}>
        <CourseItem course={course} />
      </SwiperSlide>
    ));
  };
  return (
    <section className="carousel_courses">
      <p className="title">Popular Learning Courses</p>
      <p className="body">
        Learn the most relevant skills with business, creative, and tech courses
        - dozens of courses added each week.
      </p>
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        pagination={{ el: "none" }}
      >
        {renderCourseItem()}
      </Swiper>
    </section>
  );
};

export default CarouselCourses;
