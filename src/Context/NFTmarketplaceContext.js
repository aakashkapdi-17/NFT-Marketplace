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
  const contractABI = nftMarketplaceConstants["abi"];
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const NFT_API =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVDZTNFRkNCMUM2RTU0NTYxMzQ4MGMwQ0I2ZWU1MTRFMTRkMDJGQUYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3ODA4MzAxMzQ2MiwibmFtZSI6Ik5GVF9NYXJrZXBsYWNlIn0.c5tgXtlOjcjo_QVZSMMZ_JUuqcVYfAA14MNcRiFrXyo";

  let signer;
  let contract;
  let provider;

  const connectToContract = async (image, name) => {
    try {
      const _cid = await storeNFTtoApi(image, name);
      connectToWallet();
      contract = new Contract(contractAddress, contractABI, provider);
      console.log(contract);
      const trx = await contract.createItem(_cid, 0, false);
      const result = trx.wait();
      console.log(result);
    } catch (e) {
      showError(e.message);
      console.log(e);
    }
  };

  const storeNFTtoApi = async (image, name) => {
    const nftstorage = new NFTStorage({ token: NFT_API });

    const result = await nftstorage.store({
      image: image,
      name: name,
      description: " ",
    });

    return result.ipnft;
  };

  const connectToWallet = async () => {
    try {
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
    } catch (e) {
      console.log(e);
      showError("Error connecting to Wallet");
    }
  };

  return (
    <NFTContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
        connectToWallet,
        connectToContract,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
}

export default Context;
