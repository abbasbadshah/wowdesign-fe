import { CustomerReview } from "../Customer Review";
import { ProjectLocationMap } from "../Location";
import Logo from "../../../../assets/images/Company/browsing/logo/logo2.avif";
import { Query } from "../Query";
import { ImageGalleryStyleTwo } from "../../../../components/shared";
import GalleryImageOne from "../../../../assets/images/Projects/commercials.jpg";
import GalleryImageThree from "../../../../assets/images/Projects/healthcare.jpg";
import GalleryImageTwo from "../../../../assets/images/Projects/hospitality.jpeg";
import GalleryImageFour from "../../../../assets/images/Projects/resdentials.jpg";
import GalleryImageFive from "../../../../assets/images/Projects/restaurant.jpg";
import GalleryImageSix from "../../../../assets/images/Projects/ud.jpeg";

export const ProjectPageDetails = () => {
  const imageIds = [
    GalleryImageOne,
    GalleryImageTwo,
    GalleryImageThree,
    GalleryImageFour,
    GalleryImageFive,
    GalleryImageSix,
  ];
  const projectDetails = [
    { label: "Type", value: "Architect", highlight: true },
    { label: "Location", value: "Dubai, UAE" },
    { label: "Project Category", value: "Commercials" },
    { label: "Year of Completion", value: "2017" },
    { label: "Area", value: "10,000 m²", highlight: true },
  ];

  const contractors = ["ABC Construction", "XYZ Builders", "123 Contractors"];

  const companiesInvolved = [
    "BuildWell Inc.",
    "ABC Construction",
    "XYZ Builders",
    "123 Contractors",
    "Dubai Architects",
    "Global Suppliers Ltd.",
  ];
  return (
    <div>
      <div className="flex justify-between gap-5 lg:gap-8 xl:gap-12 4xl:gap-16">
        <div className="w-full">
          <div className="flex justify-between border-b border-gray-lighter pb-6 md:pb-8 2xl:pb-10">
            <div>
              <h2 className="md:text-h2 font-bold text-gray-dark mt-2 !text-2xl uppercase !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl">
                Skyline Plaza — Dubai (2017)
              </h2>
              <p className="text-gray-dark">~ By Cristina Murfy, UAE</p>
            </div>
            <div className="relative">
              <div className="relative md:hidden" data-headlessui-state="">
                <div>
                  <button
                    className="h-6 w-6 rounded-full border-none outline-none hover:ring-2 hover:ring-gray-lighter"
                    id="headlessui-menu-button-:r7:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-1 hidden items-center gap-3 bg-white md:flex 3xl:gap-6">
                <button
                  type="button"
                  className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-full bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 !border-none !bg-gray-lightest !p-4 text-gray-dark hover:!bg-gray-dark hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-auto w-5"
                  >
                    <path
                      fill="currentColor"
                      d="M18.507 16.143c-1.15 0-2.186.497-2.905 1.287l-6.467-4.006a3.906 3.906 0 0 0 0-2.848l6.467-4.006a3.92 3.92 0 0 0 2.905 1.286 3.933 3.933 0 0 0 3.929-3.928A3.933 3.933 0 0 0 18.507 0a3.933 3.933 0 0 0-3.928 3.928c0 .503.096.983.268 1.425L8.38 9.358a3.92 3.92 0 0 0-2.905-1.286A3.933 3.933 0 0 0 1.547 12a3.933 3.933 0 0 0 3.928 3.928c1.15 0 2.186-.496 2.905-1.286l6.467 4.005a3.912 3.912 0 0 0-.268 1.425A3.933 3.933 0 0 0 18.507 24a3.933 3.933 0 0 0 3.929-3.928 3.933 3.933 0 0 0-3.929-3.928ZM16.011 3.928a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.496 2.499 2.499 0 0 1-2.496-2.496ZM5.475 14.496A2.499 2.499 0 0 1 2.98 12a2.499 2.499 0 0 1 2.496-2.496A2.499 2.499 0 0 1 7.971 12a2.499 2.499 0 0 1-2.496 2.496Zm10.536 5.576a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.495 2.499 2.499 0 0 1-2.496-2.495Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-full bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 !border-none !bg-gray-lightest !p-4 text-gray-dark hover:!bg-gray-dark hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-auto w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <section className="py-5 lg:py-6 xl:py-7">
            <p className="text-gray-dark text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-dark text-sm md:text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <ProjectLocationMap />
          <ImageGalleryStyleTwo images={imageIds} />
          <Query />
        </div>
        <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg">
          <div className="bg-white rounded border border-gray-lighter shadow-card overflow-hidden">
            {/* Company Logo and Name */}
            <div className="bg-[#FBF5EE] p-8 text-center">
              <img
                src={Logo}
                className="mx-auto w-40 h-40 object-contain mb-6"
                alt="Company Logo"
              />
              <h2 className="text-3xl font-bold text-gray-dark">
                BuildWell Inc.
              </h2>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <ul className="space-y-3">
                {projectDetails.map((detail, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{detail.label}</span>
                    <span
                      className={`font-semibold ${
                        detail.highlight ? "text-red" : "text-gray-800"
                      }`}
                    >
                      {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contractors */}
            <div className="p-6 border-y-[1px] border-black">
              <h3 className="text-lg font-semibold mb-4">Contractors</h3>
              <ul className="space-y-2">
                {contractors.map((contractor, index) => (
                  <li key={index} className="text-gray-800">
                    {contractor}
                  </li>
                ))}
              </ul>
            </div>

            {/* Companies Involved */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Companies Involved</h3>
              <div className="flex flex-wrap gap-2">
                {companiesInvolved.map((company, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Report Listing Button */}
            <div className="p-6 text-center">
              <button
                type="button"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-6 py-2 text-base rounded text-white bg-red-600 hover:bg-red-400 focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
              >
                Report this listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
