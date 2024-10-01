import React from "react";

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="font-bold text-2xl pl-24">JC ART.</div>
      <div className="pr-24">
        <ul className="flex text-lg font-[600]">
          <li className="pr-8 cursor-pointer">Home</li>
          <li className="pr-8 cursor-pointer">Gallery</li>
          <li className="pr-8 cursor-pointer">About</li>
          <li className="pr-8 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
