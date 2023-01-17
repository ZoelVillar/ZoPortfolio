import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      id="CirclesPadre"
      className="absolute right-50 bg-slate-200 rounded-full border border-white h-[200px] w-[200px] left-[-20px]"
    ></motion.div>
  );
}

export default BackgroundCircles;
