import React from "react";
import "./home.scss";
import Menu from "./Menu/Menu";
import Page from "./Page/Page";

const Home = () => {
  return (
    <div className="componentsPage">
      <Menu className="menuComponent" />
      <Page className="pageComponent" />
    </div>
  );
};

export default Home;
