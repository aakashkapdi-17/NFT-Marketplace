import React from "react";
import Image from "next/image";
import logo from "../assets/logo-no-background.svg";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Image src={logo} width={250} />
        <button className="p-3 border-2 bg-slate-500 hover:bg-transparent">
          Connect to wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
