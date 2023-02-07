import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate-js";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const replicate = new Replicate({
        token: process.env.REPLICATE_STABLE_DIFFUSION_KEY,
      });

      const artStyle = [
        ["Vivid color scheme, 8k resolution, ultra-detailed, epic composition by greg tocchini, virgil finlay. Official art", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-anime.jpeg"],
        ["8k resolution,detailed linework, digital art in the style of dan mumford and marc simonetti", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-japan.jpg"],
        ["Soft lighting, baroque style oil painting by Caravaggio, Raphael", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-space.jpg"],
        ["Pastel colors, pencil drawing, caran d'ache luminance", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-clouds.jpg"],
        // "psychedelic",
        ["Neon colors,laser lights, 90s vintage anime poster, by hajime sorayama and akira torayama", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-cyberpunk.jpg"],
        ["Vibrant colors, art by raymond swanland, noah bradley, exquisite, cinematic lighting, octane render, trending on art station", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-starry.jpg"],
        ["Grayscale,smooth, sharp focus, film noir lighing, art by Virgil Finlay, Kilian eng", "https://storage.googleapis.com/e-minor-assets/public/wallpaper-bluefuture.jpg"]
      ]

      const randNum = Math.floor(Math.random() * 6)

      const model = await replicate.models.get("stability-ai/stable-diffusion", "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478");
      const output = await model.predict({ prompt: `An illustration of the lyrics '${req.body.lyrics}'. ${req.body.song}. ${artStyle[randNum][0]}`, 
                                            negative_prompt: "no text, no hands, no duplication, no dispropotion", 
                                            num_inference_steps: 95,
                                            scheduler: "K_EULER",
                                            guidance_scale: 7,
                                            width: 512, height: 512
                                          });
      res.status(200).json({ result: `${output}`, style: `${artStyle[randNum][0]}`, wallpaper: `${artStyle[randNum][1]}` });

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: `${err}` });
    }
  }
}
