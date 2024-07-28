import { CustomerReview } from "../Customer Review";
import { ProjectLocationMap } from "../Location";
import ClientAvatar from "../../../../assets/images/User Profile/man.jpg";
import { ProjectPagination } from "../Pagination";
import { Query } from "../Query";
import { NewsletterCTA } from "../../../../components/shared";

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
          {/*
            <section className="py-5 xl:py-7">
            <header className="flex justify-between capitalize">
              <div>
                <h2 className="md:text-h2 font-bold text-gray-dark text-xl md:!text-[22px] 2xl:!text-2xl mb-1.5">
                  owner info
                </h2>
              </div>
            </header>
            <div className="mb-6 flex items-center pt-4">
              <a href="/user/fabio-jaction">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <img
                    alt="Fabio Jaction"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="absolute object-cover"
                    sizes="(min-width: 320) 100vw, 100vw"
                    srcSet="/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=3840&q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F11.jpg&w=3840&q=75"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                  />
                </div>
              </a>
              <div className="ml-3 md:ml-6">
                <h6 className="md:text-h6 font-bold text-gray-dark">
                  <a href="/user/fabio-jaction">Fabio Jaction</a>
                </h6>
                <div className="mt-2 flex items-center">
                  <div className="aegon-rate">
                    <ul
                      className="rc-rate flex items-center [&>li]:cursor-pointer [&.rc-rate-disabled>li]:cursor-default [&>li]:relative [&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li]:inline-block text-gray-200 [&>li>div>.rc-rate-star-first]:absolute [&>li>div>.rc-rate-star-first]:left-0 rtl:[&>li>div>.rc-rate-star-first]:right-0 [&>li>div>.rc-rate-star-first]:top-0 [&>li>div>.rc-rate-star-first]:w-1/2 [&>li>div>.rc-rate-star-first]:h-full [&>li>div>.rc-rate-star-first]:overflow-hidden [&>.rc-rate-star-half>div>.rc-rate-star-first]:text-gray-dark [&>.rc-rate-star-full>div]:text-gray-dark [&>li>div]:transition-all [&>li>div]:duration-300 [&>.rc-rate-star:hover]:scale-110"
                      tabIndex={0}
                      role="radiogroup"
                    >
                      <li className="rc-rate-star rc-rate-star-full">
                        <div
                          role="radio"
                          aria-checked="true"
                          aria-posinset={1}
                          aria-setsize={5}
                          tabIndex={0}
                        >
                          <div className="rc-rate-star-first">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="rc-rate-star-second">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="rc-rate-star rc-rate-star-full">
                        <div
                          role="radio"
                          aria-checked="true"
                          aria-posinset={2}
                          aria-setsize={5}
                          tabIndex={0}
                        >
                          <div className="rc-rate-star-first">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="rc-rate-star-second">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="rc-rate-star rc-rate-star-full">
                        <div
                          role="radio"
                          aria-checked="true"
                          aria-posinset={3}
                          aria-setsize={5}
                          tabIndex={0}
                        >
                          <div className="rc-rate-star-first">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="rc-rate-star-second">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="rc-rate-star rc-rate-star-full">
                        <div
                          role="radio"
                          aria-checked="true"
                          aria-posinset={4}
                          aria-setsize={5}
                          tabIndex={0}
                        >
                          <div className="rc-rate-star-first">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="rc-rate-star-second">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="rc-rate-star rc-rate-star-half rc-rate-star-active">
                        <div
                          role="radio"
                          aria-checked="true"
                          aria-posinset={5}
                          aria-setsize={5}
                          tabIndex={0}
                        >
                          <div className="rc-rate-star-first">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="rc-rate-star-second">
                            <div className="[&>svg]:fill-current h-[18px] w-[18px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="ml-2 text-gray-dark md:ml-3">
                    <span>(</span> 35 <span>)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-3 leading-[22px] sm:grid-cols-2 md:gap-5 md:text-base">
              <p>
                <span className="text-gray">Member since: </span>
                <span className="ml-1 text-gray-dark">Jan 2014</span>
              </p>
              <p>
                <span className="text-gray">Languages spoken: </span>
                <span className="ml-1 text-gray-dark">English &amp;</span>
                <span className="ml-1 text-gray-dark">Italian</span>
              </p>
              <p>
                <span className="text-gray">Response rate: </span>
                <span className="ml-1 text-gray-dark">More than 85%</span>
              </p>
              <p>
                <span className="text-gray">Response time: </span>
                <span className="ml-1 text-gray-dark">Within an hour</span>
              </p>
            </div>
            <button
              type="button"
              className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-5 py-2 text-base rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 w-full !border-gray-dark !px-4 !py-[8px] !font-bold text-gray-dark hover:bg-gray-dark hover:text-white md:w-auto md:border-gray lg:!px-[28px] lg:!py-[14px]"
            >
              Send a message
            </button>
          </section>
          */}
          <ProjectLocationMap />
          <CustomerReview />
          <Query />

        </div>
        <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg">
          <div className="sticky top-32 4xl:top-40">
            <form
              noValidate=""
              className="rounded-xl border border-gray-lighter bg-white p-8 shadow-card"
            >
              <div className="flex justify-between items-center">
                <div>
                  <img
                    src={ClientAvatar}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <p className="text-xl font-bold text-gray-dark xl:text-[22px]">
                  <span className="text-xl font-bold">Cristina Murfy,</span>
                </p>
              </div>
              <p className="flex items-center justify-between text-xs text-red">
                <span />
                <span />
                <span />
              </p>
              <ul className="mt-3 xl:mt-5">
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Designation</span>
                  <span className="font-bold">Architects</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Area</span>
                  <span className="font-bold text-red">m2 or Sqft</span>
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
