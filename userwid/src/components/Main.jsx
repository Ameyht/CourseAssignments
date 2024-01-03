import React from "react";
import "./Css/Main.css";
import Header from "./Header";
import Users from "./Users";
import UserWdigetComponent from "./UserWdigetComponent";

function Main() {
  return (
    // <div className="main">
    <div className="head col-sm-10">
      <Header />
      <Users />
      <UserWdigetComponent />
    </div>
    // </div>
  );
}

export default Main;
