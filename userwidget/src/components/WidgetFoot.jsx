import React from "react";
import "./Css/WidgetFoot.css";

function WidgetFoot() {
  return (
    // <div>
    <div className="items">
      <span>Items per page </span>&nbsp;
      <div className="btnpage">
        <button
          className="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          12
        </button>
        <ul class="dropdown-menu"></ul>&nbsp;
        <span>1 of 1</span>&nbsp;
        <button className="arrowbtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            btnpage
            fill="blueviolet"
            className="bi bi-caret-left"
            viewBox="0 0 16 16"
          >
            <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
          </svg>{" "}
        </button>
        <button className="arrowbtn">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="blueviolet"
            className="bi bi-caret-right"
            viewBox="0 0 16 16"
          >
            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
          </svg>
        </button>
      </div>
    </div>
    // </div>
  );
}

export default WidgetFoot;
