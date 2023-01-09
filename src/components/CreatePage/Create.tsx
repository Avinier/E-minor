import { FC, useState } from "react"
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import ReactLoading from "react-loading";

import Generate from "./GenerateButton";
import NftMintButton from "./NftMintButton";

const Create : FC = () => {
    const [imageUrl, setImageUrl] = useState<string>(null)
    const [songData, setSongData] = useState<string>("")
    const [isValidLyrics, setIsValidLyrics] = useState<boolean>()

    return (
        <section className="bg-[#000] w-[100vw] px-[150px]">
            <div className=" relative py-[75px] flex justify-between items-center">
                <article className="w-[45%]">
                    <h1 className="text-[60px] font-sans font-black text-accent">Create your NFT!</h1>
                    <h3 className="text-accent font-sans text-[20px] pb-[25px]">Enter your favourite lyrics and hit the create button.</h3>
                    <Generate setImage={setImageUrl} setSongData={setSongData} songData={songData} isValid={setIsValidLyrics}/>
                </article>
                {imageUrl ? <Image src={imageUrl} alt="nft image" width={450} height={450} className="rounded-lg"/> :
                <div className="bg-grey h-[450px] w-[450px] p-[25px] rounded-lg">
                    {isValidLyrics && <p className="text-[20px] font-black text-accent">{songData}</p>}
                    {isValidLyrics && 
                        <ReactLoading
                        type="spinningBubbles"
                        color="#67FFDE"
                        width={"60%"}
                        height={"60%"}
                        className="mx-auto mt-[40px]"
                    />
                    }
                </div>
                 }
                <div className="absolute top-[72%] left-[75%]">
                    {imageUrl && <NftMintButton image={imageUrl}/>}
                </div>
            </div>
        </section>
    )
}

export default Create;