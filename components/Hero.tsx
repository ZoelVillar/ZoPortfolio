import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#22184E"></Cursor>
      </h1>
    </div>
  );
}
