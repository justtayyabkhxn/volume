"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="relative w-full bg-white px-0 m-0 h-[200px] overflow-hidden">
      {/* Static black background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Sliding black div on top */}
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full bg-black text-white z-10 px-4 py-10 text-center"
      >
        <div className="w-12 h-12 mx-auto mb-5 relative">
          <Image
            src="/plane.png"
            alt="Paper Plane"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <p className="text-[11px] font-light tracking-[3px] text-stone-400">
          Connect With Us
        </p>
      </motion.div>
    </section>
  );
}
