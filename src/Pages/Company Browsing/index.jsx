import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  BuildingOffice2Icon,
  DocumentDuplicateIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { Layout } from "../../components/layout/layout";
import CatImageOne from "../../assets/images/Company/browsing/background/company browsing (1).jpg";
import CatImageTwo from "../../assets/images/Company/browsing/background/company browsing (2).jpg";
import CatImageThree from "../../assets/images/Company/browsing/background/company browsing (3).jpg";
import CatImageFour from "../../assets/images/Company/browsing/background/company browsing (4).jpg";
import CatImageFive from "../../assets/images/Company/browsing/background/company browsing (5).jpg";
import logo from "../../assets/images/Company/browsing/logo/logo2.avif";
import { PhotoDisplay } from "../../components/shared";
import { StarIcon } from "lucide-react";

const categories = [
  "Architects",
  "Interior Designer",
  "Landscape Designer",
  "Acoustic Consultant",
  "Engineering and Structural Consultant",
  "Facade / Enclosure Consultant",
  "Sustainability Consultant",
  "Artist and Art Designer",
  "MEP Consultant",
  "Urban Design and Planners",
  "Brand Designer",
  "General Contractor",
  "Fitout Contractor",
  "Design and Build Contractor",
  "Real Estate Developers",
  "Educational Institutions",
  "Government Agencies",
  "Law Firms",
  "Furniture supplier",
  "Lighting Supplier",
  "Acoustic supplier",
  "Sanitaryware Supplier",
  "Surfaces Supplier",
  "Flooring Supplier",
  "Decor supplier",
  "Partition Supplier",
  "Ceiling supplier",
  "Wall Covering Supplier",
  "Kitchen Supplier",
  "AV/IT Supplier",
  "Joinery",
  "Manufacturers",
  "Building Material Supplier",
  "Signage",
  "Technical Services and Installers",
  "Ceilings and Partition Installers",
];

const companies = [
  {
    id: "architect-1",
    name: "Foster + Partners",
    category: "Architects",
    location: "London",
    projects: 250,
    logo: logo,
    cover: "l5Tzv1alcps",
  },
  {
    id: "architect-2",
    name: "Zaha Hadid Architects",
    category: "Architects",
    location: "London",
    projects: 200,
    logo: logo,
    cover: "X48hkTT1qQc",
  },
  {
    id: "architect-3",
    name: "Gensler",
    category: "Architects",
    location: "San Francisco",
    projects: 300,
    logo: logo,
    cover: "8oej2shd2is",
  },
  {
    id: "architect-4",
    name: "Modern Designs Co.",
    category: "Architects",
    location: "New York",
    projects: 150,
    logo: logo,
    cover: "fyARaZSqLhk",
  },
  {
    id: "architect-5",
    name: "Innovative Architects Inc.",
    category: "Architects",
    location: "Chicago",
    projects: 180,
    logo: logo,
    cover: "sN8VbhwjKqM",
  },
  {
    id: "architect-6",
    name: "Sustainable Structures Ltd.",
    category: "Architects",
    location: "Toronto",
    projects: 120,
    logo: logo,
    cover: "MnnAFbkHNvQ",
  },
  {
    id: "interior-1",
    name: "Kelly Wearstler",
    category: "Interior Designer",
    location: "Los Angeles",
    projects: 100,
    logo: logo,
    cover: "yidbLm7q1ZI",
  },
  {
    id: "interior-2",
    name: "Philippe Starck",
    category: "Interior Designer",
    location: "Paris",
    projects: 150,
    logo: logo,
    cover: "_HqHX3LBN18",
  },
  {
    id: "interior-3",
    name: "Nate Berkus Associates",
    category: "Interior Designer",
    location: "Chicago",
    projects: 80,
    logo: logo,
    cover: "fobX0HI9vVo",
  },
  {
    id: "interior-4",
    name: "Elegant Spaces Design",
    category: "Interior Designer",
    location: "New York",
    projects: 90,
    logo: logo,
    cover: "jn7uVeCdf6U",
  },
  {
    id: "interior-5",
    name: "Modern Living Interiors",
    category: "Interior Designer",
    location: "Miami",
    projects: 70,
    logo: logo,
    cover: "OXXsAafHDeo",
  },
  {
    id: "interior-6",
    name: "Luxe Home Designs",
    category: "Interior Designer",
    location: "London",
    projects: 110,
    logo: logo,
    cover: "jUOaONoXJQk",
  },
];

const countCompaniesByCategory = (companies) => {
  return companies.reduce((acc, company) => {
    acc[company.category] = (acc[company.category] || 0) + 1;
    return acc;
  }, {});
};

const HeroSection = ({ onSearch }) => (
  <div className="relative h-[65vh] w-full overflow-hidden">
    <PhotoDisplay
      photoId="G7sE2S4Lab4"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">Discover Amazing Companies</h1>
      <p className="text-xl mb-8">
        Find the perfect company for your next project
      </p>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search companies..."
          className="w-full px-4 py-2 rounded-full text-black"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  </div>
);

const CategoryItem = React.memo(
  ({ href, imgSrc, alt, label, onClick, companyCount }) => {
    return (
      <div className="col">
        <a
          className="text-center group block h-full relative z-10 overflow-hidden rounded-md"
          href={href}
          onClick={onClick}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              alt={alt}
              loading="lazy"
              width={200}
              height={200}
              decoding="async"
              data-nimg={1}
              className="rounded-md w-full h-44 sm:h-56 mx-auto bg-white/10 transition-transform duration-300 group-hover:scale-110 object-cover"
              src={imgSrc}
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-xl font-bold">
                {companyCount} Projects
              </span>
            </div>
          </div>
          <h4 className="sm:text-lg capitalize absolute bottom-4 sm:bottom-5 w-full text-white z-20 tracking-wide px-2">
            {label}
          </h4>
        </a>
      </div>
    );
  }
);

const CompanyCard = React.memo(({ company }) => (
  <Link to={`/company-profile`} className="block">
    <div className="relative w-full h-96 rounded-xl overflow-hidden group">
      <div className="absolute inset-0">
        <PhotoDisplay
          photoId={company.cover}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-16 h-16 object-contain"
            />
          </div>
          <span className="text-white rounded-full text-sm font-bold">
            {company.projects} Projects
          </span>
        </div>

        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <BuildingOffice2Icon className="w-5 h-5 mr-2" />
              <span>{company.category}</span>
            </div>
            <div className="flex items-center">
              <MapIcon className="w-5 h-5 mr-2" />
              <span>{company.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
));

const CompanySection = React.memo(({ category, companies }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? companies : companies.slice(0, 5);

  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{category}</h2>
        {companies.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-theme-color font-bold hover:underline"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-6">
        Discover top {category.toLowerCase()} for your next project. Our curated
        list features industry leaders known for their expertise and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {displayedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
});

const CompanyBrowsing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [visibleCategories, setVisibleCategories] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showLoadButtons, setShowLoadButtons] = useState(categories.length > 6);
  const [companyCounts, setCompanyCounts] = useState({});

  const fuse = useMemo(
    () =>
      new Fuse(companies, {
        keys: ["name", "category", "location"],
        threshold: 0.3,
      }),
    []
  );

  useEffect(() => {
    setCompanyCounts(countCompaniesByCategory(companies));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredCompanies(fuse.search(searchQuery).map((item) => item.item));
    } else if (selectedCategory) {
      setFilteredCompanies(
        companies.filter((company) => company.category === selectedCategory)
      );
    } else {
      setFilteredCompanies(companies);
    }
  }, [searchQuery, selectedCategory, fuse]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleViewMore = () => {
    const newVisibleCategories = Math.min(
      visibleCategories + 6,
      categories.length
    );
    setVisibleCategories(newVisibleCategories);
    setShowLoadButtons(
      newVisibleCategories < categories.length || newVisibleCategories > 6
    );
  };

  const handleLoadLess = () => {
    setVisibleCategories(6);
    setShowLoadButtons(categories.length > 6);
  };
  const categoryHasCompanies = useMemo(() => {
    return (category) =>
      companies.some((company) => company.category === category);
  }, []);

  return (
    <Layout headerType="3">
      <HeroSection onSearch={handleSearch} />

      <section className="px-24 py-16 md:py-24">
        <div className="flex justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold text-theme-color">
              <span className="text-black">Browse by </span> category
            </h2>
            <div className="mt-6 text-center text-sm sm:text-base">
              Get inspired, join the community, and reach the right audience!
              This is your best place to find and collaborate with designers
              from all over the world.
            </div>
          </div>
          {showLoadButtons && (
            <button
              onClick={
                visibleCategories < categories.length
                  ? handleViewMore
                  : handleLoadLess
              }
              className="text-theme-color font-bold hover:underline"
            >
              {visibleCategories < categories.length
                ? "Load More"
                : "Load Less"}
            </button>
          )}
        </div>
        <div className="">
          <AnimatePresence>
            <motion.div
              className="justify-center grid grid-cols-6 gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
                hidden: {},
              }}
            >
              {categories.slice(0, visibleCategories).map((category, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <CategoryItem
                    href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                    imgSrc={
                      [
                        CatImageOne,
                        CatImageTwo,
                        CatImageThree,
                        CatImageFour,
                        CatImageFive,
                      ][index % 5]
                    }
                    alt={category}
                    label={category}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category);
                    }}
                    companyCount={companyCounts[category] || 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {showLoadButtons && (
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={
                  visibleCategories < categories.length
                    ? handleViewMore
                    : handleLoadLess
                }
                className="text-theme-color font-bold hover:underline"
              >
                {visibleCategories < categories.length
                  ? "Load More"
                  : "Load Less"}
              </button>
            </div>
          )}
        </div>
        {selectedCategory
          ? categoryHasCompanies(selectedCategory) && (
              <CompanySection
                key={selectedCategory}
                category={selectedCategory}
                companies={filteredCompanies.filter(
                  (company) => company.category === selectedCategory
                )}
              />
            )
          : filteredCompanies.map((company, index) => (
              <React.Fragment key={company.id}>
                <CompanySection
                  category={company.category}
                  companies={filteredCompanies.filter(
                    (c) => c.category === company.category
                  )}
                />
                {index % 2 === 1 && index < filteredCompanies.length - 1 && (
                  <section className="bg-gray-100 px-4 md:px-24 py-16 mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      Find Your Perfect Match
                    </h2>
                    <div className="max-w-md mx-auto">
                      <input
                        type="text"
                        placeholder="Search companies by name, category, or location..."
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                    </div>
                  </section>
                )}
              </React.Fragment>
            ))}
      </section>
    </Layout>
  );
};

export default CompanyBrowsing;
