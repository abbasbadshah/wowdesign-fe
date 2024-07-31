import facebookimg from "../../../assets/images/User Profile/companies/facebook-logo-2019.png";
import CircleCi from "../../../assets/images/User Profile/companies/circle-logo.png";
import spotify from "../../../assets/images/User Profile/companies/spotify.png";
export const UserCompanies = () => {
  return (
    <div className="relative p-6 bg-white rounded-md shadow h-fit">
      <h5 className="text-xl font-semibold">Companies :</h5>

      <div className="flex items-center p-4 mt-6 duration-500 ease-in-out bg-white rounded-md shadow-md hover:scale-105 hover:shadow-md">
        <img
          src={CircleCi}
          className="w-16 h-16 p-4 rounded-md shadow bg-slate-50 "
          alt=""
        />
        <div className="flex-1 content ms-4">
          <h4 className="text-lg text-medium">Foster + Partners</h4>
          <p className="mb-0 text-slate-400">
            <a href="" className="text-theme-color">
              Architecture and Interior Design
            </a>{" "}
            @London, UK
          </p>
        </div>
      </div>

      <div className="flex items-center p-4 mt-6 duration-500 ease-in-out bg-white rounded-md shadow-md hover:scale-105 hover:shadow-md">
        <img
          src={facebookimg}
          className="w-16 h-16 p-4 rounded-md shadow bg-slate-50"
          alt=""
        />
        <div className="flex-1 content ms-4">
          <h4 className="text-lg text-medium">Zaha Hadid Architects</h4>
          <p className="mb-0 text-slate-400">
            <a href="" className="text-theme-color">
              Architecture and Interior Design
            </a>{" "}
            @Dubai United Arab Emirates
          </p>
        </div>
      </div>

      <div className="flex items-center p-4 mt-6 duration-500 ease-in-out bg-white rounded-md shadow-md hover:scale-105 hover:shadow-md">
        <img
          src={spotify}
          className="w-16 h-16 p-4 rounded-md shadow bg-slate-50 "
          alt=""
        />
        <div className="flex-1 content ms-4">
          <h4 className="text-lg text-medium">Herman Miller</h4>
          <p className="mb-0 text-slate-400">
            <a href="" className="text-theme-color">
              Manufacturing (Furniture and Interior Products)
            </a>{" "}
            @Perth, Australia
          </p>
        </div>
      </div>
    </div>
  );
};