import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { useWallet } from "@solana/wallet-adapter-react"
import MetaplexContext from "./metaplex-context";
import { FC } from "react";

const MetaplexContextProvider = (props: any) => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

    const metaplexContext = {
        connection : connection,
        wallet: wallet,
        metaplex: metaplex
    }

    return (
        <MetaplexContext.Provider value={metaplexContext}>
            {props.children}
        </MetaplexContext.Provider>
    )
}

export default MetaplexContextProvider;