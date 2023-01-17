import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Zoel Villar",
      "FullStack Dev? Obvious",
      "Coffee-lover.tsx",
      "<TechGeek/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      id="HeroDiv"
      className="relative h-screen text-center overflow-hidden "
    >
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="white"></Cursor>
      </h1>
      <BackgroundCircles />
    </div>
  );
}
