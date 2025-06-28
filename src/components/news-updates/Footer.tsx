// FooterSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-white py-3 px-4 relative w-full overflow-hidden mt-8 mb-10">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-black text-center"
      >
        {/* Logo */}
        <div className="mb-4 flex justify-center">
            <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Volume Logo"
            width={170}
            height={170}
            className="object-contain"
          />
          </Link>
        </div>

        {/* Address */}
        <p className="text-[11px] tracking-[3px] font-light mb-2">
          38, First Floor, Hanuman Road, Connaught Place, New Delhi, Delhi -
          110001
        </p>

        {/* Phone Numbers */}
        <div className="flex justify-center items-center text-xs font-light">
          <div className="relative group cursor-pointer">
            <span className="text-black">
              +91 9599642475 &nbsp; &nbsp; &nbsp;
            </span>
            <span className="absolute left-1/2 -bottom-0.5 h-[3px] bg-orange-500 transition-all duration-300 origin-center transform -translate-x-1/2 w-0 group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            <span className="text-black">+91 (011) 41814455</span>
            <span className="absolute left-1/2 -bottom-0.5 h-[3px] bg-orange-500 transition-all duration-300 origin-center transform -translate-x-1/2 w-0 group-hover:w-full"></span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-xl text-black">
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaLinkedinIn />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
          <Link href="#">
            <FaVimeoV />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
