import React from "react";

const UserCard = ({ name, email, image, status }) => {
  return (
    // display: flex;
    // justify-content: space-around;
    // height: 9 0px;
    // border: 2px solid rgb(179, 179, 179);
    // background: rgb(248, 247, 247);
    // margin: 30px;
    // margin-left: 20px;
    // padding: 10px;
    // border-radius: 8px;
    <div
      className="flex justify-around border items-center border-black p-2 h-[90px] m-4"
      style={{ width: "16rem" }}
    >
      <img src={image} className="w-14 h-14 rounded-[50%]" alt="..." />
      <div className="flex flex-col">
        <b>{name}</b>
        <p>{email}</p>

        {status === "Active" ? (
          <p className="">
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
  );
};

export default UserCard;
