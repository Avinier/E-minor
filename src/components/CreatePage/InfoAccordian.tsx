import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const InfoAccordian : FC = () => {
    const [showDetails, setShowDetails] = useState<boolean>();

    const accordianVars = {
        entry: {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        onStage: {
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ],
        },
        offStage: {
          clipPath: [
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          ],
        },
      };


    return(
        <div className="absolute top-[20%] w-[140%]">
            <div className="flex items-center">
                <h4 className="text-purple--pastel text-[25px]">Somethings to keep in mind 🙂</h4>
                <button onClick={() => {setShowDetails(!showDetails)}} className="text-pink--pastel text-[18px] w-[30px] h-[30px] font-black ml-[20px] border-pink--pastel border-[2px] rounded-full">{!showDetails ? `+` : `-`}</button>
            </div>
            <AnimatePresence>
                {showDetails && 
                <motion.ul
                    key="accordian"
                    variants={accordianVars}
                    initial="entry"
                    animate="onStage"
                    exit="offStage"
                    transition={{ type: "tween", duration: 0.5 }}
                    className="list-disc bg-black p-[20px] rounded-lg"
                >
                    <li className="text-purple--pastel text-[18px] pb-[15px]">Make sure you only input the verse of the song and nothing else.</li>
                    <li className="text-purple--pastel text-[18px] pb-[15px]">Please try to have some famous known verse, preferably the hook, which makes the song recognisable.</li>
                    <li className="text-purple--pastel text-[18px] pb-[15px]">Some songs' verse maybe sampled, and the ai will recognise the original song and not yours, fret not, try again.</li>
                </motion.ul>}
            </AnimatePresence>
        </div>
    )
}

export default InfoAccordian;