import { useState, useRef } from "react";
import Image from "next/image";
import Landscape from "./Landscape";

import html2canvas from "html2canvas";
import download from "downloadjs";
import * as htmlToImage from 'html-to-image';

import scapeClasses from './Landscape.module.css'
import wallpaper from 'public/wallpaper-starry.jpg'

export const FinalLandscape = (props) => {
    const song = props.song.replace("The song is", "");

    return (
        <div className="w-[100vw] h-[100vh] bg-white final--landscape" 
        style={{
            backgroundImage: `url(${wallpaper.src})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}
        >
            <div className=" w-fit mx-auto pt-[30px]">
            <section className="w-[1236px] h-[600px] my-[20px] bg-[#111]/50 rounded-lg flex backdrop-blur-[10px] backdrop-saturate-50">
            <div className="text-accent font-bold w-[50%]">
                <div className="relative z-0 w-[100%] h-[400px] my-auto mx-auto">
                    <Image className="absolute top-[25%] left-[15%] -z-10 opacity-30" src="/quote-left-solid.svg" width={150} height={150} alt="rgwr"/>
                    <div className="py-[25%] pl-[50px]">
                        <p className="text-center text-[30px] pb-[20px]">{props.lyrics}</p>
                        <p className="text-center text-[20px]">-{props.song}</p>
                    </div>
                </div>
            </div>
            <div className={`m-auto ${scapeClasses.landscapeimage}`}>
                <Image src={props.image} alt="nft image" width={425} height={425} className="rounded-lg"/>
            </div>
        </section>
            </div>
        </div>
    )
}

const LandscapeButton = (props) => {
    const [scape, setScape] = useState(false)

    async function downloadHandler() {
        const finalScapeEl = document.querySelector<HTMLElement>(".final--landscape")

        if (!finalScapeEl) {
            console.log("element not there")
            return;
        };
        console.log("w")

        const scapeURL = await htmlToImage.toJpeg(finalScapeEl);
        console.log(scapeURL)
        download(scapeURL, 'test1.png', 'image/png');

        console.log("w2")


        setTimeout(() => {
            setScape(false);
        }, 2000)

        setTimeout(() => {
            window.location.reload();
          }, 4000)
    }

    async function tweetHandler() {
        const tweetRes = await fetch('/api/twitter-functions')
    }

    return (
        <>
            <button className="w-[35%] px-[50px] py-[15px] ml-[66.5%] bg-gold text-accent font-bold text-[20px] rounded-lg" onClick={() => {setScape(true)}}>
            &apos;Scape it!
            </button>
            {scape && <Landscape image={props.image} song={props.song} lyrics={props.lyrics} download={downloadHandler} tweet={tweetHandler}/>}
            <div className="opacity-0">
                {scape && <FinalLandscape image={props.image} song={props.song} lyrics={props.lyrics} download={downloadHandler}/>}
            </div>
        </>
    );
}

export default LandscapeButton;