import React from "react";

function Comment({ user, date, text }) {
  return (
    <div className="py-3 border-b-2">
      <div className="flex flex-row items-center space-x-2">
        <img className="rounded-full h-6 w-6" src="avatar.jpg" alt="Avatar" />
        <div className="flex flex-col">
          <h1 className="font-bold text-[12px]">{user}</h1>
          <p className="text-[10px]">{date}</p>
        </div>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default Comment;
