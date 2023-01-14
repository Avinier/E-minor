import { FC, useState } from "react"
import Image from "next/image";

import Typewriter from 'typewriter-effect';
import ReactLoading from "react-loading";
import { AnimatePresence, motion } from "framer-motion";

import Generate from "./GenerateButton";
import NftMintButton from "./NftMintButton";
import InfoAccordian from "./InfoAccordian";
  
  function MintedPopup() {
    return (
        <AnimatePresence>
        <motion.div
            key="startpop"
            // variants={variants}
            initial={{y: "-100vh"}}
            animate={{y: "0",
            transition: {duration: 0.1, type: "spring", damping: 25, stiffness: 500},
            }}
            exit={{y: "-100vh"}}
            className="px-[40px] py-[20px] bg-green-700 text-accent font-bold"
        >
            NFT Minted!
        </motion.div>
      </AnimatePresence>

    );
  }

const Create : FC = () => {
    const [imageUrl, setImageUrl] = useState<string>(null)
    const [songData, setSongData] = useState<string>("")
    const [isValidLyrics, setIsValidLyrics] = useState<boolean>()
    const [isMinted, setIsMinted] = useState<boolean>()

    return (
        <section className="bg-[#000] w-[100vw] px-[150px]">
            {isMinted && <MintedPopup/>}
            <div className=" relative py-[75px] flex justify-between items-center">
                <article className="w-[45%] relative">
                    <h1 className="text-[60px] font-sans font-black text-accent pb-[60px]">Create your NFT!</h1>
                    <InfoAccordian/>
                    <Generate setImage={setImageUrl} setSongData={setSongData} songData={songData} isValid={setIsValidLyrics}/>
                </article>
                {imageUrl ? <Image src={imageUrl} alt="nft image" width={400} height={400} className="rounded-lg"/> :
                <div className="bg-grey h-[400px] w-[400px] p-[25px] rounded-lg">
                    {isValidLyrics && <p className="text-[18px] font-black text-accent">{songData}</p>}
                    {isValidLyrics && 
                        <ReactLoading
                        type="spinningBubbles"
                        color="#67FFDE"
                        width={"60%"}
                        height={"60%"}
                        className="mx-auto mt-[50px]"
                    />
                    }
                </div>
                 }
                <div className="absolute top-[70%] left-[76%]">
                    {imageUrl && <NftMintButton image={imageUrl} song={songData} isValid={setIsValidLyrics} isMinted={setIsMinted}/>}
                </div>
            </div>
        </section>
    )
}

export default Create;