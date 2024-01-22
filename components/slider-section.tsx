import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import slider1 from "@/public/slider-1.jpg";
import slider2 from "@/public/slider-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const SliderSection = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="relative flex h-[500px] w-full items-center justify-center font-body before:absolute before:z-0 before:h-full before:w-full before:bg-[#022d62] before:opacity-30 before:content-[''] md:h-[700px]">
            <Image
              src={slider1}
              alt="slider1"
              placeholder="blur"
              quality={100}
              sizes="100vw"
              fill
              className="-z-10 object-cover"
            />
            <div className="absolute z-10 max-w-2xl px-4 text-center lg:max-w-4xl lg:px-0">
              <h2 className="mb-[10px] text-[42px] font-bold leading-[52px] text-white md:text-[66px] md:leading-[76px] lg:mb-5 lg:text-7xl lg:leading-[82px]">
                A digital technology partner you can trust
              </h2>
              <p className="mb-5 text-[17px] font-medium text-white md:text-base">
                Award-Winning website design & creative digital agency.
              </p>
              <Link
                prefetch={false}
                href="/about-us"
                className="mt-[15px] inline-flex rounded-3xl bg-[#022d62] px-[35px] py-[17px] text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#ef3139]"
              >
                Get Started Now
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative flex h-[500px] w-full items-center justify-center font-body before:absolute before:z-10 before:h-full before:w-full before:bg-[#022d62] before:opacity-30 before:content-[''] md:h-[700px]">
            <Image
              src={slider2}
              alt="slider2"
              quality={100}
              sizes="100vw"
              fill
              className="object-cover"
            />
            <div className="absolute z-20 max-w-2xl px-4 text-center lg:max-w-4xl lg:px-0">
              <h2 className="mb-[10px] text-[42px] font-bold leading-[52px] text-white md:text-[66px] md:leading-[76px] lg:mb-5 lg:text-7xl lg:leading-[82px]">
                Award winning digital agency
              </h2>
              <p className="mb-5 text-[17px] font-medium text-white md:text-base">
                We&apos;re hi-Nex. We help drive change with technology.
              </p>
              <Link
                prefetch={false}
                href="/about-us"
                className="mt-[15px] inline-flex rounded-3xl bg-[#022d62] px-[35px] py-[17px] text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#ef3139]"
              >
                View Our Solution
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-1 border-none bg-rose-500 text-white hover:bg-rose-600 hover:text-white xs:left-[5%] md:left-[10%]" />
      <CarouselNext className="right-1 border-none bg-rose-500 text-white hover:bg-rose-600 hover:text-white xs:right-[5%] md:right-[10%]" />
    </Carousel>
  );
};
