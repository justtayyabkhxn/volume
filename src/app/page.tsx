"use client";

import CenteredLogo from "@/components/landing/CenteredLogo";
import ConnectSection from "@/components/landing/ConnectSection";
import FooterSection from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import Section1 from "@/components/landing/Section1";
import ServiceGrid from "@/components/landing/ServiceGrid";
import WorkSection from "@/components/landing/WorkSection";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-space bg-white ">
      {/* Navbar */}
      <Header />
      {/* Centered Logo Section */}
      <CenteredLogo />
      {/* Section-1 */}
      <Section1/>
      {/* WorkSection */}
      <WorkSection/>
      {/* ServiceGrid */}
      <ServiceGrid/>
      {/* HeroSection */}
      <HeroSection/>
      {/* ConnectSection */}
      <ConnectSection/>
      {/* Footer */}
      <FooterSection/>
    </main>
  );
}
