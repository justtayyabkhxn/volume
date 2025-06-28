"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../SlideUp";

type CaseStudy = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  live: boolean;
};

export default function RecentPosts() {
  const [posts, setPosts] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/casestudies", {
          method: "GET",
        });

        if (!res.ok) throw new Error("Failed to fetch case studies");

        const data = await res.json();
        const activePosts = data.filter((post: CaseStudy) => post.live);
        setPosts(activePosts);
      } catch (err) {
        console.error("Error loading case studies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-12 sm:px-28">
          {posts.map((post) => (
            <SlideUp key={post._id}>
              <div className="px-1">
                <div className="relative w-full h-[250px] md:h-[340px]">
                  <Link href={post.link}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  </Link>
                </div>

                <h3 className="text-sm text-gray-600 mt-4 mb-4 tracking-wider font-light">
                  {post.title}
                </h3>
                <p className="text-orange-500 mt-1 text-sm font-light mb-5 tracking-wider">
                  {post.subtitle}
                </p>
                <p className="text-gray-600 mt-3 text-[13px] tracking-[2px] leading-[1.75]">
                  {post.description}
                </p>

                <a
                  href={post.link}
                  className="inline-block mt-4 px-4 py-3 bg-black text-white text-sm tracking-[2px] font-light"
                >
                  read more
                </a>
              </div>
            </SlideUp>
          ))}
        </div>
      )}
    </section>
  );
}
