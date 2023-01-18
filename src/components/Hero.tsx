import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { motion } from "framer-motion";
import {Carousel}  from 'react-responsive-carousel';

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
        <section className="bg-[#000] h-[100vh] px-[150px]">
            <div className="py-[75px] flex justify-between items-center">
                <div className="">
                    <h1 className="text-[75px] font-sans font-black text-accent">NFT your favourite song verses in minutes!</h1>
                    <h3 className="text-accent font-sans text-[30px] pb-[25px]">Get AI-generated Solana NFTs of your most personal song verses.</h3>
                    <WalletMultiButton/>
                    <p className="font-bold text-purple--pastel my-[20px]">[Currently only available on devnet ^^]</p>
                </div>
                <div className="bg-grey h-[450px] w-[450px] rounded-lg">
                    <Image src='/starboy.jpeg' alt="iengb" className="object-cover rounded-lg" width={450} height={450}/>
                    {/* <CarouselSection/> */}
                </div>
            </div>
        </section>
    )
}