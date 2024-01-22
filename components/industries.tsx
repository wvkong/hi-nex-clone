import { LinkButton } from "./link-button";

export const Industries = () => {
  return (
    <section className="bg-[#022d62] py-12 md:py-16 lg:py-24">
      <div className="max-w-full font-body md:mx-auto md:max-w-[96%] md:px-3 lg:max-w-[1140px]">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="px-3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-white xs:text-[28px] md:text-4xl">
              We excel in our industry so that you can get in yours.
            </h2>
          </div>
          <div className="px-3 lg:w-1/2">
            <p className="font-light text-white xs:text-xl">
              We offer expertise across various industries. See some of the
              industries we have vast experience working in as a full-service
              marketing agency.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap">
          <div className="w-full px-3 xs:w-1/2 lg:w-1/4">
            <ul className="h-full border-b-2 border-[#777777]/30 pb-[15px]">
              <li className="mb-[15px] text-[15px] text-white">Automotive</li>
              <li className="mb-[15px] text-[15px] text-white">
                Communication Services
              </li>
              <li className="mb-[15px] text-[15px] text-white">Retail</li>
              <li className="mb-[15px] text-[15px] text-white">Education</li>
            </ul>
          </div>
          <div className="mt-6 w-full px-3 xs:mt-0 xs:w-1/2 lg:w-1/4">
            <ul className="h-full border-b-2 border-[#777777]/30 pb-[15px]">
              <li className="mb-[15px] text-[15px] text-white">
                Financial Services
              </li>
              <li className="mb-[15px] text-[15px] text-white">Publishing</li>
              <li className="mb-[15px] text-[15px] text-white">FMCG</li>
              <li className="mb-[15px] text-[15px] text-white">Travel</li>
            </ul>
          </div>
          <div className="mt-6 w-full px-3 xs:w-1/2 lg:mt-0 lg:w-1/4">
            <ul className="h-full border-b-2 border-[#777777]/30 pb-[15px]">
              <li className="mb-[15px] text-[15px] text-white">
                Media and Entertainment
              </li>
              <li className="mb-[15px] text-[15px] text-white">
                Logistics and Distribution
              </li>
              <li className="mb-[15px] text-[15px] text-white">Utilities</li>
              <li className="mb-[15px] text-[15px] text-white">Health Care</li>
            </ul>
          </div>
          <div className="mt-6 w-full px-3 xs:w-1/2 lg:mt-0 lg:w-1/4">
            <ul className="h-full border-b-2 border-[#777777]/30 pb-[15px]">
              <li className="mb-[15px] text-[15px] text-white">Hi-Tech</li>
              <li className="mb-[15px] text-[15px] text-white">Publishing</li>
              <li className="mb-[15px] text-[15px] text-white">
                Industrial & Manufacturing
              </li>
              <li className="mb-[15px] text-[15px] text-white">Automotive</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex w-full px-3 md:justify-center">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-[10px]">
              <p className="text-white">
                We provide solutions for all types of big industries
              </p>
              <LinkButton href="/contact" title="Browse Industries" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
