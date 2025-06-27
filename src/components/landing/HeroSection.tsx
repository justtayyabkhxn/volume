// HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-black w-full h-[300px] sm:h-[500px] flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/sewing.jpg" 
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text Over Image */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="uppercase tracking-[8px] text-md sm:text-md mb-4 ">
          People do not buy goods and <br/> services.
        </p>
        <p className="uppercase tracking-[8px] text-md sm:text-md">
          They buy relations, stories <br/> and  magic.
        </p>
      </div>
    </section>
  );
}
