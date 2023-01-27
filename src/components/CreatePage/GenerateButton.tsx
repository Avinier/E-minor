import React, { FC, useState } from "react";
import { AppProps } from "next/app";
import { motion } from "framer-motion";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const Generate = (props) => {
  const [hasEntered, setHasEntered] = useState<boolean>(false)

  const mainHandler = async () => {
    try {
      props.isValid(false)
      props.setValue(value => { return value.replace(/\n/g, "") })
      console.log(props.value)

      // OpenAI COMPLETION
      const openaiResponse = await fetch('/api/openai-functions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lyrics: props.value
        })
      })

      const oaiData = await openaiResponse.json();
      console.log(oaiData.result.choices[0])
      const oiAnswer = oaiData.result.choices[0].text

      if (oiAnswer !== '\nNo' && oiAnswer !== '\n\nNo' && oiAnswer !== 'No' && oiAnswer !== '\n\nNo.') {
        let str = oiAnswer.trim()
        let words = str.split("-")
        props.setSongName(`${words[0]}`)
        props.setSongData(`The song is ${words[0]} by ${words[1]}`)
        props.isValid(true)

        // IMAGE GENERATION
      const imgResponse = await fetch('/api/image-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lyrics: props.value,
          song: props.songData
        }),
      })

      const data = await imgResponse.json()
      console.log(data)
      props.setImage(data.result)

      } else {
        props.isValid(false)
        props.setSongData("Sorry this lyrics is unrecognisable, please try again")

        setTimeout(() => {
          window.location.reload();
        }, 6000)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <textarea className="w-[90%] h-[200px] rounded-3xl bg-[#111] backdrop-blur-lg backdrop-saturate-50 p-[20px] text-[20px] font-black text-center text-accent focus:outline-none placeholder:text-stone-400"
        placeholder="Enter your favourite lyrics and hit the create button..."
        onChange={(event) => { props.setValue(event.target.value); setHasEntered(true) }}
      />
      <motion.button
        className="bg-accent w-fit font-sans font-bold rounded-md px-[75px] py-[12px] mt-[20px] cursor-pointer disabled:cursor-default"
        onClick={mainHandler}
        disabled={!hasEntered}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: "tween" }}
      >
        Visualize
      </motion.button>
    </>
  )
}

export default Generate;