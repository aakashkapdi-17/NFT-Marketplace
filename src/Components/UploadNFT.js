import React, { useState, useContext } from "react";
import Image from "next/image";
import nft_image_1 from "../assets/img/nft-image-1.png";
import { showError } from "./Toast";
import { StyledDropZone } from "react-drop-zone";
import "react-drop-zone/dist/styles.css";
import { NFTContext } from "@/context/NFTmarketplaceContext";

const UploadNFT = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [listNFT, setListNFT] = useState(false);
  const [image, setImage] = useState(null);

  const { getContract } = useContext(NFTContext);

  const handleSubmitNFT = () => {
    if (name == "" || image == null) {
      showError("Name and Picture cannot be empty");
      console.log(name);
    } else {
      if (listNFT && (price == null || price == 0)) {
        showError("Price cannot be 0 when you want to list the NFT");
      } else {
        console.log(name, price, listNFT);
      }
    }
    setName("");
    setPrice(0);
    setListNFT(false);
    setImage(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-6 mt-2 align-middle lg:flex-row-reverse lg:justify-center">
        <div>
          <div className="flex flex-col text-xl w-72">
            <label>Name</label>
            <input
              className="p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col text-xl w-72">
              <label>Price</label>
              <input
                className="p-2"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="text-xl clear both pt-9 w-72">
              <label className="ml-4">List This NFT</label>
              <input
                className="ml-4"
                type="checkbox"
                checked={listNFT}
                onChange={(e) => setListNFT(e.target.checked)}
              ></input>
            </div>
          </div>
        </div>

        <div className="relative h-60 w-72 lg:h-80">
          {image ? (
            <>
              <Image src={image} fill className="rounded-3xl" />
            </>
          ) : (
            <>
              <StyledDropZone
                onDrop={(file, text) => setImage(URL.createObjectURL(file))}
                className="relative h-60 w-72 lg:h-80"
              />
            </>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <button
            className=" text-red-500 align-middle hover:scale-110 cursor-pointer"
            hidden={image ? false : true}
            onClick={() => setImage(null)}
          >
            x Remove the Image
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className="p-4 m-2 text-white rounded-xl bg-slate-700 hover:scale-105"
            onClick={() => getContract()}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
