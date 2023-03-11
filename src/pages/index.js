import Image from "next/image";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, NFTinfo, ShowNFTs, UploadNFT } from "../Components/Index";

export default function Home() {
  return (
    <div className="p-2 m-2 md:p-4 md:m-4">
      <Navbar />
      <UploadNFT />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
