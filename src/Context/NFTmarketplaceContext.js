import { createContext, useEffect, useState } from "react";
import { showError, showSuccess } from "@/Components/Toast";
import "react-toastify/dist/ReactToastify.css";
import { NFTStorage, File } from "nft.storage";

// Import everything
import { Contract, ethers } from "ethers";

import nftMarketplaceConstants from "./NFTMarketplace.json";

export const NFTContext = createContext();

function Context({ children }) {
  const [accountAddress, setAccountAddress] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const contractABI = nftMarketplaceConstants["abi"];
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const NFT_API =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVDZTNFRkNCMUM2RTU0NTYxMzQ4MGMwQ0I2ZWU1MTRFMTRkMDJGQUYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3ODA4MzAxMzQ2MiwibmFtZSI6Ik5GVF9NYXJrZXBsYWNlIn0.c5tgXtlOjcjo_QVZSMMZ_JUuqcVYfAA14MNcRiFrXyo";

  useEffect(() => {
    connectToContract();
  }, [signer]);

  //Connect to Wallet
  const connectTowallet = async () => {
    let provider;
    try {
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.getSigner().then((_signer) => {
          setSigner(_signer);
          setAccountAddress(_signer.address);
        });
      }
    } catch (e) {
      showError(e.message);
    }
  };

  //connect to contract
  const connectToContract = async () => {
    try {
      const _contract = new Contract(contractAddress, contractABI, signer);
      setContract(_contract);
    } catch (e) {
      showError(e.message);
    }
  };

  //Store NFT to API
  const storeNFTtoAPI = async (name, image) => {
    try {
      const nftstorage = new NFTStorage({ token: NFT_API });
      const result = await nftstorage.store({
        image: new File([image], image.name, { type: image.type }),
        name: name,
        description: " ",
      });
      return result.ipnft;
    } catch (e) {
      showError(e.message);
    }
  };

  //Upload NFT
  const UploadNFT = async (name, image, price, listNFT) => {
    try {
      const _cid = await storeNFTtoAPI(name, image);
      contract.createItem(_cid, price, listNFT);
    } catch (e) {
      console.log(e.message);
    }
    console.log(name, image);
  };

  return (
    <NFTContext.Provider
      value={{
        accountAddress,
        connectTowallet,
        contract,
        UploadNFT,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
}

export default Context;
