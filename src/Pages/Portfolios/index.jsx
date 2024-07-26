import { Layout } from "../../components/layout/layout";
import { BreadcrumbComponent } from "../../components/shared";
import ProjectImages from "../../assets/images/Projects/Project Details/projectimage6.webp";
import { Link, useNavigate } from "react-router-dom";
import AcousticImage from "../../assets/images/Portfolios/SoundScape Panels.jpg";
import FlooringImage from "../../assets/images/Portfolios/DuraStone Tiles.jpg";
import WallsImage from "../../assets/images/Portfolios/TexTure Wallcoverings.jpg";
import CeilingsImage from "../../assets/images/Portfolios/SkyLite Panels.jpg";
import LandscapeImage from "../../assets/images/Portfolios/EcoTurf Synthetic Grass.webp";
import ElectricalImage from "../../assets/images/Portfolios/SmartWire Conduit System.jpg";
import ProjectImageTwo from "../../assets/images/Projects/ud.jpeg";
import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  PhoneXMarkIcon,
  // ChevronDownIcon,
  // XMarkIcon,
  // FunnelIcon,
  MinusIcon,
  PlusIcon,
  // Squares2X2Icon,
} from "@heroicons/react/24/outline";

// const sortOptions = [
//   { name: "Most Popular", href: "#", current: true },
//   { name: "Best Rating", href: "#", current: false },
//   { name: "Newest", href: "#", current: false },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];
const subCategories = [
  { name: "All", value: "" },
  { name: "Acoustic", value: "acoustic" },
  { name: "Flooring", value: "flooring" },
  { name: "Walls", value: "walls" },
  { name: "Ceilings", value: "ceilings" },
  { name: "Landscape", value: "landscape" },
  { name: "Electrical", value: "electrical" },
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
    title: "SoundScape Panels",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
    category: "acoustic",
    path: "/products/product-details",
    image: AcousticImage,
  },
  {
    id: 2,
    title: "DuraStone Tiles",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "flooring",
    path: "/products/product-details",
    image: FlooringImage,
  },
  {
    id: 3,
    title: "TexTure Wallcoverings",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "walls",
    path: "/products/product-details",
    image: WallsImage,
  },
  {
    id: 4,
    title: "SkyLite Panels",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "ceilings",
    path: "/products/product-details",
    image: CeilingsImage,
  },
  {
    id: 5,
    title: "EcoTurf Synthetic Grass",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "landscape",
    path: "/products/product-details",
    image: LandscapeImage,
  },
  {
    id: 6,
    title: "SmartWire Conduit System",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "electrical",
    path: "/products/product-details",
    image: ElectricalImage,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Products = () => {
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
      <Helmet>
        <title>Products | Wow Designs and Products </title>
      </Helmet>
      <BreadcrumbComponent
        title="Wow Products"
        bgImage={ProjectImageTwo}
        breadcrumb={["Product"]}
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
          <section aria-labelledby="Portfolio-heading" className="pt-6 pb-24">
            <h2 id="Portfolio-heading" className="sr-only">
              Portfolios
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] h-fit overflow-y-auto">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="p-6 pb-6 space-y-4 text-base font-medium text-gray-900 border border-gray-200"
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
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {/*Portfolio Card Start*/}
                  {filteredPortfolios.map((project) => (
                    <div
                      key={project.id}
                      className="relative overflow-hidden group rounded"
                    >
                      <Link to={project.path} className="block">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-theme-color text-white px-2 py-1 rounded text-sm font-medium">
                          {project.category}
                        </div>
                      </Link>
                      <Link
                        to={project.path}
                        className="absolute bottom-0 inset-x-0 m-2"
                      >
                        <div className="p-4 bg-white rounded group hover:bg-theme-color">
                          <h2 className="text-xl font-medium mb-1 text-center group-hover:text-black group-hover:transition-all">
                            {project.title}
                          </h2>
                        </div>
                      </Link>
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
