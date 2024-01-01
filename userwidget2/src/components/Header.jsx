import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import LoginUser from "./LoginUser";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center border border-black-700 h-18 mx-3 rounded-[10px] my-2">
        <div className="left border border-black">
          <BiMenuAltLeft size={35} />
        </div>
        <div className="right border border-black mr-2 rounded-10">
          <LoginUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
