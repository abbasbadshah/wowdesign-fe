import { BookmarkIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
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
              <h6 className="mb-0 font-medium text-theme-color">Skills :</h6>
              <a href="" className="text-slate-400">
                html
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                css
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                js
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                mysql
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <i
              data-feather="italic"
              className="fea icon-ex-md text-slate-400 me-3"
            ></i>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Language :</h6>
              <a href="" className="text-slate-400">
                English
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                Japanese
              </a>
              ,{" "}
              <a href="" className="text-slate-400">
                Chinese
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <i
              data-feather="globe"
              className="fea icon-ex-md text-slate-400 me-3"
            ></i>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Website :</h6>
              <a href="" className="text-slate-400">
                www.cristina.com
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <i
              data-feather="gift"
              className="fea icon-ex-md text-slate-400 me-3"
            ></i>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Birthday :</h6>
              <p className="mb-0 text-slate-400">2nd March, 1996</p>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <i
              data-feather="map-pin"
              className="fea icon-ex-md text-slate-400 me-3"
            ></i>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Location :</h6>
              <a href="" className="text-slate-400">
                Beijing, China
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <i
              data-feather="phone"
              className="fea icon-ex-md text-slate-400 me-3"
            ></i>
            <div className="flex-1">
              <h6 className="mb-0 font-medium text-theme-color">Cell No :</h6>
              <a href="" className="text-slate-400">
                (+12) 1254-56-4896
              </a>
            </div>
          </div>
        </div>
      </div>
      <UserCompanies />
    </div>
  );
};
