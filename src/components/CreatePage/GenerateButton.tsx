import React, { FC, useState } from "react";
import { AppProps } from "next/app";
import { motion } from "framer-motion";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const Generate = (props) => {
  const [value, setValue] = useState<string>(null)
  const [hasEntered, setHasEntered] = useState<boolean>(false)

  const mainHandler = async () => {
    try {
      setValue(value => { return value.replace(/\n/g, "") })
      console.log(value)

      // OpenAI COMPLETION
      const openaiResponse = await fetch('/api/openai-functions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lyrics: value
        })
      })

      const oaiData = await openaiResponse.json();
      console.log(oaiData.result.choices[0])
      const oiAnswer = oaiData.result.choices[0].text

      if (oiAnswer !== '\nNo' || oiAnswer !== '\n\nNo' || oiAnswer !== 'No') {
        let str = oiAnswer.trim()
        let words = str.split(" - ")
        props.setSongData(`The song is ${words[0]} by ${words[1]}`)
      } else {
        props.setSongData("Sorry this lyrics seems invalid, try again :(")
        return;
      }

      props.isValid(true)


      // IMAGE GENERATION
      const imgResponse = await fetch('/api/image-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lyrics: value,
          song: props.songData
        }),
      })

      const data = await imgResponse.json()
      console.log(data)
      props.setImage(data.result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <textarea className="w-[90%] h-[200px] rounded-3xl bg-gold p-[20px] text-[20px] font-black text-accent focus:outline-none placeholder:text-stone-400"
        placeholder="fill me up baby..."
        onChange={(event) => { setValue(event.target.value); setHasEntered(true) }}
      />
      <motion.button
        className="font-black text-accent bg-pink--pastel rounded-full p-[20px] w-[50%] my-[25px] cursor-pointer disabled:bg-[#9A5043] disabled:cursor-default"
        onClick={mainHandler}
        disabled={!hasEntered}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        Generate
      </motion.button>
    </>
  )
}

export default Generate;