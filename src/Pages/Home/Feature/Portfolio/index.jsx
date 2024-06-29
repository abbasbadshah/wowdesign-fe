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
    link: "/products/product-details",
  },
  {
    id: 2,
    image: FlooringImage,
    name: "DuraStone Tiles",
    link: "/products/product-details",
  },
  {
    id: 3,
    image: WallsImage,
    name: "TexTure Wallcoverings",
    link: "/products/product-details",
  },
  {
    id: 4,
    image: CeilingsImage,
    name: "SkyLite Panels",
    link: "/products/product-details",
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
          <Link to="/portfolios">
            <button className="p-2 text-lg font-bold text-white bg-theme-color hover:bg-transparent hover:text-theme-color border-2 border-theme-color px-8 rounded">
              {" "}
              View All{" "}
            </button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="relative overflow-hidden group rounded"
            >
              <img src={portfolio.image} alt="" className="h-96 w-full" />
              <div className="absolute bottom-0 inset-x-0 m-2">
                <div className="p-4 bg-white rounded">
                  <h2 className="text-xl font-medium mb-1 text-center">
                    {portfolio.name}
                  </h2>
                </div>
              </div>
              <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                <div className="p-3">
                  <Link to={portfolio.link}>
                    <div className="py-2 w-full flex items-center justify-center rounded text-white hover:text-theme-color border-theme-color border-2 bg-theme-color hover:bg-white transition-all duration-500">
                      View Products
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
