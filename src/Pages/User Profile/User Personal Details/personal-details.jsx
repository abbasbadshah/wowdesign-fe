import {
  BookmarkIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { UserCompanies } from "../User Companies/companies";

export const UserPersonalDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative p-6 bg-white rounded shadow h-fit">
        <h5 className="text-xl font-semibold">Personal Details :</h5>
        <div className="mt-6">
          <div className="flex items-center">
            <EnvelopeIcon className="w-6 text-theme-color me-3" />
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Email :</h6>
              <a href="" className="text-slate-400">
                cristina@hotmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <BookmarkIcon className="w-6 text-theme-color me-2" />
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Category :</h6>
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
           <LanguageIcon className="w-6 text-theme-color me-2"/>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Language :</h6>
              <a href="" className="text-slate-400">
                English
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                Arabic
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
              <h6 className="mb-0 font-medium text-theme-color">Location :</h6>
              <a href="" className="text-slate-400">
                30, Cluster S, Dubai, United Arab Emirates
              </a>
            </div>
          </div>
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
        </div>
      </div>
      <UserCompanies />
    </div>
  );
};
