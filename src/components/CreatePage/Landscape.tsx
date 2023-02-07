import Image from "next/image";
import scapeClasses from './Landscape.module.css'

const Landscape = (props) => {
    const song = props.song.replace("The song is", "");

    return (
        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] bg-grey/50">
            <section className="absolute top-[5%] left-[10%] w-[1236px] h-[600px] bg-[#111] my-[20px] flex rounded-lg">
                <div className="text-accent font-bold w-[50%]">
                    <div className="w-[100%] h-[400px] mx-auto ">
                        <div className="relative z-0 py-[25%] pl-[50px]">
                            <Image className="absolute top-[25%] left-[20%] -z-10" src="/quote-left-solid.svg" width={80} height={80} alt="rgwr"/>
                            <p className="text-center text-[30px] leading-[40px] pb-[20px] z-10">{props.lyrics}</p>
                            <p className="text-center text-[20px]">-{song}</p>
                        </div>
                        <div className="mx-auto w-[80%] ml-[90px] flex justify-around z-10">
                            <button className="bg-accent px-[50px] py-[20px] rounded-lg text-[#111] w-[40%] cursor-pointer hover:bg-purple-50 z-100" onClick={props.download}>Download</button>
                            <button className="bg-accent px-[50px] py-[20px] rounded-lg text-[#111] w-[40%]" onClick={props.tweet}>Tweet it!</button>
                        </div>
                    </div>
                    
                </div>
                <div className={`m-auto ${scapeClasses.landscapeimage} w-[425] h-[425]`}>
                    <Image src={props.image} alt="nft image" width={425} height={425} className="rounded-lg"/>
                </div>
            </section>
        </div>
    )
}

export default Landscape;