"use client";

import Image from "next/image";
import Link from "next/link";
import SlideUp from "../SlideUp";

const posts = [
  {
    id:"1",
    title: "SYMPHONIES LIFE",
    subtitle: "Branding Case Study",
    description:
      "Symphonies Life transcends the traditional mattress brand—it is a holistic ideology that champions balance, comfort, and tranquility. Rooted in the belief that life should move in harmony, it envisions a world where rest is restorative, and the only disruption is the sound of an alarm clock.",
    image: "/symphonieslife-rc.png",
    link: "#",
  },
  {
    id:"2",
    title: "IN SAFE HANDS KANPEKI YEAR SIX",
    subtitle: "Spatial Branding",
    description:
      "As KANPEKI marked its sixth year, it was a moment of pride and reflection. What began as a humble venture had now grown into a formidable name in personal care, built on the relentless dedication of its people. To honour this journey, KANPEKI partnered with us to recognize the hands that shaped its success.",
    image: "/insafehand-rc.jpg",
    link: "#",
  },
  {
    id:"3",
    title: "KITSA",
    subtitle: "Branding Case Study",
    description:
      "Formis Technologies has been a pioneer in medical equipment and healthcare. Its latest venture is a healthcare essentials app that home delivers the order in just 20-minutes. What separates the brand from being a conventional healthcare provider, is its intention to not make healthcare a distress but a necessity.",
    image: "/kitsa-rc.png",
    link: "#",
  },
  {
    id:"4",
    title: "HOMSARA",
    subtitle: "Branding Case Study",
    description:
      "We created the brand system for Homsara, which provides homeware solutions for urban homes. The logo is created with the thought of an ideal and aspirational lifestyle, that prioritises mindful, innovative, modern, and precise homeware solutions..",
    image: "/homsara-rc.jpg",
    link: "#",
  },
  {
    id:"5",
    title: "GYPSY SYRUP",
    subtitle: "Branding Case Study",
    description:
      "We created Gypsy Syrup's unique brand identity, focusing on natural, gypsy-inspired haircare treatments and standout packaging, making it popular for salon professionals and home users alike.",
    image: "/gypsysyrup-rc.jpg",
    link: "#",
  },
  {
    id:"6",
    title: "THE BLUE",
    subtitle: "Branding Case Study",
    description:
      "We developed the communication strategy for The Blue by T&T Group highlighting personalised living through six distinct design themes, shaping residents' living spaces in Delhi-NCR to match their unique preferences and personalities.",
    image: "/blue-rc.jpg",
    link: "#",
  },
  {
    id:"7",
    title: "BISNAC",
    subtitle: "Branding Case Study",
    description:
      "We collaborated with Bisnac (formerly Delish Co.), emphasising its premium and fun identity with small-batch cookies and biscottis, showcasing the brand's commitment to taste, texture, flavours, and freshness in every product.",
    image: "/bisnac-rc.jpg",
    link: "#",
  },
  {
    id:"8",
    title: "MERCH COMMUNICATION FOR THE COFFEE BEAN & TEA LEAF®",
    subtitle: "India Merch Launch",
    description:
      "As the India agency for The Coffee Bean & Tea Leaf®, we upheld their legacy and vision in all communication and design, ensuring memorable experiences that reflect their passion for coffee and tea, since 1963.",
    image: "/merchcomms-rc.jpg",
    link: "#",
  },
  {
    id:"9",
    title: "SHOW COMMUNICATION DESIGN FOR WARNER BROS. DISCOVERY",
    subtitle: "Campaign Story",
    description:
      "We brought excitement to Warner Bros. Discovery through a versatile communication strategy for the conceptualisation of promotional strategies, ensuring each creative concept resonated while staying true to the brand identity.",
    image: "/thesoul-rc.jpg",
    link: "#",
  },
  {
    id:"10",
    title: "'FLAVORS OF JOY' BY THE COFFEE BEAN & TEA LEAF®",
    subtitle: "Spatial Branding",
    description: `We conceptualised the "Flavors of Joy" holiday campaign for The Coffee Bean & Tea Leaf®, designing a strategy to immerse customers in a joyful experience, reflecting the brand's commitment to spreading holiday cheer through their offerings.`,
    image: "/flavorsofjoy-rc.jpg",
    link: "#",
  },
  {
    id:"11",
    title: "INTRODUCING A CHIC BODY CARE RANGE BY HOTTEST EX",
    subtitle: "Product Range Launch",
    description:
      "We conceptualised the marketing strategy and creative execution for the launch of their new range of everyday care products for body, face, and hair, after the success of their initial lineup: Ghosted, Closure, Manicorn & Antiversary.",
    image: "/chicbody-rc.jpg",
    link: "#",
  },
  {
    id:"12",
    title: "5 NATIONAL AWARDS",
    subtitle: "Announcement",
    description:
      "Our clients and our homegrown brand received 5 awards at the 2022 Afaqs Foxglove Awards, including 2 National and Regional Golds in Best Brand Identity, showcasing bold and confident branding experiences for skincare brands.",
    image: "/5national-rc.jpg",
    link: "#",
  },
  {
    id:"13",
    title: "PROJECT T",
    subtitle: "Branding Case Study",
    description:
      "We created a branding and communication strategy for Project T by T&T Group, defining ultramodern real estate standards by seamlessly blending cutting-edge design with comfort, exclusivity, and convenience, thus redefining lifestyles.",
    image: "/projectt-rc.jpg",
    link: "#",
  },
  {
    id:"14",
    title: "THE COFFEE BEAN & TEA LEAF®",
    subtitle: "Announcement",
    description:
      "We have partnered up with The Coffee Bean & Tea Leaf® as their India agency, crafting branding strategies staying true to the brand's global essence. Our creative efforts integrated the heritage of coffee and tea culture into creative campaigns.",
    image: "/coffee-bean-rc.jpg",
    link: "#",
  },
  {
    id:"15",
    title: "SOPHIC",
    subtitle: "Branding Case Study",
    description:
      "Inspired by a holistic view of beauty and health, we developed a brand strategy that communicates individual skin health and skincare wisdom while emphasising natural origins backed by science-based research.",
    image: "/sophic-rc.jpg",
    link: "#",
  },
  {
    id:"16",
    title: "SOL",
    subtitle: "Branding Case Study",
    description:
      "As their branding partner, we entered the supplement industry with SOL, crafting a brand system that resonates with consumers seeking hassle-free alternatives, positioning SOL as an ally in maintaining a balanced lifestyle.",
    image: "/sol-rc.jpg",
    link: "#",
  },
  {
    id:"17",
    title: "SIPGEL",
    subtitle: "Branding Case Study",
    description:
      "We took charge of the branding, positioning and communication design for Sipgel, a women’s wellness brand offering a natural solution for menstrual pain relief and empowering them to embrace comfort during their cycles.",
    image: "/sipgel-rc.jpg",
    link: "#",
  },
  {
    id:"18",
    title: "DISHA PUBLICATION",
    subtitle: "Branding Case Study",
    description:
      "We revamped Disha Publications, targeting young achievers with a logo symbolising opening a textbook, reflecting the first step towards success and redesigned book covers for enhanced brand appeal and engagement.",
    image: "/disha-rc.jpg",
    link: "#",
  },

  {
    id:"19",
    title: "UNGLITCH",
    subtitle: "Branding Case Study",
    description: `We developed a cutting-edge brand configuration for Unglitch, a premier tech repair and maintenance service, embodying the mantra "To err is human, to undo tech-support," positioning itself as an authority against tech glitches.`,
    image: "/unglitch-rc.jpg",
    link: "#",
  },

  {
    id:"20",
    title: "MAX SQUARE",
    subtitle: "Brochure Designing",
    description:
      "As Max Estates' creative partners, we designed the brand identity and brochure for Max Square, reflecting modern, collaborative workspaces while aligning with Max Estates' reputation for innovation in real estate development.",
    image: "/maxsquare-rc.jpg",
    link: "#",
  },
];

export default function RecentPosts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-26">
      <SlideUp>
        <div className="sm:px-30">
          <h2 className="text-xl font-light tracking-wide text-left text-gray-800 mb-5">
            RECENT POSTS.
          </h2>
          <p className="text-left font-light text-md mt-2 mb-12 tracking-[3px]">
            Get inspired, Read our posts
          </p>
        </div>
      </SlideUp>

      <div className="grid md:grid-cols-2 gap-12 sm:px-28">
        {posts.map((post) => (
          <SlideUp key={post.id} >
            <div key={post.id} className="px-1 ">
              <div className="relative w-full h-[250px] md:h-[340px]">
                {" "}
                {/* Adjustable height */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <h3 className="text-sm text-gray-600 mt-4 mb-4 tracking-wider font-light">
                {post.title}
              </h3>
              <p className="text-orange-500 mt-1 text-sm font-light mb-5 tracking-wider">
                {post.subtitle}
              </p>
              <p className="text-gray-600 mt-3 text-[13px] tracking-[2px] leading-[1.75] ">
                {post.description}
              </p>

              <Link
                href={post.link}
                className="inline-block mt-4 px-4 py-3 bg-black text-white text-sm tracking-[2px] font-light"
              >
                read more
              </Link>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
