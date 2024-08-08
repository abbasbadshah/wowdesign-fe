import React from "react";
import { Link } from "react-router-dom";
import AcousticImage from "../../../../assets/images/Portfolios/SoundScape Panels.jpg";
import FlooringImage from "../../../../assets/images/Portfolios/DuraStone Tiles.jpg";
import WallsImage from "../../../../assets/images/Portfolios/TexTure Wallcoverings.jpg";
import CeilingsImage from "../../../../assets/images/Portfolios/SkyLite Panels.jpg";

const portfolios = [
  {
    id: 1,
    image: AcousticImage,
    name: "SoundScape Panels",
    category: "Ceilings",
  },
  {
    id: 2,
    image: FlooringImage,
    name: "DuraStone Tiles",
    category: "Walls",
  },
  {
    id: 3,
    image: WallsImage,
    name: "TexTure Wallcoverings",
    category: "Landscape",
  },
  {
    id: 4,
    image: CeilingsImage,
    name: "SkyLite Panels",
    category: "Acoustic",
  },
];

export const FeaturePorfolios = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col px-4 lg:px-24">
        <div className="flex justify-between">
          <h2 className="text-4xl font-medium text-left mb-10">
            Wow <span className="text-theme-color font-bold">Products</span>
          </h2>
          <Link to="/portfolios" className="text-lg font-bold text-theme-color">
              View All
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="relative overflow-hidden group rounded"
            >
              <Link to={'portfolios/portfolio-details'} className="block">
                <img
                  src={portfolio.image}
                  alt=""
                  className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 text-white rounded text-sm font-medium">
                  {portfolio.category}
                </div>
              </Link>
              <Link
                to={'portfolios/portfolio-details'}
                className="absolute bottom-0 inset-x-0 m-2"
              >
                <div className="p-4 bg-white rounded group hover:bg-theme-color">
                  <h2 className="text-xl font-medium mb-1 text-center group-hover:text-black group-hover:transition-all">
                    {portfolio.name}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
