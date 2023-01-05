import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate-js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const replicate = new Replicate({
        token: process.env.REPLICATE_STABLE_DIFFUSION_KEY,
      });

      const model = await replicate.models.get("stability-ai/stable-diffusion");
      const output = await model.predict({ prompt: "man in neo tokyo" });
      res.status(200).json({ result: `${output}` });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: `${err}` });
    }
  }
}
