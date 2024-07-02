import image1 from "../../../assets/images/Projects/commercials.jpg";
import image2 from "../../../assets/images/Projects/healthcare.jpg";
import image3 from "../../../assets/images/Projects/hospitality.jpeg";
import image4 from "../../../assets/images/Projects/restaurant.jpg";
import image5 from "../../../assets/images/Projects/resdentials.jpg";
import image6 from "../../../assets/images/Projects/ud.jpeg";
import { CameraIcon } from "@heroicons/react/24/solid";
export const ProfilePortfolio = () => {
  return (
    <div className="relative p-6 bg-white rounded shadow">
      <h5 className="text-xl font-semibold">Cristina Murfy Projects :</h5>

      <div className="grid gap-6 mt-6 lg:grid-cols-3 md:grid-cols-2">
        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image1}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image1}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 rounded-full bg-theme-color border-themetext-theme-color size-9 lightbox"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>

        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image2}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image2}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 border rounded-full bg-theme-color size-9"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>

        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image3}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image3}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 border rounded-full bg-theme-color size-9"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>

        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image4}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image4}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 border rounded-full bg-theme-color size-9"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>

        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image5}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image5}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 border rounded-full bg-theme-color size-9"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>

        <div className="relative block overflow-hidden duration-500 rounded-md group">
          <img
            src={image6}
            className="h-full duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3"
            alt=""
          />
          <div className="absolute z-0 duration-500 rounded-md inset-2 group-hover:bg-slate-900/90"></div>

          <div className="duration-500 content">
            <div className="absolute z-10 duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
              <a
                href={image6}
                className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle duration-500 border rounded-full bg-theme-color size-9"
              >
                <CameraIcon className="w-4 text-white" />
              </a>
            </div>

            <div className="absolute z-10 duration-500 opacity-0 group-hover:opacity-100 bottom-6 start-6">
              <a
                href="portfolio-detail-three.html"
                className="text-lg font-medium text-white duration-500 ease-in-out h6 hover:text-theme-color"
              >
                Mockup Collection
              </a>
              <p className="mb-0 text-slate-400">Abstract</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
