const express = require("express");
const router = express.Router();

// const { Configuration, OpenAIApi } = require("openai");

router.get("/bobo", async (req, res) => {
  // const configuration = new Configuration({
  //   apiKey: "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",
  // });
  // const openai = new OpenAIApi(configuration);
  // const response = await openai.createImage({
  //   prompt: "A man in neo tokyo",
  //   n: 2,
  //   size: "256x256",
  // });
  // console.log(response);
  // // res.status(200).json({ result: `${response.data}` });
});

module.exports = router;
