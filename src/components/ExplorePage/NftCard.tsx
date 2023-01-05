import { useState } from "react"
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion"

const NftCard = (props : any) => {
    const [hoverState, setHoverState] = useState(false);

    return (
        <motion.div className="relative cursor-pointer" 
            onHoverStart={() => {setHoverState(true)}}
            onHoverEnd={() => {setHoverState(false)}}
            
        >
            <Image src={props.image} alt="iengb" className="object-cover rounded-lg" width={450} height={450}/>
            <AnimatePresence>
                {hoverState && 
                <motion.div transition={{duration: 0.5, type: "tween"}} 
                    animate={{opacity:[0, 1]}} 
                    exit={{opacity: [0.3, 0]}} 
                    className="absolute top-[60%] bg-gradient-to-t from-black text-bold w-[100%] h-[40%] text-accent rounded-lg overflow-hidden"
                >
                    Lorem, ipsum.er gthb y  ir68 ir 5t 56 y6tr s gb cfb 
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default NftCard;