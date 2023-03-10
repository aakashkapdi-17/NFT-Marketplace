import React, { useContext } from "react";
import Image from "next/image";
import logo from "../assets/logo-no-background.svg";

import { NFTContext } from "@/context/NFTmarketplaceContext";

const Navbar = () => {
  const { account, setAccount } = useContext(NFTContext);
  const { connectToWallet } = useContext(NFTContext);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Image src={logo} width={250} />
        <button
          className="p-3 overflow-hidden border-2 w-52 bg-slate-500 hover:bg-transparent"
          onClick={connectToWallet}
        >
          <p> Connect to wallet {account}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
