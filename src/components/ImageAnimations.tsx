import Image from "next/image";
import { motion } from "framer-motion";

const ImageAnimations = () => {
    return(
        <section className="flex z-10 overflow-x-hidden w-fit">
            <motion.div>
                <Image src="/starboy.jpeg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/starboy-2.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/metallica.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/georgio.jpg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/blindinglights.jpg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/pride.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/numbencore.jpeg" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
            <motion.div>
                <Image src="/yellow-2.png" alt="detg" width={300} height={300} className="rounded-lg"/>
            </motion.div>
        </section>
    )
}

export default ImageAnimations;