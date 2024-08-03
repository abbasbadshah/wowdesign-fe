import { CustomerReview } from "../Customer Review";
import { ProjectLocationMap } from "../Location";
import Logo from "../../../../assets/images/Company/companylistingDummylogo.png";
import { Query } from "../Query";

export const ProjectPageDetails = () => {
  const companiesInvolved = [
    { role: "Project Management Consultant", value: "111 ft-lb" },
    { role: "Contractor or Fitout contractor", value: "Milwaukee-Eight 107" },
    {
      role: "Suppliers",
      value: "Electronic Sequential Port Fuel Injection (ESPFI)",
    },
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
            <p className="text-gray-dark text-sm md:text-base !text-base !leading-7 !text-secondary">
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
            <p className="text-gray-dark text-sm md:text-base !text-base !leading-7 !text-secondary mt-2">
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
          <section className="py-5 xl:py-7">
            <header className="flex justify-between capitalize">
              <div>
                <h2 className="md:text-h2 font-bold text-gray-dark text-xl md:!text-[22px] 2xl:!text-2xl mb-2 md:mb-0">
                  Companies Involved
                </h2>
              </div>
            </header>
            <div>
              <div className="" style={{ height: "auto" }}>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white">
                      {companiesInvolved.map((company, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-lighter"
                        >
                          <td className="py-4 px-6 text-gray opacity-80 sm:text-secondary sm:opacity-100 lg:text-gray lg:opacity-80 xl:text-secondary xl:opacity-100">
                            {company.role}
                          </td>
                          <td className="py-4 px-6 text-secondary sm:text-end lg:text-left xl:text-end">
                            {company.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <ProjectLocationMap />
          <Query />
        </div>
        <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg">
          <div className="sticky top-32 4xl:top-40">
            <form
              noValidate=""
              className="rounded-xl border border-gray-lighter bg-white p-8 shadow-card"
            >
              <div className="flex flex-col justify-between items-center">
                <div>
                  <img
                    src={Logo}
                    className="bg-contain object-cover"
                  />
                </div>
                <p className="text-xl font-bold text-gray-dark xl:text-[22px] mt-5">
                  <span className="text-2xl font-bold">BuildWell Inc.</span>
                </p>
              </div>
              <p className="flex items-center justify-between text-xs text-red">
                <span />
                <span />
                <span />
              </p>
              <ul className="mt-5 xl:mt-5">
              <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Type</span>
                  <span className="font-bold text-red">Architect</span>
                </li>
                
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Location </span>
                  <span className="font-bold">Dubai, UAE</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Project Category</span>
                  <span className="font-bold">Commercials</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Year of Completion</span>
                  <span className="font-bold">2017</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Area</span>
                  <span className="font-bold text-red">m2 or Sqft</span>
                </li>
              </ul>
            </form>
            <div className="mt-4 w-full text-center 4xl:mt-8">
              <button
                type="button"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-5 py-2 text-base rounded-md hover:text-gray-1000 focus:ring-gray-900/30 relative !p-0 !font-bold !text-secondary focus:!ring-0"
              >
                Report this listing
                <span className="absolute bottom-0 left-0 w-full border border-gray" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
