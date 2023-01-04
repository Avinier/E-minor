import React, { FC, useState } from "react";

import { Metaplex, toMetaplexFile, walletAdapterIdentity, bundlrStorage, MetaplexFile, toMetaplexFileFromBrowser } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

const GenerateButton : FC = () => {
  const [fileState, setFile] = useState<File>()

  const connection = new Connection(clusterApiUrl("devnet"));
const wallet = useWallet();
const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet)).use(
    bundlrStorage({
      address: "https://devnet.bundlr.network",
      providerUrl: "https://api.devnet.solana.com",
      timeout: 60000,
    })
  )

  function changeHandler(e : any) {
    if(e.target.files) {
      setFile(e.target.files[0])
    }
  }
  
    async function createNft() {
      try {
      const reqBody = {
        "key": "Q8LcymzrzC4dFU22swwh6HHeZwg3xu5eULq3tgiWutbROL4FCc0sEmbpgAek",
        "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K",
        "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
        "width": "512",
        "height": "512",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "webhook": null,
        "track_id": null
       }

      const response = await fetch('https://stablediffusionapi.com/api/v3/text2img/', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(reqBody)
      })

      const data = response.json();
      console.log(data);
    } catch(err) {
      console.log(err)
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
            // const response = await fetch("/api/image-generation", {
            //     method: 'POST',
            //     body: JSON.stringify({ text: value }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            //   });
            //   const data = await response.json();
            //   console.log(data)

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
        <button className="font-black text-accent bg-purple--pastel rounded-full p-[20px] w-[50%] my-[25px] cursor-pointer" onClick={createNft}>Generate</button>
        {/* <input type="file" onChange={changeHandler}/>         */}
        </>
    )
}

export default GenerateButton;