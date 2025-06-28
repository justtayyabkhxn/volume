import React from "react";
import SlideUp from "../SlideUp";

export default function NewsletterSignup() {
  return (
    <SlideUp>
    <section className="py-20 px-6 text-center max-w-xl mx-auto">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl tracking-[4px] font-light text-gray-800 mb-2">
        Stay Updated
      </h2>
      <p className="text-sm sm:text-base tracking-[3px] text-gray-600 mb-10">
        Get the latest creative updates from <span className="tracking[4px">VOLUME</span>
      </p>

      {/* Email Input */}
      <form className="flex flex-col items-center gap-6">
        <div className="w-full border-b border-gray-400">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent text-center sm:text-left py-2 focus:outline-none placeholder-gray-500 text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 text-black text-[9px] font-light  uppercase tracking-[4px] px-7 py-5 hover:bg-gray-400 cursor-pointer transition"
        >
          Sign Up
        </button>
      </form>
    </section>
    </SlideUp>
  );
}
