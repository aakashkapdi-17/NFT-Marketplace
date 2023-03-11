import { createContext, useEffect, useState } from "react";
import { showError, showSuccess } from "@/Components/Toast";
import "react-toastify/dist/ReactToastify.css";

// Import everything
import { ethers } from "ethers";

// Import just a few select items
import { BrowserProvider, parseUnits } from "ethers";

export const NFTContext = createContext();

function Context({ children }) {
  const [accountAddress, setAccountAddress] = useState(null);

  let signer;

  const connectToWallet = async () => {
    try {
      let provider;
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.getSigner().then((_signer) => {
          setAccountAddress(_signer.address);
          signer = _signer;
        });
      }
      showSuccess("Wallet Connected Successfully");
    } catch (e) {
      console.log(e);
      showError("Error connecting to Wallet");
    }
  };

  const getContract = () => {
    console.log(signer);
  };

  return (
    <NFTContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
        connectToWallet,
        getContract,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
}

export default Context;
