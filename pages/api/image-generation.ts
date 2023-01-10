import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate-js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const replicate = new Replicate({
        token: process.env.REPLICATE_STABLE_DIFFUSION_KEY,
      });

      const ver1point5 = "5b703f0fa41880f918ab1b12c88a25b468c18639be17515259fb66a83f4ad0a4"

      const model = await replicate.models.get("stability-ai/stable-diffusion");
      const output = await model.predict({ prompt: `A illustration of the lyrics '${req.body.lyrics}'. ${req.body.song}, 8k resolution, high details, and scenic.`, 
                                            negative_prompt: "text, duplicate, grainy, hands", 
                                            num_inference_steps: 10,
                                            scheduler: "K_EULER",
                                            guidance_scale: 9.0,
                                            width: 512, height: 512 
                                          });
      res.status(200).json({ result: `${output}` });

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: `${err}` });
    }
  }
}
