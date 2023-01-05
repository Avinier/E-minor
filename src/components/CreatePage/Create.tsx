import { FC } from "react"
import Generate from "./GenerateButton";

const Create : FC = () => {
    return (
        <section className="bg-[#000] w-[100vw] px-[150px]">
            <div className="py-[75px] flex justify-between items-center">
                <article className="w-[45%]">
                    <h1 className="text-[60px] font-sans font-black text-accent">Create your NFT!</h1>
                    <h3 className="text-accent font-sans text-[20px] pb-[25px]">Enter your favourite lyrics and hit the create button.</h3>
                    <Generate/>
                <p className="font-black text-red-400">This feature is coming soon ^^</p>

                </article>
                <div className="bg-purple--pastel h-[450px] w-[450px] rounded-lg"></div>
            </div>
        </section>
    )
}

export default Create;