import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Hellooooo({}: Props) {
  return (
    <header className="bg-[#252323cb] sticky bottom-2 top-2 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center shadow-xl rounded-xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/zoel-villar/"
          fgColor="#F9F9FF"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/ZoelVillar"
          fgColor="#F9F9FF"
          bgColor="transparent"
        />
        <SocialIcon
          network="whatsapp"
          url="https://wa.me/5491165673641"
          fgColor="#F9F9FF"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#F9F9FF"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#F9F9FF]">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
