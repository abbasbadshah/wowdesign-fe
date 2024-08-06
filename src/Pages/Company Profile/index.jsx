import React, { useState } from "react";
import { Layout } from "../../components/layout/layout";
import BannerImage from "../../assets/images/Projects/hospitality.jpeg";
import GalleryImageOne from "../../assets/images/Projects/hospitality.jpeg";
import GalleryImageTwo from "../../assets/images/Projects/commercials.jpg";
import GalleryImageThree from "../../assets/images/Projects/hospitality.jpeg";
import GalleryImageFour from "../../assets/images/Projects/resdentials.jpg";
import GalleryImageFive from "../../assets/images/Projects/restaurant.jpg";
import GalleryImageSix from "../../assets/images/Projects/commercials.jpg";
import { CompanyProjects } from "./Company Projects/projects";
import { CompanyProducts } from "./Company Products/products";
import CompanyBrochure from "./Company Broucher";
import HeroProjectImage from "../../assets/images/Projects/resdentials.jpg";
import { Link } from "react-router-dom";
import { PencilIcon, PlayIcon } from "@heroicons/react/24/outline";
import CompanyLogo from "../../assets/images/Company/browsing/logo/logo2.avif";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
import { SimiliarCompanies } from "./Similiar Company";
import { ImageGalleryStyleTwo } from "../../components/shared";

export const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const imageIds = [
    GalleryImageOne,
    GalleryImageTwo,
    GalleryImageThree,
    GalleryImageFour,
    GalleryImageFive,
    GalleryImageSix,
  ];
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

      {/* Main content */}
      <div className="flex px-6 py-10 lg:px-24 justify-between gap-5 lg:gap-8 xl:gap-12 4xl:gap-16">
        <div className="w-full">
          <section>
            <div className="agent-content">
              <div className="w-full">
                {/* Tabs */}
                <div className="">
                  <div className="flex justify-start space-x-8 py-4">
                    {["Overview", "Projects", "Products", "Brochure"].map(
                      (tab) => (
                        <button
                          key={tab}
                          className={`text-lg font-medium ${
                            activeTab === tab
                              ? "text-primary border-b-2 border-black"
                              : "text-black"
                          }`}
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Tab Content */}
                {activeTab === "Overview" && (
                  <div>
                    <section className="">
                      <div className="">
                        <div className="agent-content">
                          <div className="agent-about">
                            <h2 className="md:text-h2 font-bold text-gray-dark mt-10 !text-2xl uppercase !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl">
                              About Company
                            </h2>
                            <p className="text-gray-dark text-sm md:text-base !text-base !leading-7 !text-secondary mt-2 text-justify">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum. Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.
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
                    <ImageGalleryStyleTwo images={imageIds} />
                  </div>
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
            </div>
          </section>
        </div>
        <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg -mt-[15rem] z-10">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800">Company Name</h2>
              <p className="text-sm text-gray-500">Category Name</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Products</span>
                <span className="font-semibold text-gray-800">164</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Projects</span>
                <span className="font-semibold text-red-600">45</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Location</span>
                <span className="font-semibold text-gray-800">Dubai, UAE</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Category</span>
                <span className="font-semibold text-gray-800">Commercials</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Year of Establishment</span>
                <span className="font-semibold text-gray-800">2017</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Companies Involved</span>
                <span className="font-semibold text-gray-800">12</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Value</span>
                <span className="font-semibold text-gray-800">$500M</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Employees</span>
                <span className="font-semibold text-gray-800">5,000</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Executive Team
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600">John Doe - CEO</li>
                <li className="text-gray-600">Jane Smith - CFO</li>
                <li className="text-gray-600">Mike Johnson - CTO</li>
                <li className="text-gray-600">Sarah Brown - COO</li>
              </ul>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <FaShareAlt className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8">
              <Link
                to={"/dashboard"}
                className="flex gap-2 justify-center items-center text-theme-color font-semibold"
              >
                Submit Projects <PencilIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SimiliarCompanies />
    </Layout>
  );
};
