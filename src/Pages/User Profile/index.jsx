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
                    onchange="loadFile(event)"
                  />
                  <div>
                    <div className="relative mx-auto size-48">
                      <img
                        src={UserProfileImage}
                        className="rounded-full shadow"
                        id="profile-image"
                        alt=""
                      />
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
                      I have started my career as a trainee and proved myself
                      and achieved all the milestones with good guidance and
                      reached up to the project manager. In this journey, I
                      understood all the procedures which made me a good
                      developer, team leader, and project manager.
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
