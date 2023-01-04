import { FC } from "react"
import NftCard from "./NftCard";

const Explore : FC = () => {
    return (
        <section className="bg-main">
            <article className="pt-[25px] px-[150px]">
                <h1 className="text-[60px] font-sans font-black text-accent">Explore NFTS!</h1>
                <h3 className="text-accent font-sans text-[20px] pb-[25px]">Look at the NFTS of the most iconic lyrics in recent times.</h3>
            </article>
            <div className="grid grid-cols-3 gap-[20px]">
                <NftCard image="/nochurchinthewild.jpg"/>
                <NftCard image="/numbencore.jpeg"/>
                <NftCard image="/praisethelord.jpeg"/>
                <NftCard image="/stan.jpeg"/>
                <NftCard image="/crazyinlove.jpeg"/>
                <NftCard image="/blindinglights.jpeg"/>

            </div>
        </section>
    );
}

export default Explore;