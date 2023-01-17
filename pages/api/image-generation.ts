import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate-js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const replicate = new Replicate({
        token: process.env.REPLICATE_STABLE_DIFFUSION_KEY,
      });

      const model = await replicate.models.get("stability-ai/stable-diffusion", "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478");
      const output = await model.predict({ prompt: `A illustration of the lyrics '${req.body.lyrics}'. ${req.body.song},triadic color scheme, 8k resolution, highly detailed, epic composition by Greg Tocchini. Official art`, 
                                            negative_prompt: "text, hands, duplication", 
                                            num_inference_steps: 85,
                                            scheduler: "K_EULER",
                                            guidance_scale: 7,
                                            width: 448, height: 448
                                          });
      res.status(200).json({ result: `${output}` });

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: `${err}` });
    }
  }
}
