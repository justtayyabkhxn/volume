import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-16 px-0 sm:py-16 mt-10 sm:px-6 text-left">
      <h2 className="text-orange-500 text-2xl sm:text-4xl tracking-[12px] font-light mb-4 ml-4 sm:ml-0 ">
        SYMPHONIES LIFE
      </h2>
      <p className="text-sm sm:text-base tracking-[2px] text-gray-700 uppercase mb-10 ml-4 sm:ml-0">
        Branding Case Study
      </p>

      <div className="sm:w-screen max-w[500px] max-h[500px] sm:max-w-[1000px] sm:h-[562px] mx-auto">
        <iframe
          className="w-108 h-60.5 sm:w-full sm:h-full"
          src="https://www.youtube.com/embed/vY62MBrKmhU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=vY62MBrKmhU"
          title="Symphonies Life Branding Case Study"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
