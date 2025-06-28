// components/GifGrid.tsx

"use client";

import Image from "next/image";
import SlideUp from "../SlideUp";

const gifs = [
  { src: "/gifs/gif1.gif", alt: "GIF 1" },
  { src: "/gifs/gif2.gif", alt: "GIF 2" },
  { src: "/gifs/gif3.png", alt: "GIF 3" },
  { src: "/gifs/gif4.gif", alt: "GIF 4" },
];
const gifs2 = [
  { src: "/gifs/gif5.gif", alt: "GIF 5" },
  { src: "/gifs/gif6.gif", alt: "GIF 6" },
  { src: "/gifs/gif7.gif", alt: "GIF 7" },
  { src: "/gifs/gif8.png", alt: "GIF 8" },
];
const imgs = [
  { src: "/imgs/img1.png", alt: "IMG 1" },
  { src: "/imgs/img2.png", alt: "IMG 2" },
  { src: "/imgs/img3.png", alt: "IMG 3" },
  { src: "/imgs/img4.png", alt: "IMG 4" },
];
const imgs2 = [
  { src: "/imgs/img5.png", alt: "IMG 5" },
  { src: "/imgs/img6.png", alt: "IMG 6" },
  { src: "/imgs/img7.png", alt: "IMG 7" },
  { src: "/imgs/img8.gif", alt: "IMG 8" },
];
const imgs3 = [
  { src: "/imgs/img9.png", alt: "IMG 9" },
  { src: "/imgs/img10.png", alt: "IMG 10" },
]
const imgs4 = [
  { src: "/imgs/img11.png", alt: "IMG 11" },
  { src: "/imgs/img12.png", alt: "IMG 12" },
]

export default function GifGrid() {
  return (
    <section className="max-w-5xl px-0 sm:px-4">
      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {gifs.map((gif, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={gif.src}
                alt={gif.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>
      <SlideUp>
        {/* 🖼️ Brand Collage */}
        <div className="relative w-full h-auto mt-1">
          <Image
            src="/symphonieslife-cs.png"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ">
          {imgs.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-131 mt-1">
          <iframe
            className="w-108 h-60.5 sm:w-full sm:h-full"
            src="https://www.youtube.com/embed/HbUVG2-Zp18?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=HbUVG2-Zp18"
            title="Video2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/symphonylife-phone.png"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/2gifs.gif"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {gifs2.map((gif, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={gif.src}
                alt={gif.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/dreamy-iconography.gif"
            alt="Dreamy Iconography"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-131 mt-1">
          <iframe
            className="w-108 h-60.5 sm:w-full sm:h-full"
            src="https://www.youtube.com/embed/coc8i_Eb3_s?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=coc8i_Eb3_s"
            title="Video2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-131 mt-1">
          <iframe
            className="w-108 h-60.5 sm:w-full sm:h-full"
            src="https://www.youtube.com/embed/onNVGQ5NZQM?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=onNVGQ5NZQM"
            title="Video2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SlideUp>

      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/symphonies-billboard.png"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ">
          {imgs2.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>
      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/symphonies-book.gif"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/symphonies-matrix.png"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ">
          {imgs3.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>


       <SlideUp>
        <div className="relative w-full h-auto mt-2">
          <Image
            src="/symphonies-matrix-open.png"
            alt="Symphonies Life Brand Preview"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
          />
        </div>
      </SlideUp>

      <SlideUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 ">
          {imgs4.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                unoptimized
                width={700}
                height={700}
              />
            </div>
          ))}
        </div>
      </SlideUp>

      <SlideUp>
        <div className="relative w-full h-131 mt-1">
          <iframe
            className="w-108 h-60.5 sm:w-full sm:h-full"
            src="https://www.youtube.com/embed/UQaa5l3jR6s?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=UQaa5l3jR6s"
            title="Video2"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SlideUp>

      <SlideUp>
        <div className="bg-black">

        <div className="relative w-full h-auto mt-2">
          <Image
            src="/explore-more.jpg"
            alt="Explore more"
            width={1000}
            height={1100}
            className=" w-full h-auto object-cover"
            />
        </div>
            </div>
      </SlideUp>
    </section>
  );
}
