import { NextPage } from "next"
import { useState } from "react"
import Create from "../../src/components/CreatePage/Create"


const CreatePage : NextPage = () => {
    const [value, setValue] = useState<string>('')

    async function createNft() {
            setValue('A man in neo tokyo')

            const response = await fetch('/api/image-generation');
              const data = await response.json();
              console.log(data)
            // const response = await fetch('/api/image-generation', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ text: value }),
            //   });
            //   const data = await response.json()
            //   console.log(data)

        // const getAreaveUri = await fetch("/api/upload-to-arweave", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         base64Str : base64
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        // })

        // const uri = (await getAreaveUri.json()).uri
        // console.log(uri)

    }

    
    return <Create/>;
}

export default CreatePage;