import "@/styles/globals.css";

import { Yatra_One } from "next/font/google";
import Context from "../context/NFTmarketplaceContext";

const yatra_One = Yatra_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={yatra_One.className}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </div>
  );
}
