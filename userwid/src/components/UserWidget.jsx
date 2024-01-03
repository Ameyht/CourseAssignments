import React from "react";
import "./Css/UserWidget.css";

function UserWidget({ name, email, image, status }) {
  return (
    <div>
      <div className="widget" style={{ width: "18rem" }}>
        <img src={image} className="img" alt="..." />
        <div className="data">
          <b>{name}</b>
          <p>{email}</p>

          {status === "Active" ? (
            <p>
              <svg width="25" height="20">
                <circle
                  cx="7"
                  cy="7"
                  r="7"
                  fill="green"
                  stroke=""
                  strokeWidth="3"
                />
              </svg>
              <b>{status}</b>
            </p>
          ) : (
            <p>
              <svg width="25" height="20">
                <circle
                  cx="7"
                  cy="7"
                  r="7"
                  fill="orange"
                  stroke=""
                  strokeWidth="3"
                />
              </svg>
              <b>{status}</b>
            </p>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </div>
    </div>
  );
}

export default UserWidget;
