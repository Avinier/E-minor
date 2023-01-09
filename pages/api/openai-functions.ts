import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_KEY,
              });
              const openai = new OpenAIApi(configuration);

              console.log(req.body.lyrics)

              const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Check if a song containing this lyrics exists (from the rap, hip-hop or rnb genre)- ${req.body.lyrics} . If yes, then reply with the song name and artist only (without any extra words). And if no, then reply with a 'no'`,
                max_tokens: 100,
                temperature: 0,
              });

              res.status(200).json({ result: completion.data });


        } catch(err) {
            console.log(err);
            res.status(500).json({ error: `${err}` });
        }
    }
}