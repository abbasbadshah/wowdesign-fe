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
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Fuse from "fuse.js";

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

const projectData = [
  {
    id: 1,
    title: "Skyline Plaza",
    author: "Cristina Murfy, UAE",
    category: "commercials",
    path: "/projects/project-details",
    image: CommercialImage,
  },
  {
    id: 2,
    title: "Harmony Heights",
    author: "Cristina Murfy, UAE",
    category: "residentials",
    path: "/projects/project-details",
    image: ResidentialsImage,
  },
  {
    id: 3,
    title: "Serenity Resort & Spa",
    author: "Cristina Murfy, UAE",
    category: "hospitality",
    path: "/projects/project-details",
    image: HospitalityImage,
  },
  {
    id: 4,
    title: "Greenville Revitalization Project",
    author: "Cristina Murfy, UAE",
    category: "urban-development",
    path: "/projects/project-details",
    image: UrbanDevelopmentImage,
  },
  {
    id: 5,
    title: "Garden Bistro",
    author: "Cristina Murfy, UAE",
    category: "restaurants",
    path: "/projects/project-details",
    image: RestaurantImage,
  },
  {
    id: 6,
    title: "Horizon Medical Complex",
    author: "Cristina Murfy, UAE",
    category: "healthcare",
    path: "/projects/project-details",
    image: HealthcareImage,
  },
];

const fuse = new Fuse(projectData, {
  keys: ["title", "category"],
  includeScore: true,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Projects = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterByCategory(category);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);
    filterBySearch(term);
  };

  const filterByCategory = (category) => {
    if (category) {
      const filtered = projectData.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projectData);
    }
  };

  const filterBySearch = (term) => {
    if (term) {
      const results = fuse.search(term);
      setFilteredProjects(results.map((result) => result.item));
    } else {
      setFilteredProjects(projectData);
    }
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
            {/* Mobile filter dialog content */}
          </Dialog>
        </Transition>

        <main className="px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] h-fit overflow-y-auto">
                <h3 className="sr-only">Categories</h3>
                <div>
                  <div className="relative my-2 ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      placeholder="Search Category, Name..."
                      required=""
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
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
              </div>
              <div className="lg:col-span-3">
                {/* Products Grid*/}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                          <div className="w-full sm:w-3/4 mb-2 sm:mb-0">
                            <Link
                              to={`/projects/project-details`}
                              className="block"
                            >
                              <h2 className="text-xl font-bold mb-1 hover:text-theme-color transition-colors line-clamp-2">
                                {project.title}
                              </h2>
                            </Link>
                          </div>

                          <div className="w-auto sm:w-1/4 sm:text-right">
                            <span className="text-sm font-semibold py-1.5 px-2 bg-gray-100 inline-block break-words max-w-full">
                              {project.category
                                ? project.category.charAt(0).toUpperCase() +
                                  project.category.slice(1)
                                : ""}
                            </span>
                          </div>
                        </div>
                        <span className="flex gap-2 text-sm font-medium text-gray-500 mt-2">
                          <UserCircleIcon className="w-6 text-theme-color flex-shrink-0" />
                          <span className="truncate">{project.author}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};
