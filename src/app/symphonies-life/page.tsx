import ComfortSleepSection from "@/components/case-study/ComfortSleepSection";
import FooterSection from "@/components/case-study/Footer";
import FourBoxContent from "@/components/case-study/FourBoxContent";
import GifGrid from "@/components/case-study/GifGrid";
import NewsletterSignup from "@/components/case-study/NewsLetter";
import VideoSection from "@/components/case-study/VideoSection";
import VideoSection2 from "@/components/case-study/VideoSection2";
import Header from "@/components/landing/Header";

export default function CaseStudy() {
  return (
    <main className=" flex flex-col items-center justify-space bg-white ">
        {/* Header */}
      <Header />
      {/* Video Section */}
      <VideoSection/>
      {/* Four Box */}
      <FourBoxContent/>
      {/* VideoSection 2 */}
      <VideoSection2/>
      {/* Comfort Sleep */}
      <ComfortSleepSection/>
      {/* GifGrid */}
      <GifGrid/>
      {/* NewsLetter */}
      <NewsletterSignup/>
      {/* Footer */}
      <FooterSection/>
    </main>
  );
}
