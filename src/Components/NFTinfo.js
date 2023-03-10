import React from "react";
import Image from "next/image";
import nft_image_1 from "../assets/img/nft-image-1.png";

const NFTinfo = () => {
  return (
    <div className="p-2 m-4 lg:flex-row lg:flex ">
      <div className="relative h-96 lg:w-96">
        <Image src={nft_image_1} fill className="rounded-3xl" />
      </div>
      <div className="lg:pl-6 lg:text-3xl">
        <div className="pt-2 text-xl lg:text-3xl ">Bored ape yacht club</div>
        <div className="flex flex-row justify-between text-2xl ">
          <div>#12345</div>
          <div className="lg:text-4xl">$131,953</div>
        </div>
        <div className="flex flex-row justify-center lg:mt-10 ">
          <button className="p-4 m-2 text-white rounded-xl bg-slate-700 hover:scale-105">
            Buy Now
          </button>
        </div>

        <div className="flex flex-col mt-2 text-center lg:mt-10">
          <table class="table-fixed">
            <thead>
              <tr>
                <th className="underline">Previous Owners</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 0x5B29EB5678jhgf7897b342e4d01deaD60EE4708(Current)</td>
              </tr>
              <tr>
                <td> 0x5B29EB5678jhgf7897b342e4d01deaD60EE4708 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NFTinfo;
