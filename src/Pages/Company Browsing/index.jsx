import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import BGImage from "../../assets/images/Projects/hospitality.jpeg";
import Avatar from "../../assets/images/User Profile/man.jpg";
import LogoOne from "../../assets/images/Company/browsing/logo/logo1.avif";
import LogoTwo from "../../assets/images/Company/browsing/logo/logo2.avif";
import LogoThree from "../../assets/images/Company/browsing/logo/logo3.avif";
import LogoFour from "../../assets/images/Company/browsing/logo/logo4.avif";
import BGImageOne from "../../assets/images/Company/browsing/background/company browsing (1).jpg"
import BGImageTwo from "../../assets/images/Company/browsing/background/company browsing (2).jpg"
import BGImageThree from "../../assets/images/Company/browsing/background/company browsing (3).jpg"
import BGImageFrour from "../../assets/images/Company/browsing/background/company browsing (4).jpg"
import BGImageFive from "../../assets/images/Company/browsing/background/company browsing (5).jpg"
import BGImageSix from "../../assets/images/Company/browsing/background/company browsing (6).jpg"
import BGImageSeven from "../../assets/images/Company/browsing/background/company browsing (7).jpg"
import BGImageEight from "../../assets/images/Company/browsing/background/company browsing 8.jpg"
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { NewsletterCTA, BreadcrumbComponent } from "../../components/shared";
import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentDuplicateIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const categoryData = [
  {
    title: "Civil Engineer",
    image: BGImage,
    link: "/civil-engineer",
    listings: [
      {
        name: "Engineering Co. 1",
        category: "Civil Engineering",
        location: "New York, NY 10001",
        projects: 15,
        image: BGImageOne,
        logo: LogoThree,
      },
      {
        name: "BuildWell Inc.",
        category: "Civil Engineering",
        location: "Los Angeles, CA 90001",
        projects: 22,
        image: BGImageTwo,
        logo: LogoOne,
      },
      {
        name: "StructurePro",
        category: "Civil Engineering",
        location: "Chicago, IL 60601",
        projects: 18,
        image: BGImageThree,
        logo: LogoTwo,
      },
      {
        name: "Urban Planners Ltd.",
        category: "Civil Engineering",
        location: "Houston, TX 77001",
        projects: 25,
        image: BGImageFrour,
        logo: LogoThree,
      },
      {
        name: "Indore Planners Ltd.",
        category: "Civil Engineering",
        location: "Houston, TX 77001",
        projects: 25,
        image: BGImageFive,
        logo: LogoOne,
      },
    ],
  },
  {
    title: "Sanitaryware Suppliers",
    image: BGImageOne,
    link: "/sanitaryware-suppliers",
    listings: [
      {
        name: "CleanPipes Ltd.",
        category: "Sanitaryware",
        location: "Chicago, IL 60601",
        projects: 8,
        image: BGImageTwo,
        logo: LogoThree,
      },
      {
        name: "ModernBath Co.",
        category: "Sanitaryware",
        location: "Miami, FL 33101",
        projects: 12,
        image: BGImageThree,
        logo: LogoTwo,
      },
      {
        name: "HygieneFirst",
        category: "Sanitaryware",
        location: "Seattle, WA 98101",
        projects: 10,
        image: BGImageOne,
        logo: LogoFour,
      },
    ],
  },
  {
    title: "Interior Designers",
    image: BGImageSeven,
    link: "/interior-designers",
    listings: [
      {
        name: "Elegant Interiors",
        category: "Interior Design",
        location: "New York, NY 10001",
        projects: 30,
        image: BGImageSeven,
        logo: LogoOne,
      },
      {
        name: "ModernSpace Designs",
        category: "Interior Design",
        location: "San Francisco, CA 94101",
        projects: 25,
        image: BGImageSeven,
        logo: LogoTwo,
      },
      {
        name: "Cozy Home Creators",
        category: "Interior Design",
        location: "Boston, MA 02101",
        projects: 20,
        image: BGImageSeven,
        logo: LogoThree,
      },
    ],
  },
  {
    title: "Fit-Out Contractors",
    image: BGImage,
    link: "/fit-out-contractors",
    listings: [
      {
        name: "Office Transformers",
        category: "Fit-Out",
        location: "Chicago, IL 60601",
        projects: 15,
        logo: Avatar,
      },
      {
        name: "Retail Space Experts",
        category: "Fit-Out",
        location: "Los Angeles, CA 90001",
        projects: 18,
        logo: Avatar,
      },
    ],
  },
  {
    title: "Surfaces Suppliers",
    image: BGImage,
    link: "/surfaces-suppliers",
    listings: [
      {
        name: "Marble Masters",
        category: "Surfaces",
        location: "Houston, TX 77001",
        projects: 22,
        logo: Avatar,
      },
      {
        name: "Granite Gurus",
        category: "Surfaces",
        location: "Phoenix, AZ 85001",
        projects: 20,
        logo: Avatar,
      },
    ],
  },
  {
    title: "Furniture Suppliers",
    image: BGImage,
    link: "/furniture-suppliers",
    listings: [
      {
        name: "Modern Office Furniture",
        category: "Furniture",
        location: "Seattle, WA 98101",
        projects: 28,
        logo: Avatar,
      },
      {
        name: "Ergonomic Solutions",
        category: "Furniture",
        location: "Denver, CO 80201",
        projects: 25,
        logo: Avatar,
      },
    ],
  },
];

export const CompanyBrowsing = () => {
  const scrollContainerRef = useRef(null);
  const [state, setState] = useState({
    showLeftArrow: false,
    showRightArrow: true,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const [searchResults, setSearchResults] = useState(categoryData);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setState((prevState) => ({
        ...prevState,
        showLeftArrow: container.scrollLeft > 0,
        showRightArrow:
          container.scrollLeft < container.scrollWidth - container.clientWidth,
      }));
    };

    const handleWheel = (e) => {
      if (container.contains(e.target)) {
        e.preventDefault();
        const cardWidth = container.offsetWidth;
        const scrollAmount = Math.sign(e.deltaY) * cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction * container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    setState((prevState) => ({
      ...prevState,
      isDragging: true,
      startX: e.pageX - scrollContainerRef.current.offsetLeft,
      scrollLeft: scrollContainerRef.current.scrollLeft,
    }));
  };

  const handleMouseUp = () => {
    setState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseMove = (e) => {
    if (!state.isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - state.startX) * 2;
    scrollContainerRef.current.scrollLeft = state.scrollLeft - walk;
  };

  const handleCategoryClick = (category) => {
    const section = document.getElementById(
      category.title.replace(/\s+/g, "-")
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm.trim() === "") {
      setSearchResults(categoryData);
      return;
    }

    const options = {
      includeScore: true,
      keys: ["title", "listings.name", "listings.category"],
    };

    const fuse = new Fuse(categoryData, options);
    const results = fuse.search(searchTerm).map((result) => result.item);

    setSearchResults(results);
  };

  const renderCategoryCard = (category, index) => (
    <div
      key={index}
      onClick={() => handleCategoryClick(category)}
      className="flex-shrink-0 bg-white rounded-md shadow snap-center w-full min-w-full sm:min-w-[calc(50%-12px)] sm:w-[calc(50%-12px)] lg:min-w-[300px] lg:w-[300px] cursor-pointer"
    >
      <div className="relative">
        <img
          src={category.image}
          className="object-cover w-full rounded h-72"
          alt={category.title}
        />
        <div className="absolute inset-x-0 bottom-0 top-auto p-2">
          <div className="p-4 rounded-md bg-white/50 backdrop-blur-xl">
            <div className="text-center text-white">
              <h4 className="text-lg font-semibold text-black">
                {category.title}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompanyCard = (company) => (
    <div key={company.name} className="text-center bg-white rounded shadow">
      <Link to={"/company-profile"}>
        <img
          src={company.image}
          alt=""
          className="w-full h-72 object-cover rounded-t"
          style={{ minWidth: '325px', maxWidth: '325px' }}
        />
        <img
          src={company.logo}
          alt="company logo"
          className="object-fill mx-auto rounded shadow-md"
          style={{ width: '112px', height: '112px', marginTop: '-3.5rem' }}
        />
        <div className="p-7">
          <h3 className="mb-2 text-xl font-bold">{company.name}</h3>
          <span className="flex items-center justify-center gap-2 mt-4">
            <BuildingOffice2Icon className="w-6 text-black" />
            <p>{company.category}</p>
          </span>
          <span className="flex items-center justify-center gap-2 mt-4">
            <MapIcon className="w-6 text-black" />
            <p>{company.location}</p>
          </span>
          <span className="flex items-center justify-center gap-2 mt-4">
            <DocumentDuplicateIcon className="w-6 text-black" />
            <p>{company.projects} Projects</p>
          </span>
        </div>
      </Link>
    </div>
  );
  

  return (
    <Layout Classes={"mb-24"}>
      <BreadcrumbComponent
        title="Company Browsing"
        breadcrumb={["Company Browsing"]}
        bgImage={BGImage}
      />

      {/* Category Listing Section */}
      <section className="py-28">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-5xl font-bold text-theme-color">
            Wow Communities
          </h2>
          <p className="mt-4 text-base font-medium text-black">
            Get inspired, join the community, and reach the right audience! This
            is your best place to find and collaborate with designers from all
            over the world.
          </p>
        </div>
        <div className="relative px-6 lg:px-24 mt-14">
          <div
            ref={scrollContainerRef}
            className="flex pb-4 space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {categoryData.map(renderCategoryCard)}
          </div>
          {state.showLeftArrow && (
            <button
              onClick={() => scroll(-1)}
              className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md left-2 top-1/2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
          {state.showRightArrow && (
            <button
              onClick={() => scroll(1)}
              className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md right-2 top-1/2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Let's find more that brings us together.
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label
                className="relative flex flex-col items-center justify-center max-w-2xl gap-2 px-2 py-2 mt-8 bg-white border shadow-2xl min-w-sm md:flex-row rounded-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="your keyword here"
                  name="q"
                  className="flex-1 w-full px-6 py-2 bg-white border-0 rounded outline-none focus:border-0"
                  required=""
                  onChange={handleSearch}
                />
                <button
                  type="submit"
                  className="relative w-full px-6 py-3 overflow-hidden text-white transition-all duration-100 border md:w-auto bg-theme-color border-theme-color fill-white active:scale-95 will-change-transform rounded-xl"
                >
                  <div className="flex items-center transition-all opacity-1">
                    <span className="mx-auto text-sm font-semibold truncate whitespace-nowrap">
                      Search
                    </span>
                  </div>
                </button>
              </label>
            </form>
          </div>
        </div>
      </section>

      {/* Category Items and Their Subitems Listing Section */}
      {searchResults.map((category) => (
        <section
          key={category.title}
          id={category.title.replace(/\s+/g, "-")}
          className="px-6 mt-24 lg:px-24"
        >
          <div className="">
            <h2 className="text-3xl font-bold text-theme-color">
              {category.title}
            </h2>
            <p className="mt-4 text-base font-medium text-black">
              Get inspired, join the community, and reach the right audience!
              This is your best place to find and collaborate with{" "}
              {category.title.toLowerCase()} from all over the world.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="grid gap-6 lg:grid-cols-5">
              {category.listings.map(renderCompanyCard)}
            </div>
          </div>
        </section>
      ))}

      <NewsletterCTA />
    </Layout>
  );
};
