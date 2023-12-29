import React from "react";
import "./Css/UserWdigetComponent.css";
import SearchBox from "./SearchBox";
import UserWidget from "./UserWidget";
import WidgetFoot from "./WidgetFoot";

function UserWdigetComponent() {
  const userData = [
    {
      name: "Rowan Torres",
      email: "Rowantorres@gmail.com",
      image: "../images/rowan.avif",
      status: "Active",
    },
    {
      name: "Roman Torres",
      email: "Romantorres@gmail.com",
      image: "../images/roman.jpeg",
      status: "InActive",
    },
  ];
  return (
    <div className="userwidget">
      {/* <div className="container"> */}
      <div className="row">
        <d iv className="left col-6 d-flex justify-content-start mt-3">
          <button className="commonbutton" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="blueviolet"
              class="bi bi-sort-up"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
            </svg>
            <span>Sort by</span>
          </button>
          <button className="commonbutton" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="rgb(124, 17, 224)"
              class="bi bi-funnel-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
            </svg>
            <span>Filter</span>
          </button>
        </d>
        <div className="col-6 d-flex justify-content-end align-items-center mt-2">
          <SearchBox />
        </div>
      </div>
      <div className="row">
        {userData.map((user, index) => (
          <div className="col-md-4" key={index}>
            <UserWidget {...user} />
          </div>
        ))}
      </div>
      {/* <UserWidget /> */}
      <div className="foot">
        <WidgetFoot />
      </div>
    </div>
    //{" "}
    // </div>
  );
}

export default UserWdigetComponent;
