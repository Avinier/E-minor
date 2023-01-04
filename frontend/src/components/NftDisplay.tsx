import { useWallet } from "@solana/wallet-adapter-react"
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import {useState, useEffect, FC} from "react"
import { Connection, clusterApiUrl } from "@solana/web3.js";


const NftDisplay : FC = () => {
    const [nftData, setNftData] = useState([{name: "", image: ""}])
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))

    async function fetchNfts() {
      try {
        if (!wallet.connected) return;

        const nfts = await metaplex.nfts().findAllByOwner({owner: metaplex.identity().publicKey})
        
        console.log(nfts)
        let fetchedNfts = []
        for(let i=0; i<nfts.length; i++) {
            let res = await fetch(nfts[i].uri)
            let json = await res.json()
            fetchedNfts.push(json)
        }
        console.log(fetchedNfts)

        setNftData(fetchedNfts)
      } catch(err) {
        console.log(err)
      }
    }

    useEffect(() => {
        fetchNfts()
      }, [wallet])
    
    return (
        <div>
            {nftData.map((nft, i) => (
            <div key={i}>
              <ul>{nft.name}</ul>
              <img src={nft.image} />
            </div>
          ))}
        </div>
    );
}

export default NftDisplay