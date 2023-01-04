import { FC } from "react"
import NftCard from "./NftCard";

const Explore : FC = () => {
    return (
        <section className="bg-main w-[100vw]">
            <article className="pt-[25px] px-[150px]">
                <h1 className="text-[60px] font-sans font-black text-accent">Explore NFTS!</h1>
                <h3 className="text-accent font-sans text-[20px] pb-[25px]">Look at the NFTS of the most iconic lyrics in recent times.</h3>
            </article>
            <div className="flex justify-around">
                <NftCard image="/nochurchinthewild.jpg"/>
                <NftCard image="/numbencore.jpeg"/>
                <NftCard image="/praisethelord.jpeg"/>
                <NftCard image="/stan.jpeg"/>

            </div>
        </section>
    );
}

export default Explore;