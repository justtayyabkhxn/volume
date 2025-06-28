"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaTumblr,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function NewsSocialSection() {
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaVimeoV,
    FaTumblr,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
  ];
  return (
    <section className="px-6 py-16 sm:px-16 sm:py-20 max-w-5xl mt-12 mx-auto text-center text-black font-light">
      {/* News and Updates Section */}
      <div className="max-w-3xl mx-auto text-left mb-14 px-0 sm:px-10">
        <p className="tracking-[1px] text-[12px] text-gray-500 mb-2">
          &gt;&gt; News And Updates
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[1px] sm:tracking-[3px] font-light leading-snug mb-5">
          Get a sneak peek <br /> into what we are up to.
        </h2>
        <p className="text-[11px] sm:text-[12px] leading-loose tracking-[1px] text-gray-600 mb-35">
          Catch up with the latest buzz at Volume to stay updated. Our creative
          process is decoded for you to get inspiration or if you want, you can
          just add your valuable skills to the existing. For either of the two,
          you know what to do.
        </p>
      </div>

      {/* Social Section */}
      <div className="text-center">
        <h3 className=" uppercase tracking-widest text-[14px] sm:text-[22px] mb-3 sm:mb-4 font-light">
          Know what’s happening with our social feeds
        </h3>
        <p className="uppercase tracking-[1px] text-[12px] sm:text-[15px] font-light mb-6 sm:mb-8 text-gray-700">
          Get social with us and we will share all the good stuff
        </p>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-15 sm:gap-x-15 sm:gap-y-0 mt-15 sm:mt-10 max-w-xs mx-auto sm:max-w-full">
          {socialIcons.map((Icon, index) => (
            <div
              key={index}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white text-base sm:text-lg"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
