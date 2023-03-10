import React from "react";
import Image from "next/image";
import nft_image_1 from "../assets/img/nft-image-1.png";

const UploadNFT = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-6 mt-2 align-middle lg:flex-row-reverse lg:justify-center">
        <div>
          <div className="flex flex-col text-xl w-72">
            <label>Name</label>
            <input className="p-2"></input>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col text-xl w-72">
              <label>Price</label>
              <input className="p-2" type="number"></input>
            </div>
            <div className="text-xl clear both pt-9 w-72">
              <label className="ml-4">List This NFT</label>
              <input className="ml-4" type="checkbox"></input>
            </div>
          </div>
        </div>

        <div className="relative h-60 w-72 lg:h-80">
          <Image src={nft_image_1} fill className="rounded-3xl" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center text-red-500 align-middle">
          x Remove the Image
        </div>
        <div className="flex flex-col items-center">
          <button className="p-4 m-2 text-white rounded-xl bg-slate-700 hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
