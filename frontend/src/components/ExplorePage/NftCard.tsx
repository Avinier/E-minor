import { FC } from "react"
import Image from "next/image";

const NftCard = (props : any) => {
    return (
        <div>
            <Image src={props.image} alt="iengb" className="object-cover rounded-lg" width={450} height={450}/>
        </div>
    )
}

export default NftCard;