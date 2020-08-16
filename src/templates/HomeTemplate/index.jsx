import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export const HomeTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <ScrollToTop>
              <props.component {...propsComponent} />
            </ScrollToTop>
          </HomeLayout>
        );
      }}
    />
  );
};
