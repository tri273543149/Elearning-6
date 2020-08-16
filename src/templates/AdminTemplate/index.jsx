import React, { Fragment } from "react";
import "./index.css";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import { NavLink, Redirect } from "react-router-dom";
import { logout } from "../../store/actions/user";
import { useDispatch } from "react-redux";

import { Layout, Menu, Typography } from "antd";
import {
  MessageOutlined,
  BarChartOutlined,
  LaptopOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const AdminLayout = (props) => {
  const dispatch = useDispatch();
  if (!localStorage.getItem("accessToken")) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <Layout>
        <Header className="admin_home_header">
          <Title
            level={3}
            style={{ marginRight: "auto", color: "white", marginBottom: "0" }}
          >
            Management
          </Title>

          <Title className="sub_title">
            <NavLink to="/">Home</NavLink>
          </Title>
          <Title className="sub_title">
            <span onClick={() => dispatch(logout())}>Logout</span>
          </Title>
        </Header>
        <Layout>
          <Sider className="admin_home_slider">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              <Menu.Item key="1">
                <NavLink exact to="/admin">
                  <BarChartOutlined />
                  FIGURES
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink exact to="/admin-courses">
                  <LaptopOutlined />
                  COURSES
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink exact to="/admin-users">
                  <UserOutlined />
                  USERS
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<MessageOutlined />}>
                MESSAGES
              </Menu.Item>
              <Menu.Item key="5" icon={<BellOutlined />}>
                NOTIFICATIONS
              </Menu.Item>
              <Menu.Item key="6" icon={<StarOutlined />}>
                UTILITIES
              </Menu.Item>
              <Menu.Item key="7" icon={<SettingOutlined />}>
                SETTING
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ marginTop: "63px" }}>{props.children}</Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export const AdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <AdminLayout>
            <props.component {...propsComponent} />
          </AdminLayout>
        );
      }}
    />
  );
};
