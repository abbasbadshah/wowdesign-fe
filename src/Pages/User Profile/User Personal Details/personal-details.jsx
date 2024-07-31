import {
  BookmarkIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { UserCompanies } from "../User Companies/companies";

// Import social media icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const UserPersonalDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div>
        <div className="relative p-6 bg-white rounded shadow h-fit mb-6">
          <h5 className="text-xl font-semibold">Personal Details :</h5>
          <div className="mt-6">
            {/*
            <div className="flex items-center">
              <EnvelopeIcon className="w-6 text-theme-color me-3" />
              <div className="flex-1">
                <h6 className="mb-0 font-medium text-theme-color">Email :</h6>
                <a href="" className="text-slate-400">
                  cristina@hotmail.com
                </a>
              </div>
            </div>
            */}
            <div className="flex items-center mt-3">
              <BookmarkIcon className="w-6 text-theme-color me-2" />
              <div className="flex-1">
                <h6 className="mb-0 font-medium text-theme-color">
                  Category :
                </h6>
                <a href="" className="text-slate-400">
                  Architecture
                </a>
                ,{" "}
                <a href="" className="text-slate-400">
                  Supplier
                </a>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <GlobeAltIcon className="w-6 text-theme-color me-2" />
              <div className="flex-1">
                <h6 className="mb-0 font-medium text-theme-color">Website :</h6>
                <a href="" className="text-slate-400">
                  www.cristina.com
                </a>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <MapPinIcon className="w-6 text-theme-color me-2" />
              <div className="flex-1">
                <h6 className="mb-0 font-medium text-theme-color">
                  Location :
                </h6>
                <a href="" className="text-slate-400">
                  30, Cluster S, Dubai, United Arab Emirates
                </a>
              </div>
            </div>
            {/*
              <div className="flex items-center mt-3">
              <PhoneIcon className="w-6 text-theme-color me-2" />
              <div className="flex-1">
                <h6 className="mb-0 font-medium text-theme-color">
                  Contact No :
                </h6>
                <a href="" className="text-slate-400">
                  +9714-2674696
                </a>
              </div>
            </div>
            */}
          </div>
        </div>

        {/* Social Media Card */}
        <div className="relative p-6 bg-white rounded shadow h-fit">
          <h5 className="text-xl font-semibold mb-4">Social Media :</h5>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center p-3 rounded-lg bg-[#FBF5EE] hover:bg-[#EFD8BD] transition-colors"
            >
              <FaFacebook className="text-blue-600 text-xl mr-3" />
              <span className="text-slate-600">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg bg-[#FBF5EE] hover:bg-[#EFD8BD] transition-colors"
            >
              <FaTwitter className="text-blue-400 text-xl mr-3" />
              <span className="text-slate-600">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg bg-[#FBF5EE] hover:bg-[#EFD8BD] transition-colors"
            >
              <FaLinkedin className="text-blue-700 text-xl mr-3" />
              <span className="text-slate-600">LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-lg bg-[#FBF5EE] hover:bg-[#EFD8BD] transition-colors"
            >
              <FaInstagram className="text-pink-600 text-xl mr-3" />
              <span className="text-slate-600">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <UserCompanies />
    </div>
  );
};
