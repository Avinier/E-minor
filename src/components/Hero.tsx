import Image from "next/image";
import { useEffect, useState} from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {Carousel}  from 'react-responsive-carousel';
import Link from "next/link";
import ImageAnimations from "../ImageAnimations";


export default function Hero() {
    const [animate, setAnimate] = useState(false)
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (100 < latest) {
                setAnimate(true)
            }
            if (250 < latest) {}
        })
    }, [])

    const nft1var = {
        onStage: {
            rotate : [20, 0],
            x: [0, -30],
            y: [0, 100],
            opacity : [75, 100]
        }
    }

    const nft2var = {
        onStage: {
            rotate : [15, 0],
            x: [0, -400],
            y: [0, 560],
            opacity : [75, 100]
        }
    }

    const nft3var = {
        onStage: {
            rotate : [-20, 0],
            x: [0, 110],
            y: [0, 210],
            opacity : [75, 100]
        }
    }

    const nft4var = {
        onStage: {
            rotate : [-15, 0],
            x: [0, 400],
            y: [0, 597],
            opacity : [75, 100]
        }
    }

    return (
        <section className="bg-[#000] min-h-[200vh]">
        <motion.div variants={nft1var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[65%] left-[80%] z-0 rotate-[40deg] opacity-50"
        >
            <Image src="/georgio.jpg" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        <motion.div variants={nft2var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[0%] left-[80%] z-0 rotate-[20deg] opacity-50"
        >
            <Image src="/metallica.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        <motion.div variants={nft3var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[50%] -left-[5%] z-0 -rotate-[40deg] opacity-50"
        >
            <Image src="/starboy.jpeg" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        <motion.div variants={nft4var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute -top-[5%] left-[0%] -z-5 -rotate-[30deg] opacity-50"
        >
            <Image src="/starboy-2.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        {/* <motion.div className="rounded-lg absolute top-[100%] left-[5%]">
            <Image src="/pride.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        <motion.div className="rounded-lg absolute top-[125%] left-[75%]">
            <Image src="/yellow.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div> */}
        <section className="px-[150px] z-10">
            <div className="py-[100px] flex justify-between items-center">
                <div className="">
                    <h1 className="text-[80px] font-sans font-black leading-[80px] text-accent text-center">Your favourite song. Visualized.</h1>
                    <h3 className="text-accent font-sans text-[25px] py-[30px] text-center">Get beautiful AI-generated art out of your favourite song verses</h3>
                    <button className="bg-accent w-fit font-sans font-bold rounded-md px-[30px] py-[12px] ml-[40%]">
                        <Link href="/create">Visualize a verse</Link>
                    </button>
                </div>
            </div>
        </section>
        </section>
    )
}