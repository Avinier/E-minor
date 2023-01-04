import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
        const response = await openai.createImage({
            "prompt": "A man in neo tokyo",
           "n": 2,
            "size": "256x256",
        });

        console.log(req.body.text)
    
        res.status(200).json({result: `${response.data}`})

    // const completion = await openai.createCompletion({
    //     model: 'text-davinci-002',
    //     prompt: req.body.text,
    //     temperature: 0.7,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
  
    //     max_tokens: 256,
    //   });
    
}