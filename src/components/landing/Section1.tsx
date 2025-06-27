import Link from "next/link";
import SlideUp from "../SlideUp";

export default function Section1() {
  return (
    <div className="px-4 sm:px-6 lg:px-6 py-16 space-y-24">
      {/* Section 1 */}
      <SlideUp>
        <section className="max-w-2xl mx-auto lg:mr-30">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest">
            WE HELP BUILD BRANDS
          </h2>
          <p className="mt-2 text-[12px] leading-loose tracking-[2px]  text-gray-700">
            and we do that by rewarding your customers with relatable content
            and by establishing your brand promise. <strong>Advertising</strong>{" "}
            is no longer superficial; it has to give something of real value to
            the consumer. Be it a shared ideology or purpose, entertainment or
            an emotional experience. We customise solutions and strategies
            according to your needs while consuming copious amounts of coffee!
            <br />
            <br />
            We provide integrated and strategically aligned creative solutions
            as they work the best when served as one. We go to great lengths to
            ensure our clients get the best of creative strategy and
            communication solutions. With the advent of social media and digital
            marketing, being heard by everyone is easier than ever before.
          </p>
          <button className="mt-6 bg-black text-white px-7 py-3 text-xs font-light cursor-pointer tracking-widest transition-all duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            {" "}
            <Link href={"/about-us"}>More</Link>
          </button>
        </section>
      </SlideUp>

      {/* Section 2 */}
      <SlideUp delay={0.3}>
        <section className="text-center">
          <h3 className="tracking-widest text-sm mb-2">WHAT’S HAPPENING</h3>
          <p className="text-sm tracking-[2px]   text-gray-600">
            Get a sneak peek into what we are up to.
          </p>
          <button className="mt-6 bg-black text-white px-7 py-3 text-xs font-light cursor-pointer tracking-[2px]  transition-all duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <Link href={"/news-updates"}>More News</Link>
          </button>
        </section>
      </SlideUp>
    </div>
  );
}
