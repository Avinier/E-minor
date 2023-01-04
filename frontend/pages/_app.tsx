import React, { useMemo } from "react";
import { AppProps } from 'next/app';
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
            <Navbar/>
            <Component {...pageProps} />
          </MetaplexContextProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;