import React from "react";
import Image from "next/image";
import nft_image_1 from "../assets/img/nft-image-1.png";
const ShowNFTsCard = () => {
  return (
    <div className="w-64 cursor-pointer bg-slate-300 h-fit rounded-3xl hover:border-2">
      <div className="relative h-72 ">
        <Image src={nft_image_1} fill className="rounded-3xl" />
      </div>
      <div className="flex flex-col text-center text-cyan-900 ">
        <div>Bored ape yacht club</div>
        <div className="text-2xl ">$131,953</div>
        <button className="m-2 text-white rounded-xl bg-slate-700 hover:scale-105">
          Buy Now
        </button>
        <div>#12345</div>
      </div>
    </div>
  );
};

export default ShowNFTsCard;
