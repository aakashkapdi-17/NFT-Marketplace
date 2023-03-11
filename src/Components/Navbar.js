import React, { useContext, useEffect } from "react";
import Image from "next/image";

import logo from "../assets/logo-no-background.svg";
import { ethers } from "ethers";

import { NFTContext } from "@/context/NFTmarketplaceContext";

const Navbar = () => {
  const { accountAddress, setAccountAddress } = useContext(NFTContext);
  const { connectToWallet } = useContext(NFTContext);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Image src={logo} width={250} />
        <button
          className="p-3 overflow-hidden border-2 w-fit bg-slate-500 hover:bg-transparent disabled:bg-transparent"
          onClick={() => {
            connectToWallet();
          }}
          disabled={accountAddress}
        >
          <p>
            {accountAddress ? <>{accountAddress}</> : <>Connect to Wallet</>}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
