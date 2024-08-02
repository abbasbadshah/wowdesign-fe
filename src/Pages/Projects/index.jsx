import { Layout } from "../../components/layout/layout";
import { BreadcrumbComponent } from "../../components/shared/Breadcrumb/breadcrumb";
import ProjectImages from "../../assets/images/Projects/Project Details/projectimage6.webp";
import CommercialImage from "../../assets/images/Projects/commercials.jpg";
import HealthcareImage from "../../assets/images/Projects/healthcare.jpg";
import RestaurantImage from "../../assets/images/Projects/restaurant.jpg";
import HospitalityImage from "../../assets/images/Projects/hospitality.jpeg";
import ResidentialsImage from "../../assets/images/Projects/resdentials.jpg";
import UrbanDevelopmentImage from "../../assets/images/Projects/ud.jpeg";
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
import { Helmet } from "react-helmet";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All", value: "" },
  { name: "Commercials", value: "commercials" },
  { name: "Residentials", value: "residentials" },
  { name: "Hospitality", value: "hospitality" },
  { name: "Urban Development", value: "urban-development" },
  { name: "Restaurants", value: "restaurants" },
  { name: "Healthcare", value: "healthcare" },
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

const projectData = [
  {
    id: 1,
    title: "Skyline Plaza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "commercials",
    path: "/projects/project-details",
    image: CommercialImage,
  },
  {
    id: 2,
    title: "Harmony Heights",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "residentials",
    path: "/projects/project-details",
    image: ResidentialsImage,
  },
  {
    id: 3,
    title: "Serenity Resort & Spa",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "hospitality",
    path: "/projects/project-details",
    image: HospitalityImage,
  },
  {
    id: 4,
    title: "Greenville Revitalization Project",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "urban-development",
    path: "/projects/project-details",
    image: UrbanDevelopmentImage,
  },
  {
    id: 5,
    title: "Garden Bistro",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "restaurants",
    path: "/projects/project-details",
    image: RestaurantImage,
  },
  {
    id: 6,
    title: "Horizon Medical Complex",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "healthcare",
    path: "/projects/project-details",
    image: HealthcareImage,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Projects = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory
    ? projectData.filter((project) => project.category === selectedCategory)
    : projectData;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <Layout headerType="2">
      <Helmet>
        <title>Projects | Wow Designs and Products </title>
      </Helmet>
      <BreadcrumbComponent
        title="Wow Projects"
        bgImage={ResidentialsImage}
        breadcrumb={["Projects"]}
      />
      <div className="px-4 my-12 sm:px-6 lg:px-8 xl:px-16">
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
                <DialogPanel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <PhoneXMarkIcon className="w-6 h-6" aria-hidden="true" />
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
                        className="px-4 py-6 border-t border-gray-200"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="flow-root -mx-2 -my-3">
                              <DisclosureButton className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="flex items-center ml-6">
                                  {open ? (
                                    <MinusIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="w-5 h-5"
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
                                      className="w-4 h-4 border-gray-300 rounded text-theme-color focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="flex-1 min-w-0 ml-3 text-gray-500"
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
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] h-fit overflow-y-auto">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="p-6 pb-6 space-y-4 text-base font-medium text-gray-900 border border-gray-200 rounded"
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
                      className="py-6 border-b border-gray-200"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -my-3">
                            <DisclosureButton className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="flex items-center ml-6">
                                {open ? (
                                  <MinusIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="w-5 h-5"
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
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
                {/* Products Grid*/}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {/*Project Card Start*/}
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="relative overflow-hidden group rounded"
                    >
                      <Link
                        to={`/projects/project-details`}
                        className="block overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="scale-100 group-hover:scale-105 transition-all duration-500 rounded w-full h-72 object-cover"
                        />
                      </Link>

                      <div className="mt-5 bg-white flex flex-col">
                        <div className="flex items-center justify-between">
                          <div className="w-3/4">
                            <Link
                              to={`/projects/project-details`}
                              className="block"
                            >
                              <h2 className="text-xl font-bold mb-1 hover:text-theme-color transition-colors">
                                {project.title}
                              </h2>
                            </Link>
                          </div>

                          <div className="w-1/4">
                            <span className="text-sm font-semibold py-1.5 px-2 bg-gray-100 inline-block">
                              {project.category.charAt(0).toUpperCase() +
                                project.category.slice(1)}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-500 mt-5">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Project Card End */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};
