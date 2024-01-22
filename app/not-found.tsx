import { LinkButton } from "@/components/link-button";

const NotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-full font-body md:mx-auto md:max-w-[96%] lg:max-w-[1140px]">
        <div className="px-3">
          <div className="rounded-[5px] bg-[#022d62] p-[60px] text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white xs:text-[28px] md:text-4xl">
              PAGE NOT FOUND
            </h2>
            <p className="my-5 text-white">
              We are currently working on this issue...
            </p>
            <LinkButton prefetch href="/" title="Get To Homepage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
