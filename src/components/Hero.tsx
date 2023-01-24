import Image from "next/image";
import { motion } from "framer-motion";
import {Carousel}  from 'react-responsive-carousel';
import Link from "next/link";

export function CarouselSection() {
    return (
            <Carousel autoPlay infiniteLoop>
                <div className="inline-flex">
                    <Image src="/starboy.jpeg" width={450} height={450} alt="img1"/>
                </div>
                <div className="inline-flex">
                    <Image src="/nochurchinthewild.jpg" width={450} height={450} alt="img1"/>
                </div>
                <div className="inline-flex">
                    <Image src="/blindinglights.jpg" width={450} height={450} alt="img1"/>
                </div>
                <div className="inline-flex">
                    <Image src="/numbencore.jpeg" width={450} height={450} alt="img1"/>
                </div>
            </Carousel>
    );
  }


export default function Hero() {
    return (
        <section className="bg-[#000] overflow-y-hidden h-[87vh] px-[150px]">
            <div className="py-[100px] flex justify-between items-center">
                <div className="">
                    <h1 className="text-[80px] font-sans font-black leading-[80px] text-accent text-center">Your favourite song. Visualized.</h1>
                    <h3 className="text-accent font-sans text-[25px] py-[30px] text-center">Get AI-generated Solana NFTs out of your favourite song verses</h3>
                    <button className="bg-accent w-fit font-sans font-bold rounded-md px-[30px] py-[12px] ml-[40%]">
                        <Link href="/create">Visualize a verse</Link>
                    </button>
                </div>
                {/* <div className="bg-grey h-[450px] w-[450px] rounded-lg">
                    <Image src='/starboy.jpeg' alt="iengb" className="object-cover rounded-lg" width={450} height={450}/>
                </div> */}
            </div>
        </section>
    )
}