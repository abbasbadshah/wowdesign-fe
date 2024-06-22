import React from "react";
import { Link } from "react-router-dom";
import featureImage1 from "../../../../assets/images/Projects/Project Details/image.webp";

const portfolios = [
  {
    id: 1,
    image: featureImage1,
    name: "Hill View",
    link: "#"
  },
  {
    id: 2,
    image: featureImage1,
    name: "City Garden",
    link: "#"
  },
  {
    id: 3,
    image: featureImage1,
    name: "Park City",
    link: "#"
  },
  {
    id: 4,
    image: featureImage1,
    name: "New City",
    link: "#"
  }
];

export const FeaturePorfolios = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col px-6 lg:px-24">
        <h2 className="text-4xl font-medium text-left mb-10">Wow portfolios</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="relative overflow-hidden group">
              <img src={portfolio.image} alt="" />
              <div className="absolute bottom-0 inset-x-0 m-2">
                <div className="p-4 bg-white">
                  <h2 className="text-xl font-medium mb-1 text-center">{portfolio.name}</h2>
                </div>
              </div>
              <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                <div className="p-3">
                  <Link to={portfolio.link}>
                    <div className="py-2 w-full flex items-center justify-center rounded-md text-white hover:text-theme-color border-theme-color border-2 bg-theme-color hover:bg-white transition-all duration-500">
                      View Portfolio
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
