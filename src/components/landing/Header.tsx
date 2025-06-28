"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="w-full flex justify-between items-center px-6 py-5 sm:px-6 sm:py-4 lg:px-18 lg:py-6 bg-white z-50">
      <h1 className="text-3xl tracking-[4px]  font-thin leading-none">
        <Link href={"/"}>
        VOLUME
        </Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex  gap-6 text-sm text-gray-700">
        <Link href="#" className="hover:text-orange-400 tracking-wide">
          Why are you here?
        </Link>
        <Link href="#" className="hover:text-orange-400 tracking-wide">
          What do you want?
        </Link>
        <Link href="#" className="hover:text-orange-400 tracking-wide">
          Want to feel better?
        </Link>
        <a href="/news-updates" className="hover:text-orange-400 tracking-wide">
          What’s happening?
        </a>
        <Link href="#" className="hover:text-orange-400 tracking-wide">
          Contact Us
        </Link>
        <Link href="#" className="hover:text-orange-400 tracking-wide">
          Careers
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full px-6 py-8 mt-8 md:hidden animate-slideDown ">
          <div className="flex mt-10 flex-wrap justify-center gap-x-6 gap-y-8 font-light text-xs tracking-wider text-gray-800">
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Why are you here?
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              What do you want?
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Want to feel better?
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              What’s happening?
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
