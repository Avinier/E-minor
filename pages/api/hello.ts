import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
    console.log("working")

        res.status(200).json({result: `hello`})
        // res.status(200)
}