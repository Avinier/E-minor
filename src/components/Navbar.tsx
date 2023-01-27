import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";
import navClasses from "../../styles/Navbar.module.css"

const Navbar : FC = () => {
    return (
        <nav className="bg-main flex justify-between items-center px-[150px] py-[25px]">
            <div className="font-black text-[25px]  text-accent">
                <Link href="/">E-minor</Link>
            </div>
            <section className="text-accent flex justify-between items-center w-[45%] font-bold">
                <div className="">
                    <Link href="/">Home</Link>
                </div>
                <div className="">
                    <Link href="/create">Create</Link>
                </div>
                <div className=" cursor-not-allowed">
                    <Link href="/explore">Explore</Link>
                </div>
                <div className={navClasses.wallet}>
                    <WalletMultiButton/>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;