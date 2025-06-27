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
    <footer className="bg-white py-3 px-4 relative w-full overflow-hidden mt-8">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-black text-center"
      >
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/logo.png"
            alt="Volume Logo"
            width={170}
            height={170}
            className="object-contain"
          />
        </div>

        {/* Address */}
        <p className="text-[11px] tracking-[3px] font-light mb-2">
          38, First Floor, Hanuman Road, Connaught Place, New Delhi, Delhi -
          110001
        </p>

        {/* Phone Numbers */}
        <p className="text-xs font-light">
          +91 9599642475 &nbsp;&nbsp;&nbsp; +91 (011) 41814455
        </p>

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

      {/* Blogs & Location Section*/}
      <div className="mt-12 mr-0 sm:mr-20">
        <div className="text-right text-[10px] sm:text-xs">
          <p className="text-[9px] uppercase text-gray-500 mb-6 mt-5">
            Our Thoughts Served Hot
          </p>
          <Link
            href="/blog"
            className="text-blue-700 font-bold text-[10px] tracking-[3px] uppercase mb-8 block"
          >
            Blogs
          </Link>
          <p className="tracking-[2px] text-[10px]">
            <span className="font-semibold">Locations:</span>{" "}
            <span className="text-blue-700 font-semibold">Delhi</span> |{" "}
            <span className="text-blue-700 font-semibold">Mumbai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
