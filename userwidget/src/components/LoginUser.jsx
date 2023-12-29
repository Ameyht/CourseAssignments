import React from "react";
import "./Css/LoginUser.css";

function LoginUser() {
  return (
    <div className="loginuser" style={{ width: "10rem" }}>
      <img src="../images/rowan.avif" className="imguser" alt="..." />
      <div className="logged">
        <p className="username">Franklin jr</p>
        <p className="role">Super Admin</p>
      </div>
      <div class="btngrp">
        <button
          class="btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li>
            <a href="/home">Home</a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default LoginUser;
