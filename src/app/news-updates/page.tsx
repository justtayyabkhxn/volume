"use client";

import Header from "@/components/landing/Header";
import FooterSection from "@/components/news-updates/Footer";
import RecentPosts from "@/components/news-updates/RecentPosts";
import TopSection from "@/components/news-updates/TopSection";

export default function NewsUpdates() {
  return (
    <main className=" flex flex-col items-center justify-space bg-white ">
      {/* Navbar */}
      <Header />
      {/* Section A */}
      <TopSection />
      {/* RecentPosts */}
      <RecentPosts />
      {/* Footer */}
      <FooterSection />
    </main>
  );
}
