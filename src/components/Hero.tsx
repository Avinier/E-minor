import Image from "next/image";
import { useEffect, useState} from "react"
import {Carousel}  from 'react-responsive-carousel';
import Link from "next/link";
import ImageAnimations from "../ImageAnimations";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


export default function Hero() {
    const [animate, setAnimate] = useState(false)
    const [ scrolled, setScrolled] = useState(false)
    const [baseX, setBaseX] = useState(0);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (100 < latest) {
                setAnimate(true)
            }
            if (400 < latest) {
                setScrolled(true)
            }
        })
    }, [])

    const nft1var = {
        onStage: {
            rotate : [20, 0],
            x: [0, -30],
            y: [0, 150],
            opacity : [75, 100]
        }
    }

    const nft2var = {
        onStage: {
            rotate : [15, 0],
            x: [0, -400],
            y: [0, 600],
            opacity : [75, 100]
        }
    }

    const nft3var = {
        onStage: {
            rotate : [-20, 0],
            x: [0, 110],
            y: [0, 250],
            opacity : [75, 100]
        }
    }

    const nft4var = {
        onStage: {
            rotate : [-15, 0],
            x: [0, 400],
            y: [0, 637],
            opacity : [75, 100]
        }
    }

    const carouselVar = {
        onStage: {
           
        }
    }

    return (
        <section className="bg-[#000] min-h-[200vh]">
        {!scrolled && 
        <motion.div variants={nft1var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[65%] left-[80%] z-0 rotate-[40deg] opacity-50"
        >
            <Image src="https://storage.googleapis.com/e-minor-assets/public/georgio.jpg" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        }
        {!scrolled &&
        <motion.div variants={nft2var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[0%] left-[80%] z-0 rotate-[20deg] opacity-50"
        >
            <Image src="https://storage.googleapis.com/e-minor-assets/public/metallica.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        }
        {!scrolled && 
        <motion.div variants={nft3var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute top-[50%] -left-[5%] z-0 -rotate-[40deg] opacity-50"
        >
            <Image src="https://storage.googleapis.com/e-minor-assets/public/starboy.jpeg" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        }
        {!scrolled &&
        <motion.div variants={nft4var} animate={animate ? "onStage": ""} transition={{type: "tween",duration : 0.5}} 
            className="rounded-lg absolute -top-[5%] left-[0%] -z-5 -rotate-[30deg] opacity-50"
        >
            <Image src="https://storage.googleapis.com/e-minor-assets/public/starboy-2.png" alt="egt" width={300} height={300} className="rounded-lg"/>
        </motion.div>
        }
        {scrolled && 
        <motion.section className="flex absolute top-[85vh] w-[200vw] z-10 overflow-x-hidden">
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/starboy.jpeg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/starboy-2.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/metallica.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/georgio.jpg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/blindinglights.jpg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/pride.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="https://storage.googleapis.com/e-minor-assets/public/numbencore.jpeg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div className="px-[30px]">
                <Image src="/yellow-2.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
        </motion.section>
        }
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