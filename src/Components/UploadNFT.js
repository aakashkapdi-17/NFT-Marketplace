import React, { useState, useContext, useCallback } from "react";
import Image from "next/image";
import nft_image_1 from "../assets/img/nft-image-1.png";
import { showError } from "./Toast";
import { useDropzone } from "react-dropzone";

import { NFTContext } from "@/context/NFTmarketplaceContext";

const UploadNFT = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [listNFT, setListNFT] = useState(false);
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(null);

  const { UploadNFT } = useContext(NFTContext);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    console.log(acceptedFiles[0].URL);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmitNFT = () => {
    if (name == "" || image == null) {
      showError("Name and Picture cannot be empty");
      console.log(name);
    } else {
      if (listNFT && (price == null || price == 0)) {
        showError("Price cannot be 0 when you want to list the NFT");
      } else {
        UploadNFT(name, image, price, listNFT);
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
          {showImage ? (
            <>
              <Image src={showImage} fill className="rounded-3xl" />
            </>
          ) : (
            <>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <button
            className="text-red-500 align-middle cursor-pointer hover:scale-110"
            hidden={image ? false : true}
            onClick={() => setImage(null)}
          >
            x Remove the Image
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className="p-4 m-2 text-white rounded-xl bg-slate-700 hover:scale-105"
            onClick={() => {
              handleSubmitNFT();
            }}
          >
            Submit NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
