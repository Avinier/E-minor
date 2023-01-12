import { Metaplex, walletAdapterIdentity, bundlrStorage } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

const NftMintButton = (props) => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();
    const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet)).use(
      bundlrStorage({
        address: "https://devnet.bundlr.network",
        providerUrl: "https://api.devnet.solana.com",
        timeout: 60000,
      })
    )

    async function mintNft() {
        try {
            // const collectionNftKeypair = Keypair.generate(); 
            // console.log(collectionNftKeypair)        

        // const collectionUri = (await metaplex.nfts().uploadMetadata({
        //     name: "E-minor Collection",
        //     description: "Your E-minor NFT Collection",
        //     image: "../../../public/kdot.png"
        // })).uri

        // const collectionNft = (await metaplex.nfts().create({
        //     uri: collectionUri,
        //     name: "Your E-minor NFT Collection",
        //     sellerFeeBasisPoints: 200,
        //     symbol: "EMNORCLXN",
        //     isCollection: true
        //     collection: {
        //         address: collectionNftKeypair.publicKey,
        //         verified: true
        //     }
        // })).nft

            const { uri } = await metaplex.nfts().uploadMetadata({
                name: `${props.song}`,
                description: "Your lovely E-minor NFT",
                image: `${props.image}`,
            });
            
            console.log(uri)

            const {nft} = await metaplex.nfts().create({
                uri: uri,
                name: "Song NFT",
                sellerFeeBasisPoints: 200,
                symbol: "EMNOR",
                // collection: {
                //     address: collectionNft.mint.address,
                //     verified: true
                // }
            })

            console.log(nft)

            // console.log(
            //     `Token Mint: https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`
            // )

            // const nftsNumResponse = await fetch(`https://e-minor-6f0fb-default-rtdb.firebaseio.com/num_nfts.json`)
            // let NFTS_NUM = await nftsNumResponse.json();
            // NFTS_NUM = NFTS_NUM + 1;

            // const nftsNumPost = await fetch(`https://e-minor-6f0fb-default-rtdb.firebaseio.com/num_nfts.json`, {
            // method: 'POST', 
            // headers: {
            //     'Content-Type' : 'application/json'
            // },
            // body: JSON.stringify(NFTS_NUM)
            // })
            
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <button onClick={mintNft} className="px-[50px] py-[15px] bg-[#512da8] rounded-md text-white font-bold">Mint as NFT!</button>
    )
}

export default NftMintButton;