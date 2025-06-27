import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-left mb-10">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-light tracking-widest leading-snug">
          We conceptualize, design and <br />
          produce interactive content of visual <br />
          and technical excellence
        </h2>
        <p className="text-[12px] font-light tracking-[3px] mt-10 mb-4 sm:ml-5">
          Our Services
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto gap-0">
        {[
          { src: "/branding.jpg", alt: "Branding", link: "/branding" },
          { src: "/print-media.jpg", alt: "Print Media", link: "/print-media" },
          {
            src: "/digital.jpg",
            alt: "Digital",
            link: "/digital-and-news-media",
          },
          {
            src: "/production.jpg",
            alt: "Production",
            link: "/ad-film-making-and-production",
          },
        ].map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="w-screen sm:w-full -mx-4 sm:mx-0 flex justify-center items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={480}
                height={340}
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-90"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center text-center mt-16 px-4">
        <div className="text-sm md:text-md font-light uppercase tracking-widest mb-4">
          See Anything You Like?
        </div>
        <Link href={"about-us"}>
          <button className="hover:bg-black hover:text-white uppercase text-gray-800 font-light cursor-pointer px-6 py-3 text-[10px] tracking-[2px] hover:shadow-lg transition">
            Know More About us
          </button>
        </Link>
      </div>
    </section>
  );
}
