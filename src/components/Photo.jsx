"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[320px] xl:w-[520px] h-[320px] xl:h-[520px]"
          fill="transparent"
          viewBox="0 0 520 520"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="260"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16, 25, 92, 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
