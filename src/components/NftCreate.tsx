import { FC } from "react"
import { Metaplex, toMetaplexFile, walletAdapterIdentity } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { toBigNumber } from '@metaplex-foundation/js';
import { Keypair, PublicKey } from '@solana/web3.js';
import * as fs from "fs"

const NftCreate : FC = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

    async function createNft() {
      try {
        const { uri } = await metaplex.nfts().uploadMetadata({
          name: "Kanye Bear",
          description: "Graduation bear",
          image: "../../assets/0.png",
      })

      console.log(uri)

        const {nft} = await metaplex.nfts().create({
          uri: uri,
          name: "Kanye Bear",
          sellerFeeBasisPoints: 200,
          symbol: "KNYE",
          tokenOwner: new PublicKey(wallet)
        })

        console.log(
          `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
        )
        // const getAreaveUri = await fetch("/api/upload-to-arweave", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         base64Str : base64
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        // })

        // const uri = (await getAreaveUri.json()).uri
        // console.log(uri)

        
      } catch (err) {
        console.log(err)
      }
    }

    
    return (
        <section>
            <h1>CREATE</h1>
            <button className="rounded-full bg-purple--pastel text-white p-5" onClick={createNft}>Create</button>
        </section>
    )
}

export default NftCreate;