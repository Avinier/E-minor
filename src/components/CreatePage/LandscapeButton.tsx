import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Landscape from "./Landscape";

import download from "downloadjs";
import * as htmlToImage from 'html-to-image';

import scapeClasses from './Landscape.module.css'

import { useSession, signIn, signOut, getSession } from "next-auth/react"

export const FinalLandscape = (props) => {
    const song = props.song.replace("The song is", "");
    // const [frostedGlassURL, setFrostedGlassURL] = useState("")

    // useEffect(() => {
    //     async function frosted() {
    //         const frostedGlassEl = document.querySelector<HTMLElement>(".frosted--glass")

    //     if (!frostedGlassEl) {
    //         console.log("element not there")
    //         return;
    //     };
    //     console.log("glass w")
    
    //     const glassURL = await htmlToImage.toPng(frostedGlassEl);
    //     setFrostedGlassURL(glassURL)
    //     }

    //     frosted();
    // }, [])

    return (
        <section className="relative w-[100vw] h-[100vh] final--landscape">
            <div className="absolute top-0">
                <Image className="object-cover" src={props.wallpaper} height={896} width={1536} alt="erg"/>
            </div>
            <div className="" 
            >
                <div className="w-fit mx-auto pt-[30px]">
                    <section className="w-[1236px] h-[600px] my-[20px] bg-[#111]/80 rounded-lg flex backdrop-blur-[10px] backdrop-saturate-50">
                        <div className="text-accent font-bold w-[50%]">
                            <div className="relative z-0 w-[100%] h-[400px] my-auto mx-auto">
                                <Image className="absolute top-[25%] left-[15%] -z-10 opacity-30" src="/quote-left-solid.svg" width={150} height={150} alt="rgwr"/>
                                <div className="py-[25%] pl-[50px]">
                                    <p className="text-center text-[30px] pb-[20px]">{props.lyrics}</p>
                                    <p className="text-center text-[20px]">-{song}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`m-auto ${scapeClasses.landscapeimage} rounded-lg`}>
                            <Image src={props.image} alt="nft image" width={425} height={425} className="rounded-lg"/>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

const LandscapeButton = (props) => {
    const [scape, setScape] = useState(false)
    // const {data}= useSession()

    useEffect(() => {
        async function getTwtSession() {
            const session = await getSession();
            console.log(session)
        }
        getTwtSession();
    }, [])

    async function downloadHandler() {
        const finalScapeEl = document.querySelector<HTMLElement>(".final--landscape")
        const song = props.song.replace("The song is", "");


        if (!finalScapeEl) {
            console.log("element not there")
            return;
        };
        console.log("w")

        const scapeURL = await htmlToImage.toPng(finalScapeEl);
        console.log(scapeURL)
        download(scapeURL, `${song}_by_e-minor`, 'image/png');

        console.log("w2")


        // setTimeout(() => {
        //     setScape(false);
        // }, 2000)

        // setTimeout(() => {
        //     window.location.reload();
        //   }, 4000)
    }

    async function tweetHandler() {
        signIn()
        
        const tweet = await fetch('/api/twitter-functions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "AYO TEST 1"
            })
        })

        const result = await tweet.json();
        console.log(result)
    }

    return (
        <>
            <button className="w-[35%] px-[50px] py-[15px] ml-[66.5%] bg-gold text-accent font-bold text-[20px] rounded-lg" onClick={() => {setScape(true)}}>
            &apos;Scape it!
            </button>
            {scape && <Landscape image={props.image} song={props.song} lyrics={props.lyrics} download={downloadHandler} tweet={tweetHandler}/>}
            <div className="">
                {scape && <FinalLandscape image={props.image} wallpaper={props.wallpaper} song={props.song} lyrics={props.lyrics} download={downloadHandler}/>}
            </div>
        </>
    );
}

export default LandscapeButton;