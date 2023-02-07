import React, { useMemo } from "react";
import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";

import localFont from '@next/font/local';

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

require("@solana/wallet-adapter-react-ui/styles.css");
import "../styles/globals.css"
import MetaplexContextProvider from "../src/store/MetaplexContextProvider";
import Navbar from "../src/components/Navbar";

import Script from 'next/script'

// const gotham = localFont({
//   src : [
//     {
//       path: '../public/fonts/GothamBook.ttf',
//       weight: '400'
//     },
//     {
//       path: '../public/fonts/Gotham-Bold.otf',
//       weight: '600'
//     },
//     {
//       path: '../public/fonts/Gotham-Black.otf',
//       weight: '700'
//     },
//     {
//       path: '../public/fonts/GothamMedium.ttf',
//       weight: '500'
//     },
//   ]
// })

const App = ({ Component, pageProps }: AppProps) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta' 
  const network = WalletAdapterNetwork.Devnet;

  // You can provide a custom RPC endpoint here
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter()
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <MetaplexContextProvider>
          {/* <style jsx global>
            {
              `:root : {
                --gotham-font : ${gotham.style.fontFamily}
              }`
            }
          </style> */}
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
          <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-04F85PV1DC', {
                page_path: window.location.pathname,
                });
                `,
              }}
          />
          <SessionProvider session={pageProps.session}>
              <Navbar/>
              <Component {...pageProps} />
          </SessionProvider>
          </MetaplexContextProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;