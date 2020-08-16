import React, { Fragment } from 'react';
import Slider from "../../components/Slider";
import Introduction from "../../components/Introduction";
import CarouselCourses from "../../layouts/CarouselCourses";
import CategoriedCourses from "../../layouts/CategoriedCourses";
import Instructor from '../../components/Instructor';
import Trusted from "../../components/Trusted";
import UdemyForBusiness from '../../components/UdemyForBusiness';
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <Fragment>
            <Slider />
            <Introduction />
            <CarouselCourses />
            <CategoriedCourses />
            <Instructor />
            <Trusted />
            <UdemyForBusiness />
            <Footer />
        </Fragment>
    );
};

export default Home;