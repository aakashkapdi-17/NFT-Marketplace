import { createContext, useState } from "react";
// Import everything
import { ethers } from "ethers";

// Import just a few select items
import { BrowserProvider, parseUnits } from "ethers";

export const NFTContext = createContext();

function Context({ children }) {
  const [account, setAccount] = useState("");

  const connectToWallet = async () => {
    setAccount("Hi213465436543234567890");
  };

  return (
    <NFTContext.Provider value={{ account, setAccount, connectToWallet }}>
      {children}
    </NFTContext.Provider>
  );
}

export default Context;
