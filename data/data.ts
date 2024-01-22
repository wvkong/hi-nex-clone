export type MapProps = {
  title: string;
  data: { href: string; title: string }[];
};

export type ClientStoriesProps = {
  imageUrl: string;
  content: string;
  name: string;
  position: string;
}[];

export const homeMap: MapProps = {
  title: "Home",
  data: [
    {
      href: "/",
      title: "Home Default",
    },
  ],
};

export const pagesMap: MapProps = {
  title: "Pages",
  data: [
    {
      href: "/contact",
      title: "Contact Us",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/blog",
      title: "Blog Classic",
    },
    {
      href: "/blog-grid",
      title: "Blog Grid",
    },
    {
      href: "/blog-details/1",
      title: "Blog Single",
    },
    {
      href: "/faq",
      title: "FAQ",
    },
    {
      href: "/coming-soon",
      title: "Coming Soon",
    },
    {
      href: "/404",
      title: "404 Error",
    },
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      href: "/terms-and-conditions",
      title: "Terms And Conditions",
    },
  ],
};

export const companyMap: MapProps = {
  title: "Company",
  data: [
    {
      href: "/about-us",
      title: "About Us",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/how-we-work",
      title: "How We Work",
    },
    {
      href: "/team",
      title: "Team",
    },
    {
      href: "/team-details/1",
      title: "Team Single",
    },
    {
      href: "/mission-vision",
      title: "Mission Vision",
    },
    {
      href: "/our-value",
      title: "Our Value",
    },
    {
      href: "/404",
      title: "404 Error",
    },
    {
      href: "/service",
      title: "Service",
    },
    {
      href: "/service-details/1",
      title: "Service Single",
    },
  ],
};

export const industriesMap: MapProps = {
  title: "Industries",
  data: [
    {
      href: "/industries",
      title: "Industries 1",
    },
    {
      href: "/industries-2",
      title: "Industries 2",
    },
    {
      href: "/industries-3",
      title: "Industries 3",
    },
    {
      href: "/industries-4",
      title: "Industries 4",
    },
  ],
};

export const caseStudiesMap: MapProps = {
  title: "Case Studies",
  data: [
    {
      href: "/case-study",
      title: "Case Studies",
    },
    {
      href: "/case-study-details/1",
      title: "Case Studies Single",
    },
  ],
};

export const elementsMap: {
  title: string;
  data: { href: string; title: string }[][];
} = {
  title: "Elements",
  data: [
    [
      {
        href: "/elements-action-box",
        title: "Action Box",
      },
      {
        href: "/elements-accordion",
        title: "Accordion",
      },
      {
        href: "/elements-button",
        title: "Button",
      },
      {
        href: "/elements-blog",
        title: "Blog",
      },
      {
        href: "/elements-client-logo",
        title: "Client Logo",
      },
      {
        href: "/elements-category-box",
        title: "Category Box",
      },
      {
        href: "/elements-case-study",
        title: "Case Study",
      },
    ],
    [
      {
        href: "/elements-counter",
        title: "Counter",
      },
      {
        href: "/elements-countdown",
        title: "Countdown",
      },
      {
        href: "/elements-services",
        title: "Services",
      },
      {
        href: "/elements-service-box",
        title: "Service Box",
      },
      {
        href: "/elements-infobox",
        title: "Infobox",
      },
      {
        href: "/elements-feature-step",
        title: "Feature Step",
      },
      {
        href: "/elements-feature-info",
        title: "Feature Info",
      },
    ],
    [
      {
        href: "/elements-testimonial",
        title: "Testimonial",
      },
      {
        href: "/elements-team",
        title: "Team",
      },
      {
        href: "/elements-tab",
        title: "Tabs",
      },
      {
        href: "/elements-pricing-table",
        title: "Pricing Table",
      },
      {
        href: "/elements-image-gallery",
        title: "Image Gallery",
      },
      {
        href: "/elements-list",
        title: "List",
      },
      {
        href: "/elements-video",
        title: "Video",
      },
    ],
  ],
};

export const itServicesFooterMap: MapProps = {
  title: "IT Services",
  data: [
    {
      href: "/service-details/1",
      title: "Information Security",
    },
    {
      href: "/service-details/2",
      title: "Data Synchronization",
    },
    {
      href: "/service-details/3",
      title: "Mobile Platforms",
    },
    {
      href: "/service-details/4",
      title: "Process Automation",
    },
    {
      href: "/service-details/5",
      title: "Event Processing",
    },
    {
      href: "/service-details/6",
      title: "Content Management",
    },
    {
      href: "/service-details/1",
      title: "Information Security",
    },
    {
      href: "/service-details/3",
      title: "Mobile Platforms",
    },
    {
      href: "/service-details/5",
      title: "Event Processing",
    },
  ],
};

export const companyFooterMap: MapProps = {
  title: "Company",
  data: [
    {
      href: "/about-us",
      title: "About",
    },
    {
      href: "/team",
      title: "Leadership Team",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/case-study",
      title: "Case Studies",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/mission-vision",
      title: "Mission Vision",
    },
  ],
};

export const supportFooterMap: MapProps = {
  title: "Support",
  data: [
    {
      href: "/how-we-work",
      title: "How we Work",
    },
    {
      href: "/faq",
      title: "Help & FAQs",
    },
    {
      href: "/contact",
      title: "Contact Us",
    },
    {
      href: "/pricing",
      title: "Pricing and Plans",
    },
    {
      href: "/privacy-policy",
      title: "Cookies Policy",
    },
    {
      href: "/terms-and-conditions",
      title: "Terms & Conditions",
    },
  ],
};

export const clientStories: ClientStoriesProps = [
  {
    imageUrl: "/avatar/1.jpg",
    content:
      "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
    name: "Gozzby",
    position: "Music",
  },
  {
    imageUrl: "/avatar/2.jpg",
    content:
      "Please, no matter how we advance technologically, please don't abandon the book. There is nothing in our material world more beautiful than the book.",
    name: "Educatgenix",
    position: "Education",
  },
  {
    imageUrl: "/avatar/3.jpg",
    content:
      "We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.",
    name: "Petfluent",
    position: "Pet Care",
  },
  {
    imageUrl: "/avatar/4.jpg",
    content:
      "First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we've realized it's a brochure.",
    name: "Financeoont",
    position: "Finance",
  },
  {
    imageUrl: "/avatar/5.jpg",
    content:
      "That’s sad. How plastic and artificial life has become. It gets harder and harder to find something…real.” Nin interlocked his fingers, and stretched out his arms. “Real love, real friends, real body parts…",
    name: "Mobifluent",
    position: "Mobile",
  },
  {
    imageUrl: "/avatar/6.jpg",
    content:
      "At the end of a miserable day, instead of grieving my virtual nothing, I can always look at my loaded wastepaper basket and tell myself that if I failed, at least I took a few trees down with me.",
    name: "James Smith",
    position: "Mobile",
  },
  {
    imageUrl: "/avatar/7.jpg",
    content:
      "The test of the machine is the satisfaction it gives you. There isn't any other test. If the machine produces tranquility it's right. If it disturbs you it's wrong until either the machine or your mind is changed",
    name: "Robert M",
    position: "Mobile",
  },
  {
    imageUrl: "/avatar/8.jpg",
    content:
      "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.",
    name: "Lyndoyn B",
    position: "Mobile",
  },
  {
    imageUrl: "/avatar/9.jpg",
    content:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life",
    name: "Bill James",
    position: "Mobile",
  },
  {
    imageUrl: "/avatar/10.jpg",
    content:
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    name: "Mobideus",
    position: "Mobile",
  },
];
