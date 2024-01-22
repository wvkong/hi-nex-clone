"use client";

import { SliderSection } from "@/components/slider-section";
import { ClientLogos } from "@/components/client-logos";
import { Services } from "@/components/services";
import { ClientStories } from "@/components/client-stories";
import { OurVision } from "@/components/our-vision";
import { Industries } from "@/components/industries";
import { AllServices } from "@/components/all-services";
import { ClientSuccess } from "@/components/client-success";
import { Counter } from "@/components/counter";
import { BlogPosts } from "@/components/blog-posts";
import { CallToAction } from "@/components/call-to-action";

export default function Root() {
  return (
    <div className="pt-[65px] xs:pt-[80px] md:pt-[150px] lg:pt-[155px]">
      <SliderSection />
      <ClientLogos />
      <Services />
      <ClientStories />
      <OurVision />
      <Industries />
      <AllServices />
      <ClientSuccess />
      <Counter />
      <BlogPosts />
      <CallToAction />
    </div>
  );
}
