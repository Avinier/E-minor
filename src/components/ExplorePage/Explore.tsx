import { FC } from "react"
import NftCard from "./NftCard";

const SONG_DATA = [
    {
        id: 1,
        song: "No Church in the Wild",
        artist: "Jay-Z and Kanye West",
        lyrics: `Human beings in a mob\n What's a mob to a king?\nWhat's a king to a God?`
    },
    {
        id: 2,
        song: "Numb/Encore",
        artist: "Jay-Z and Linkin Park",
        lyrics: `I've become so numb, I can't feel you there \nBecome so tired, so much more aware`
    },
    {
        id: 3,
        song: "Praise the lord",
        artist: "A$AP Rocky",
        lyrics: "My shades, Dior, my pants, velour \nCreate, explore, expand, conquer"
    },
    {
        id: 4,
        song: "Stan",
        artist: "Eminem",
        lyrics: `My tea's gone cold, I'm wondering why I \nGot out of bed at all \nThe morning rain clouds up my window \nAnd I can't see at all`
    },
    {
        id: 5,
        song: "Crazy in Love",
        artist: "Beyonce and Jay-Z",
        lyrics: `Got me looking so crazy right now, your love's \nGot me looking so crazy right now (your love)`
    },
    {
        id: 6,
        song: "Blinding Lights",
        artist: "The Weeknd",
        lyrics: `Sin City's cold and empty (oh) \nNo one's around to judge me (oh)`
    }
]

const Explore : FC = () => {    
    return (
        <section className="bg-main">
            <article className="pt-[25px] px-[150px]">
                <h1 className="text-[60px] font-sans font-black text-accent">Explore NFTS!</h1>
                <h3 className="text-accent font-sans text-[20px] pb-[25px]">Look at the NFTS of the most iconic lyrics in recent times.</h3>
            </article>
            <div className="grid grid-cols-3 gap-[30px] px-[75px]">
                <NftCard image="/nochurchinthewild.jpg" songData={SONG_DATA[0]}/>
                <NftCard image="/blindinglights.jpg" songData={SONG_DATA[5]}/>
                <NftCard image="/praisethelord.jpeg" songData={SONG_DATA[2]}/>
                <NftCard image="/stan.jpeg" songData={SONG_DATA[3]}/>
                <NftCard image="/crazyinlove.jpeg" songData={SONG_DATA[4]}/>
                <NftCard image="/numbencore.jpeg" songData={SONG_DATA[1]}/>
            </div>
        </section>
    );
}

export default Explore;