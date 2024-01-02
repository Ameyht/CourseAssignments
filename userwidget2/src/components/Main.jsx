import React from "react";
import Header from "./Header";
import Users from "./Users";

const Main = () => {
  return (
    <div className="h-[100%] w-[100%] border border-blue-300 bg-gray md:w-[80%]">
      <Header />
      <Users />
    </div>
  );
};

export default Main;
