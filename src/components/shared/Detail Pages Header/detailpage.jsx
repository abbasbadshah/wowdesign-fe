import HeroProjectImage from "../../../assets/images/Projects/Project Details/projectimage1.webp";

export const DetailPageBreadCrumb = ({ title, authorName }) => {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden -mt-[4.5rem] lg:-mt-[7.2rem]">
      <img
        src={HeroProjectImage}
        alt="Project Hero"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-end px-16 pb-32">
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-2">
          {title}
        </h1>
        <h3 className="text-xl font-bold text-white">
          - Project by {authorName}
        </h3>
      </div>
    </div>
  );
};
