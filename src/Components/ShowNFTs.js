import Link from "next/link";
import React from "react";
import ShowNFTsCard from "./ShowNFTsCard";

const ShowNFTs = () => {
  return (
    <div className="p-2 m-6 md:ml-10 md:mt-10">
      <div className="flex flex-row gap-8 mb-10 text-large ">
        <div className="cursor-pointer hover:underline">Live now</div>
        <div className="cursor-pointer hover:underline">MyNFT's</div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
        <div>
          <ShowNFTsCard />
        </div>
      </div>
    </div>
  );
};

export default ShowNFTs;
