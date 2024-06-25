import { Layout } from "../../components/layout/layout";
import { BreadcrumbComponent } from "../../components/shared/Breadcrumb/breadcrumb";
import ProjectImages from "../../assets/images/Projects/Project Details/projectimage6.webp";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  PhoneXMarkIcon,
  ChevronDownIcon,
  XMarkIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All", value: "" },
  { name: "CONTEMPORARY HOMES", value: "contemporary" },
  { name: "TRADITIONAL HOMES", value: "traditional" },
  { name: "REFURBISHMENTS & EXTENSIONS", value: "refurbishments" },
  { name: "COMMERCIAL PROPERTY", value: "commercial" },
  { name: "EDUCATION", value: "education" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

const portfolioData = [
  {
    id: 1,
    title: "First Sentier Investors, Sydney",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
    category: "contemporary",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 2,
    title: "Traditional House, Melbourne",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "traditional",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 3,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 4,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 5,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 6,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 7,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 8,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
  {
    id: 9,
    title: "Commercial Building Renovation",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "refurbishments",
    path: "/portfolios/portfolio-details",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Portfolios = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const filteredPortfolios = selectedCategory
    ? portfolioData.filter((project) => project.category === selectedCategory)
    : portfolioData;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      <BreadcrumbComponent
        title="Wow Portfolios"
        bgImage={ProjectImages}
        breadcrumb={["Portfolios"]}
      />
      <div className="px-6 lg:px-24 my-24">
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-[999] lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <PhoneXMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-theme-color focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="Portfolio-heading" className="pb-24 pt-6">
            <h2 id="Portfolio-heading" className="sr-only">
              Portfolios
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border p-6 border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.value}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategorySelect(category.value);
                        }}
                        className={classNames(
                          category.value === selectedCategory
                            ? "text-theme-color font-bold"
                            : "text-gray-900",
                          "hover:text-theme-color"
                        )}
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
                {/*
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                            <DisclosurePanel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  */}
              </form>
              <div className="lg:col-span-3">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                  {/*Portfolio Card Start*/}
                  {filteredPortfolios.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white shadow-md rounded overflow-hidden group"
                    >
                      <div className="relative">
                        <img
                          src={ProjectImages}
                          className=""
                          alt={project.title}
                        />
                      </div>

                      <div className="p-4 relative">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">
                          {project.title}
                        </h2>
                        <p className="text-sm mb-3">{project.description}</p>
                        <div className="w-fit p-2 rounded text-sm font-medium bg-[#D1D5DB] text-black">
                          {project.category}
                        </div>

                        <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                          <div className="p-2">
                            <Link
                              to={project.path}
                              className="py-2.5 w-full flex items-center justify-center rounded text-white bg-theme-color hover:bg-white hover:text-theme-color border border-theme-color transition-all duration-500"
                            >
                              View Portfolio
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Portfolio Card End */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};
