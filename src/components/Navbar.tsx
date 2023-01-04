import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";

const Navbar : FC = () => {
    return (
        <nav className="bg-main flex justify-between items-center px-[150px] py-[25px]">
            <div className="font-black text-[25px]  text-gold">E-minor</div>
            <section className="text-accent flex justify-between items-center w-[45%]">
                <div className="">
                    <Link href="/">Home</Link>
                </div>
                <div className="">
                    <Link href="/create">Create</Link>
                </div>
                <div className="">
                    <Link href="/explore">Explore</Link>
                </div>
                <WalletMultiButton/>
            </section>
        </nav>
    )
}

export default Navbar;