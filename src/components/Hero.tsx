import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

import NftDisplay from "./NftDisplay";

// import ImageSlider, {Slide} from "react-auto-image-slider";

// export function Carousel() {
//     return (
//       <div className="carousel__container">
//         <ImageSlider effectDelay={500} autoPlayDelay={2000}>
//           <Slide>
//             <Image src="../../assets/nochurchinthewild.jpg" alt="img1"/>
//           </Slide>
//           <Slide>
//             <Image src="../../assets/starboy.jpeg" alt="img1"/>
//           </Slide>
//           <Slide>
//             <Image src="../../assets/blindinglights.jpg" alt="img1"/>
//           </Slide>
//           <Slide>
//             <Image src="../../assets/numbencore.jpeg" alt="img1"/>
//           </Slide>
//         </ImageSlider>
//       </div>
//     );
//   }


export default function Hero() {
    return (
        <section className="bg-[#000] w-[100vw] px-[150px]">
            <div className="py-[75px] flex justify-between items-center">
                <div className="">
                    <h1 className="text-[100px] font-sans font-black text-accent">E-minor</h1>
                    <h3 className="text-accent font-sans text-[30px] pb-[25px]">NFT Your favourite song verses!</h3>
                    <WalletMultiButton/>
                </div>
                <div className="bg-grey h-[450px] w-[450px] rounded-lg">
                    <Image src='/starboy.jpeg' alt="iengb" className="object-cover rounded-lg" width={450} height={450}/>
                </div>
            </div>
        </section>
    )
}