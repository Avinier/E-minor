import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import NftCreate from "./NftCreate";
import NftDisplay from "./NftDisplay";

export default function Hero() {
    return (
        <section className="bg-[#000]">
            <div className="w-fit mx-auto pt-[5vh]">
                <h1 className="text-[75px] font-sans font-black text-accent text-center">E-minor</h1>
                <h3 className="text-accent font-sans text-[25px] text-center">NFT Your favourite song verses!</h3>
                <WalletMultiButton/>
                <NftDisplay/>
                <NftCreate/>
            </div>
        </section>
    )
}