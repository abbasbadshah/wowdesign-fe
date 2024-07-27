import { PlayIcon } from "@heroicons/react/24/outline";
import HeroProjectImage from "../../../../assets/images/Projects/Project Details/projectimage1.webp";
export const ProjectLocationMap = () => {
  return (
    <section className="py-5 xl:py-7">
      <header className="flex justify-between capitalize">
        <div>
          <h2 className="md:text-h2 font-bold text-gray-dark text-xl md:!text-[22px] 2xl:!text-2xl mb-2">
            Visuals
          </h2>
        </div>
      </header>
      <div
        className="mt-5 relative flex items-center justify-center w-full h-[550px] col-span-6 overflow-hidden rounded"
        style={{
          backgroundImage:
            `url(${HeroProjectImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
      <PlayIcon className="w-24 text-white z-10"/>
        <div className="absolute inset-0 bg-black bg-gradient-to-b opacity-30 to-transparent" />
      </div>
    </section>
  );
};
