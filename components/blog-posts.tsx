import Link from "next/link";
import Image from "next/image";
import { Pin } from "lucide-react";

import news1 from "@/public/news/1.jpg";
import news2 from "@/public/news/2.jpg";
import news3 from "@/public/news/3.jpg";
import { Separator } from "./ui/separator";
import { LinkButton } from "./link-button";

export const BlogPosts = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        {/* TITLE */}
        <div className="flex justify-center">
          <div className="mb-12 w-full px-3 text-center lg:w-3/4">
            <h2 className="mb-4 text-2xl font-bold text-[#022d62] xs:text-[28px] md:text-4xl">
              Latest news and inspirational stories
            </h2>
            <p className="text-base font-medium text-[#121212] md:text-lg">
              Check out our latest blog posts, articles, client success stories
              and essential announcement.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mb-6 w-full px-3 md:w-7/12 lg:w-4/6">
            <div>
              <div className="relative overflow-hidden rounded-[5px]">
                <Image
                  placeholder="blur"
                  src={news1}
                  alt="news"
                  className="w-full"
                />
                <div className="absolute -right-11 -top-11 h-20 w-20 rotate-45 bg-[#ef3139]" />
                <Pin className="absolute right-1.5 top-1.5 h-4 w-4 rotate-45 fill-white text-white" />
              </div>
              <div>
                <div className="mb-3 mt-4">
                  <div className="flex items-center gap-3">
                    <Link
                      className="px-4 py-[3px] text-sm font-bold text-[#ef3139]"
                      prefetch={false}
                      href="/"
                    >
                      Strategy
                    </Link>
                    <Link
                      className="text-sm font-medium text-[rgba(2,45,98,.5)]"
                      prefetch={false}
                      href="/"
                    >
                      May 15, 2023
                    </Link>
                  </div>
                </div>
                <h4>
                  <Link
                    className="text-lg font-bold text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139]"
                    prefetch={false}
                    href="/blog-details/1"
                  >
                    From a small startup to a leading global agency in 10 Years.
                  </Link>
                </h4>
                <div className="mt-4">
                  <p className="leading-[26px] text-[#777777]">
                    Imagine that a few more steps ahead there is a place where
                    the path splits, where is goes off to the left and off to
                    the right. Pause here for a few moments and have a think.
                    Here, there are two different pathways, two possibilities,
                    two ways that you could choose to go.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 md:w-5/12 lg:w-2/6">
            <div className="grid gap-[25px]">
              <div>
                <div className="overflow-hidden rounded-[5px]">
                  <Image
                    placeholder="blur"
                    src={news2}
                    alt="news"
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="mb-[10px] mt-4">
                    <div className="flex items-center gap-3">
                      <Link
                        className="px-4 py-[3px] text-sm font-bold text-[#ef3139]"
                        prefetch={false}
                        href="/"
                      >
                        Jobs
                      </Link>
                      <Link
                        className="text-sm font-medium text-[rgba(2,45,98,.5)]"
                        prefetch={false}
                        href="/"
                      >
                        June 30, 2023
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link
                      className="text-lg font-bold text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139]"
                      prefetch={false}
                      href="/blog-details/2"
                    >
                      How google&apos;s BERT algorithm affects your website
                      traffic
                    </Link>
                  </h4>
                </div>
              </div>
              <div>
                <div className="overflow-hidden rounded-[5px]">
                  <Image
                    placeholder="blur"
                    src={news3}
                    alt="news"
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="mb-[10px] mt-4">
                    <div className="flex items-center gap-3">
                      <Link
                        className="px-4 py-[3px] text-sm font-bold text-[#ef3139]"
                        prefetch={false}
                        href="/"
                      >
                        Technology
                      </Link>
                      <Link
                        className="text-sm font-medium text-[rgba(2,45,98,.5)]"
                        prefetch={false}
                        href="/"
                      >
                        March 15, 2023
                      </Link>
                    </div>
                  </div>
                  <h4>
                    <Link
                      className="text-lg font-bold text-[#022d62] transition-all duration-300 ease-in-out hover:text-[#ef3139]"
                      prefetch={false}
                      href="/blog-details/3"
                    >
                      Five reasons why you must create a website for your
                      company
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mb-4 mt-12" />
        <div className="mt-12">
          <div className="justify-center px-3 md:flex">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-[10px]">
              <p className="text-[#777777]">
                We have articles on a range of topics
              </p>
              <LinkButton
                href="/contact"
                title="View All Blogs"
                className="text-[#022d62] hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
