import {
  ArrowLeftEndOnRectangleIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import UserProfileImage from "../../assets/images/User Profile/man.jpg";
import UserBackgroundImage from "../../assets/images/Projects/commercials.jpg";
import { ProfilePortfolio } from "./ProfilePortfolio/portfolio";
import { UserPersonalDetails } from "./User Personal Details/personal-details";
import { useState } from "react";
import { UserProfileSettings } from "./Profile Settings/settings";
import { SocialProfiles } from "./User Social Profiles/social";
import { Layout } from "../../components/layout/layout";
export const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <Layout headerType="2">
      <div className="relative px-3 container-fluid">
        <div className="layout-specing">
          <div className="grid grid-cols-1 -mt-[6.3rem]">
            <div className="relative overflow-hidden text-transparent rounded-md shadow profile-banner">
              <input
                id="pro-banner"
                name="profile-banner"
                type="file"
                className="hidden"
              />
              <div className="relative shrink-0">
                <img
                  src={UserBackgroundImage}
                  className="object-cover w-full h-[50vh]"
                  id="profile-banner"
                  alt=""
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <label
                  className="absolute inset-0 cursor-pointer"
                  htmlFor="pro-banner"
                ></label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="mx-6 xl:col-span-3 lg:col-span-4 md:col-span-4">
              <div className="relative p-6 -mt-48 bg-white rounded-md shadow">
              <div className="mb-5 text-center profile-pic">
              <input
                id="pro-img"
                name="profile-image"
                type="file"
                className="hidden"
                onChange="loadFile(event)"
              />
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
                    <img
                      src={UserProfileImage}
                      className="object-cover w-full h-full shadow"
                      id="profile-image"
                      alt="User Profile"
                    />
                  </div>
                  <label
                    className="absolute inset-0 cursor-pointer"
                    htmlFor="pro-img"
                  ></label>
                </div>
            
                <div className="mt-4">
                  <h5 className="text-lg font-semibold">Cristina Murfy</h5>
                  <p className="text-slate-400">cristina@hotmail.com</p>
                </div>
              </div>
            </div>

                <div className="border-t border-gray-100">
                  <ul
                    className="mt-3 mb-0 list-none sidebar-nav"
                    id="navmenu-nav"
                  >
                    <li className="navbar-item account-menu">
                      <a
                        href="#"
                        className="flex items-center py-2 rounded navbar-link text-slate-400"
                        onClick={() => setActiveSection("profile")}
                      >
                        <span className="me-2 text-[18px] mb-0">
                          <UserCircleIcon className="w-6 text-theme-color" />
                        </span>
                        <h6 className="mb-0 font-semibold">Profile</h6>
                      </a>
                    </li>

                    <li className="navbar-item account-menu">
                      <a
                        href="#"
                        className="flex items-center py-2 rounded navbar-link text-slate-400"
                        onClick={() => setActiveSection("social")}
                      >
                        <span className="me-2 text-[18px] mb-0">
                          <DevicePhoneMobileIcon className="w-6 text-theme-color" />
                        </span>
                        <h6 className="mb-0 font-semibold">Social Profile</h6>
                      </a>
                    </li>

                    <li className="navbar-item account-menu">
                      <a
                        href="#"
                        className="flex items-center py-2 rounded navbar-link text-slate-400"
                        onClick={() => setActiveSection("settings")}
                      >
                        <span className="me-2 text-[18px] mb-0">
                          <Cog6ToothIcon className="w-6 text-theme-color" />
                        </span>
                        <h6 className="mb-0 font-semibold">Settings</h6>
                      </a>
                    </li>

                    <li className="navbar-item account-menu">
                      <a
                        href="auth-lock-screen.html"
                        className="flex items-center py-2 rounded navbar-link text-slate-400"
                      >
                        <span className="me-2 text-[18px] mb-0">
                          <ArrowLeftEndOnRectangleIcon className="w-6 text-theme-color" />
                        </span>
                        <h6 className="mb-0 font-semibold">Sign Out</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-left xl:col-span-9 lg:col-span-8 md:col-span-8">
              <div className="grid grid-cols-1 gap-6">
                {activeSection === "profile" && (
                  <div className="relative p-6 bg-white rounded-md shadow">
                    <h5 className="text-xl font-semibold">Cristina Murfy</h5>

                    <p className="mt-3 text-black">
                      i am a visionary architect renowned for her innovative
                      approach to interior design and sustainable architecture.
                      With a career spanning over two decades, she has
                      established herself as a leading figure in the industry,
                      blending creativity with functionality to create spaces
                      that inspire and endure. Her work is characterized by a
                      commitment to ecological responsibility, cutting-edge
                      technology, and a deep understanding of the human
                      experience in built environments. Cristina's portfolio
                      includes a diverse array of projects, from luxurious
                      residential interiors to groundbreaking commercial
                      developments, all reflecting her unique design philosophy
                      and meticulous attention to detail..
                    </p>
                  </div>
                )}
                {activeSection === "profile" && <UserPersonalDetails />}
                {activeSection === "profile" && <ProfilePortfolio />}
                {activeSection === "social" && <SocialProfiles />}
                {activeSection === "settings" && <UserProfileSettings />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
