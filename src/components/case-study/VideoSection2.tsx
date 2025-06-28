import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-16 px-0 sm:py-16 sm:px-6">

      <div className="sm:w-screen w-1xl max-w[450px] max-h[450px] sm:max-w-[850px] sm:h-[448px] mx-auto">
        <iframe
          className="w-108 h-57 sm:w-full sm:h-full"
          src="https://www.youtube.com/embed/jXwS7K6y0SM?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=jXwS7K6y0SM"
          title="Sym Life "
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
