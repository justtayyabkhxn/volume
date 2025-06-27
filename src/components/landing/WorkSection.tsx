import Image from "next/image";
import Link from "next/link";
import SlideUp from "../SlideUp";

const projects = [
  {
    title: "SYMPHONIES LIFE",
    subtitle: "BRANDING CASE STUDY",
    src: "/symphonies.jpg",
    link: "/symphonies-life-case-study",
  },
  {
    title: "KITSA",
    subtitle: "BRANDING CASE STUDY",
    src: "/kitsa.jpg",
    link: "/kitsa-branding-case-study",
  },
  {
    title: "KANPEKI - IN SAFE HANDS",
    subtitle: "SPATIAL BRANDING",
    src: "/kanpeki.gif",
    link: "/kanpeki-safe-hands-event",
  },
  {
    title: "HOMSARA",
    subtitle: "BRANDING CASE STUDY",
    src: "/homsara.jpg",
    link: "/homsara-case-study",
  },
  {
    title: "GYPSY SYRUP",
    subtitle: "BRANDING CASE STUDY",
    src: "/gypsy.jpg",
    link: "/gypsy-syrup-new-case-study",
  },
  {
    title: "DISHA PUBLICATION",
    subtitle: "RE-BRANDING CASE STUDY",
    src: "/disha.jpg",
    link: "/disha-publication-rebranding-case-study",
  },
  {
    title: "THE COFFEE BEAN & TEA LEAF",
    subtitle: "CREATIVE PARTNERSHIP",
    src: "/coffee-bean.jpg",
    link: "/cbtl-cs",
  },
  {
    title: "KANPEKI LABS",
    subtitle: "BRANDING CASE STUDY",
    src: "/kanpeki-labs.jpg",
    link: "/kanpeki-labs-branding-case-study",
  },
  {
    title: "BISNAC",
    subtitle: "BRANDING CASE STUDY",
    src: "/bisnac.jpg",
    link: "/bisnac-case-study",
  },
  {
    title: "SOL",
    subtitle: "BRANDING CASE STUDY",
    src: "/sol.jpg",
    link: "/sol-case-study",
  },
  {
    title: "THE BLUE",
    subtitle: "BRANDING CASE STUDY",
    src: "/the-blue.jpg",
    link: "/the-blue-case-study",
  },
  {
    title: "SIPGEL",
    subtitle: "BRANDING CASE STUDY",
    src: "/sipgel.gif",
    link: "/sipgel-case-study",
  },
];

export default function WorkSection() {
  return (
<section className="px-6 sm:px-8 md:px-10 lg:px-20 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-16">
        {projects.map((project, index) => (
          <SlideUp key={index} delay={index * 0.05}>
            <div className="flex flex-col">
              <div className="w-full relative overflow-hidden">
                <Link href={project.link}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={470}
                    height={570}
                    className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90"
                  />
                </Link>
              </div>
              <h4 className="mt-4 text-center text-xs tracking-widest">
                {project.title}
              </h4>
              <p className="text-[8px] text-center tracking-widest mt-3 text-gray-500">
                {project.subtitle}
              </p>
            </div>
          </SlideUp>
        ))}
      </div>
      <SlideUp>
        <Link href="/news-updates" className="block w-max mx-auto">
          <button className="mt-18 bg-black text-white px-7 py-3 text-xs font-light cursor-pointer tracking-[2px] transition-all duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            More News
          </button>
        </Link>
      </SlideUp>
    </section>
  );
}
