import React from "react";
import Header from "./Header";
import Users from "./Users";
import UserWidgetComponent from "./UserWidgetComponent";

const Main = () => {
  return (
    <div className="min-h-16 h-auto md:min-h-16 md:h-auto w-[100%] border border-blue-300 bg-gray-100 md:w-[84%]">
      <Header />
      <Users />
      <UserWidgetComponent />
    </div>
  );
};

export default Main;
