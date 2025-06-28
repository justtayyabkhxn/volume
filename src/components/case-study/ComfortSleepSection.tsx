import Image from "next/image";
import React from "react";
import SlideUp from "../SlideUp";

export default function ComfortSleepSection() {
  return (
    <SlideUp>
      <section className="py-2 px-6 sm:px-20 max-w-6xl mx-auto space-y-24">
        {/* Top Section - Comfort */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* GIF */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo-grid.gif"
              alt="Symphonies Logo Animation"
              width={550}
              height={550}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center items-end text-right md:text-left md:items-end sm:mr-0 mr-10">
            <h3 className="text-orange-500 text-xs tracking-[6px] mb-3">
              From Comfort
            </h3>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              The ‘o’ represents many sleepy moods and phases. Enhancing
              recognition and adding depth to the visual language empowering the
              brand identity.
            </p>
          </div>
        </div>

        {/* Bottom Section - Sleep */}
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-12">
          {/* GIF */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/pillow.gif"
              alt="Symphonies Pillow Animation"
              width={497}
              height={550}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center  md:text-left md:items-start">
            <h3 className="text-orange-500 text-xs tracking-[6px] mb-4">
              To Sleep
            </h3>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              A restoration to rest in its truest essence from science to its
              art. To let sleep be worth looking forward to, every night.
            </p>
          </div>
        </div>
      </section>
    </SlideUp>
  );
}
