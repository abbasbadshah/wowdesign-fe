import { ArrowRightIcon } from "@radix-ui/react-icons";
import newsImage1 from "../../../assets/images/Home/News/main4.webp";
import newsImage2 from "../../../assets/images/Home/News/news.jpg";

export const News = () => {
  return (
    <div className="flex flex-col px-4 pb-16 lg:px-24 ">
      <h2 className="text-4xl font-medium text-left mb-10">
        Wow <span className="text-theme-color font-bold">in the news</span>
      </h2>
      <div className="mt-3 lg:pb-24 grid grid-row lg:grid-cols-2 gap-3">
        {/* Card One */}
        <div className="lg:h-[320px] flex flex-col lg:flex-row rounded">
          <div className="bg-[#EEEFF0] lg:w-1/2 p-8 text-left flex flex-col justify-between rounded">
            <div>
              <h3 className="text-lg font-medium">News</h3>
              <p className="mt-2">
                Click here for updates on our projects and what’s going on in
                our studio.
              </p>
              <p className="mt-2">
                You can also follow us on social media using the links below.
              </p>
            </div>
            <a
              href="/"
              className="tracking-widest text-base group mt-5 flex items-center"
            >
              More
              <ArrowRightIcon className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
          <img
            src={newsImage1}
            className="w-full h-full object-cover lg:w-1/2 rounded-r"
            alt="newsimage"
          />
        </div>
        {/* Card Two */}
        <div className="lg:h-[320px] flex flex-col lg:flex-row">
          <div className="bg-[#EEEFF0] lg:lg:w-1/2 p-8 text-left flex flex-col justify-between rounded">
            <div>
              <h3 className="text-lg font-medium">News</h3>
              <p className="mt-2">
                Click here for updates on our projects and what’s going on in
                our studio.
              </p>
              <p className="mt-2">
                You can also follow us on social media using the links below.
              </p>
            </div>
            <a
              href="/"
              className="tracking-widest text-base group mt-5 flex items-center"
            >
              More
              <ArrowRightIcon className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
          <img
            src={newsImage2}
            className="w-full h-full object-cover lg:w-1/2 rounded-r"
            alt="newsimage"
          />
        </div>
      </div>
    </div>
  );
};
