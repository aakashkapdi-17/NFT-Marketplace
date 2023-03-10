import Image from "next/image";
import { Navbar, NFTinfo, ShowNFTs, UploadNFT } from "../Components/Index";

export default function Home() {
  return (
    <div className="p-2 m-2 md:p-4 md:m-4">
      <Navbar />
      <UploadNFT />
    </div>
  );
}
