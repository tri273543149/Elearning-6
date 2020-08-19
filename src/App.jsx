import React, { Fragment, Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "./store/actions";
import { fetchCoursesList } from "./store/actions/course";
import { SET_CART } from "./store/constants/cart";
import Modal from "react-modal";
import { IS_MODAL_CLOSE } from "./store/constants/modal";
import { FETCH_CREDENTIALS } from "./store/constants/user";
import { getUserList } from "./store/actions/user";
import setHeaders from "./helpers/setHeaders";
import AOS from "aos";
import "aos/dist/aos.css";
// import components
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import Home from "./screens/Home";
import ShoppingCart from "./screens/ShoppingCart";
import CourseDetail from "./screens/CourseDetail";
import Courses from "./screens/Courses";
import UserProfile from "./screens/UserProfile";
import CourseManaging from "./screens/CourseManaging";
import UserManaging from "./screens/UserManaging";
import Charts from "./screens/Charts";
import Blogs from "./screens/Blogs";
import Events from "./screens/Events";
import Payment from "./screens/Payments";
import CourseDetailManaging from "./screens/CourseDetailManaging";
import UserDetailManaging from "./screens/UserDetailManaging";
// modal components
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import AddNewCourse from "./auth/AddNewCourse";
import UpdateCourse from "./auth/UpdateCourse";
import AddNewUser from "./auth/AddNewUser";
import UpdateUser from "./auth/UpdateUser";

class App extends Component {
  renderModal = () => {
    let { isComponentOpen } = this.props.modal;
    switch (isComponentOpen) {
      case "SignUp":
        return <SignUp />;
      case "SignIn":
        return <SignIn />;
      case "AddNewCourse":
        return <AddNewCourse />;
      case "UpdateCourse":
        return <UpdateCourse />;
      case "AddNewUser":
        return <AddNewUser />;
      case "UpdateUser":
        return <UpdateUser />;
      default:
        return;
    }
  };
  isModalClose = () => {
    this.props.dispatch(createAction(IS_MODAL_CLOSE));
  };
  getLocalStorage = (localName) => {
    if (localStorage.getItem(localName)) {
      return JSON.parse(localStorage.getItem(localName));
    }
    return false;
  };
  componentDidMount() {
    this.props.dispatch(fetchCoursesList());
    this.props.dispatch(getUserList());
    Modal.setAppElement("body");
    AOS.init({ duration: 3000 });
    // ----------------
    let credentials = this.getLocalStorage("credentials");
    if (credentials)
      this.props.dispatch(createAction(FETCH_CREDENTIALS, credentials));

    // ----------------
    let cart = this.getLocalStorage("cart");
    if (cart) this.props.dispatch(createAction(SET_CART, cart));

    // ----------------
    const token = localStorage.getItem("accessToken");
    if (!token) return;
    setHeaders(token);
  }

  render() {
    let { modal } = this.props;
    const customStyles = {
      content: {
        width: "50%",
        margin: "50px auto",
        padding: "0",
        height: "500px",
      },
      overlay: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        zIndex: "1000",
      },
    };
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <HomeTemplate path="/" exact component={Home} />
            <HomeTemplate path="/home" exact component={Home} />
            <HomeTemplate
              path="/shopping-cart"
              exact
              component={ShoppingCart}
            />
            <HomeTemplate
              path="/course-detail/:maKhoaHoc"
              exact
              component={CourseDetail}
            />
            <HomeTemplate path="/courses" exact component={Courses} />
            <HomeTemplate
              path="/profile/:taiKhoan"
              exact
              component={UserProfile}
            />
            <HomeTemplate path="/blogs" exact component={Blogs} />
            <HomeTemplate path="/events" exact component={Events} />
            <HomeTemplate path="/payment" exact component={Payment} />
            {/* ------------- */}
            <AdminTemplate path="/admin" exact component={Charts} />
            <AdminTemplate
              path="/admin-courses"
              exact
              component={CourseManaging}
            />
            <AdminTemplate
              path="/admin-course-detail/:maKhoaHoc"
              exact
              component={CourseDetailManaging}
            />
            <AdminTemplate path="/admin-users" exact component={UserManaging} />
            <AdminTemplate
              path="/admin-user-detail/:taiKhoan"
              exact
              component={UserDetailManaging}
            />
          </Switch>
        </Fragment>
        <Modal
          style={customStyles}
          isOpen={modal.isModalOpen}
          onRequestClose={this.isModalClose}
          closeTimeoutMS={500}
        >
          {this.renderModal()}
        </Modal>
      </BrowserRouter>
    );
  }
}
export default connect((state) => ({
  modal: state.modal,
  credentials: state.user.credentials,
}))(App);
