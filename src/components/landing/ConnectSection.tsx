// ConnectSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="bg-white px-0 m-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-black text-white w-screen max-w-[1667px] px-4 py-16 text-center"
      >
        <div className="w-12 h-12 mx-auto mb-5 relative">
          <Image
            src="/plane.png"
            alt="Paper Plane"
            fill
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
