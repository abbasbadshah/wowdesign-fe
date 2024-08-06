import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import BannerImage from "../../assets/images/Projects/hospitality.jpeg";
import { CompanyProjects } from "./Company Projects/projects";
import { CompanyProducts } from "./Company Products/products";
import CompanyBrochure from "./Company Broucher";
import HeroProjectImage from "../../assets/images/Projects/resdentials.jpg";
import { Link } from "react-router-dom";
import { PencilIcon, PlayIcon, ShareIcon } from "@heroicons/react/24/outline";
import CompanyLogo from "../../assets/images/Company/companylistingDummylogo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SimiliarCompanies } from "./Similiar Company";

export const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const tabsRef = useRef(null);
  const [tabsTop, setTabsTop] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (tabsRef.current) {
        const rect = tabsRef.current.getBoundingClientRect();
        setTabsTop(rect.top);
        setIsSticky(rect.top <= 0);
      }
      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };
    const originalTop = tabsRef.current?.offsetTop;
    setTabsTop(originalTop);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <Layout>
      <div
        className="relative h-[65vh] bg-cover bg-center -mt-[6.5rem]"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top-center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full">
          <div className="absolute bottom-0 left-0 p-6 text-white px-6 lg:px-24">
            <p className="text-white font-medium text-base">Category Name</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Company Name
            </h1>
            <button className="gap-2 bg-white text-black px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      {/* Sticky Tab Section */}
      <div ref={tabsRef}>
        <div
          className={`bg-white transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-0 right-0 border-t-2 z-[99] shadow-md border-gray-500"
              : "relative"
          }`}
        >
          <div className="px-6 lg:px-24">
            <div className="flex justify-start space-x-8 py-4">
              {["Overview", "Projects", "Products", "Brochure"].map((tab) => (
                <button
                  key={tab}
                  className={`text-lg font-medium ${
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isSticky && (
        <div style={{ height: tabsRef.current?.offsetHeight }}></div>
      )}
      {/* Main content */}
      <div className="flex px-6 py-10 lg:px-24 justify-between gap-5 lg:gap-8 xl:gap-12 4xl:gap-16">
        <div className="w-full">
          {activeTab === "Overview" && (
            <section>
              {/* Existing content for Overview */}
              <div className="agent-content">
                <div className="w-full">
                  <section className="">
                    <div className="">
                      <div className="agent-content">
                        <div className="agent-about">
                          <h2 className="md:text-h2 font-bold text-gray-dark mt-2 !text-2xl uppercase !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl">
                            About Company
                          </h2>
                          <p className="text-gray-dark text-sm md:text-base !text-base !leading-7 !text-secondary mt-2 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="py-5 xl:py-7">
                    <div className="flex justify-between capitalize">
                      <div>
                        <h2 className="md:text-h2 font-bold text-gray-dark mt-2 !text-2xl uppercase !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl">
                          Visuals
                        </h2>
                      </div>
                    </div>
                    <div
                      className="mt-5 relative flex items-center justify-center w-full h-[550px] col-span-6 overflow-hidden rounded"
                      style={{
                        backgroundImage: `url(${HeroProjectImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <PlayIcon className="w-24 text-white z-10" />
                      <div className="absolute inset-0 bg-black bg-gradient-to-b opacity-30 to-transparent" />
                    </div>
                  </section>
                </div>
              </div>
            </section>
          )}
          {activeTab === "Projects" && (
            <section>
              <CompanyProjects />
            </section>
          )}
          {activeTab === "Products" && (
            <section>
              <CompanyProducts />
            </section>
          )}
          {activeTab === "Brochure" && (
            <section>
              <CompanyBrochure />
            </section>
          )}
        </div>
        {/* Sidebar */}
        <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg">
          <div className="sticky top-32 4xl:top-40">
            <div
              noValidate=""
              className="rounded-xl border border-gray-lighter bg-white p-8 shadow-card"
            >
              <div className="flex justify-between items-center">
                <img
                  src={CompanyLogo}
                  className="w-full object-cover rounded-full"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
              <ul className="mt-3 xl:mt-5">
                <li className="flex items-center justify-between py-1.5 text-lg capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Total Products</span>
                  <span className="font-bold">164</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-lg capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Total Projects</span>
                  <span className="font-bold text-red">45</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-lg capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Location </span>
                  <span className="font-bold">Dubai, UAE</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-lg capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Category</span>
                  <span className="font-bold">Commercials</span>
                </li>
                <li className="flex items-center justify-between py-1.5 text-lg capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                  <span className="font-normal">Year of Establishment</span>
                  <span className="font-bold">2017</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 w-full text-center 4xl:mt-8"></div>
            <div className="flex justify-center mt-3">
              <button className="flex gap-2 justify-center items-center bg-theme-color text-black font-bold w-48 h-12 text-center rounded">
                Share <ShareIcon className="w-4" />
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <Link
                to={"/dashboard"}
                className="flex gap-2 justify-center items-center bg-theme-color text-black font-bold w-48 h-12 text-center rounded"
              >
                Submit Projects <PencilIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SimiliarCompanies />
    </Layout>
  );
};
