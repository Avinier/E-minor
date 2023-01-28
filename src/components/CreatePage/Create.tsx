import { FC, useState, useRef } from "react"
import Image from "next/image";

import Typewriter from 'typewriter-effect';
import ReactLoading from "react-loading";
import { AnimatePresence, motion } from "framer-motion";

import Generate from "./GenerateButton";
import NftMintButton from "./NftMintButton";
import InfoAccordian from "./InfoAccordian";
import LandscapeButton from "./LandscapeButton";
import Landscape from "./Landscape";
  
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
                className="px-[30px] py-[15px] w-[200px] mx-auto rounded-md bg-green-700 text-accent text-center font-bold z-10"
            >
                NFT Minted!
            </motion.div>
      </AnimatePresence>

    );
  }

const Create : FC = () => {
    const [imageUrl, setImageUrl] = useState<string>(null)
    const [wallpaperUrl, setWallpaperUrl] = useState<string>(null)
    const [songData, setSongData] = useState<string>("")
    const [songName, setSongName] = useState<string>("")
    const [value, setValue] = useState<string>(null)

    const [isValidLyrics, setIsValidLyrics] = useState<boolean>()
    const [isMinted, setIsMinted] = useState<boolean>()


    return (
        <section className="bg-[#000] w-[100vw] min-h-[100vh] overflow-y-hidden px-[150px]">
            {isMinted && <MintedPopup/>}
            <div className=" relative pt-[75px] pb-[50px] flex justify-between items-center">
                <article className="w-[45%] relative flex flex-col items-center">
                    <h1 className="text-[60px] font-sans font-black text-accent text-center">Create your NFT!</h1>
                    <p className="font-bold text-purple--pastel pb-[20px] text-center">[Currently only available on devnet]</p>

                    <Generate 
                        setImage={setImageUrl} 
                        setSongData={setSongData} 
                        setSongName={setSongName} 
                        setWallpaper={setWallpaperUrl}
                        songData={songData} 
                        isValid={setIsValidLyrics} 
                        value={value}
                        setValue={setValue}
                    />
                </article>
                {imageUrl ? <Image src={imageUrl} alt="nft image" width={400} height={400} className="rounded-lg"/> :
                <div className="bg-[#111] h-[400px] w-[400px] p-[25px] rounded-lg">
                    <p className="text-[18px] font-black text-accent text-center">{songData}</p>
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
                <div className="absolute top-[75%] left-[76%]">
                    {imageUrl && <NftMintButton image={imageUrl} song={songName} songData={songData} isValid={setIsValidLyrics} isMinted={setIsMinted}/>}
                </div>
            </div>
            {imageUrl && <LandscapeButton image={imageUrl} wallpaper={wallpaperUrl} song={songData} lyrics={value}/>}
        </section>
    )
}

export default Create;