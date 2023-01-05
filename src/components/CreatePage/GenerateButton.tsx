import React, { FC, useState } from "react";

import { Metaplex, toMetaplexFile, walletAdapterIdentity, bundlrStorage, MetaplexFile, toMetaplexFileFromBrowser } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

const Generate : FC = () => {
  const connection = new Connection(clusterApiUrl("devnet"));
const wallet = useWallet();
const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet)).use(
    bundlrStorage({
      address: "https://devnet.bundlr.network",
      providerUrl: "https://api.devnet.solana.com",
      timeout: 60000,
    })
  )


  const [value, setValue] = useState<string>()

  function changeHandler(event : any) {
  }
  
    const createNft = async() => {
      console.log(value)
      if (value !== null) {
        const imgResponse = await fetch('/api/image-generation', {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            prompt : "man in neo tokyo"
          }),
        })

        console.log(await imgResponse.json())
      }
      
      // if (fileState) {
      //   const file : MetaplexFile = await toMetaplexFileFromBrowser(fileState)

      //   const imageUri = await metaplex.storage().upload(file)

      //   const { uri } = await metaplex
      //   .nfts()
      //   .uploadMetadata({
      //     name: "Kanye West Bear",
      //     description: "Bear from the Graduation Trilogy",
      //     image: imageUri,
      //   })

      // console.log("metadata uri:", uri)
      // }
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
    }

    return (
      <>
        <textarea className="w-[90%] h-[200px] rounded-3xl bg-gold p-[20px] text-[20px] font-black text-accent focus:outline-none placeholder:text-stone-400" 
          placeholder="fill me up baby..." 
          onChange={(event) => {setValue(event.target.value)}}
        />
        <button className="font-black text-accent bg-purple--pastel rounded-full p-[20px] w-[50%] my-[25px] cursor-pointer" onClick={createNft}>
          Generate
        </button>
        
        </>
    )
}

export default Generate;