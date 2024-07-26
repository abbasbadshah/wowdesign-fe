import React from "react";
import CommercialImage from "../../../../assets/images/Projects/commercials.jpg";
import HealthcareImage from "../../../../assets/images/Projects/healthcare.jpg";
import RestaurantImage from "../../../../assets/images/Projects/restaurant.jpg";
import HospitalityImage from "../../../../assets/images/Projects/hospitality.jpeg";
import { Link } from "react-router-dom";
const projectData = [
  {
    id: 1,
    image: CommercialImage,
    title: "Skyline Plaza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Commercials",
  },
  {
    id: 2,
    image: HealthcareImage,
    title: "Horizon Medical Complex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Healthcare",
  },
  {
    id: 3,
    image: RestaurantImage,
    title: "Garden Bistro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Restaurant",
  },
  {
    id: 4,
    image: HospitalityImage,
    title: "Serenity Resort & Spa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Hospitality",
  },
];

export const FeatureProjects = () => {
  return (
    <section className="my-24">
      <div className="flex flex-col px-4 lg:px-24">
        <div className="flex justify-between">
          <h2 className="text-4xl font-medium text-left mb-10">
            Wow <span className="text-theme-color font-bold">Projects</span>
          </h2>
          <Link to="/projects">
            <button className="p-2 text-lg font-bold text-white bg-theme-color hover:bg-transparent hover:text-theme-color border-2 border-theme-color px-8 rounded">
              {" "}
              View All{" "}
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden group rounded"
            >
              <Link
                to={`/projects/project-details`}
                className="block overflow-hidden"
              >
                <img
                  src={project.image}
                  className="scale-100 group-hover:scale-105 transition-all duration-500 rounded w-full h-72 object-cover"
                  alt={project.title}
                />
              </Link>

              <div className="mt-5 bg-white">
                <div className="flex items-center justify-between">
                  <div className="w-3/4">
                    <Link to={`/projects/project-details`}>
                      <h2 className="text-xl font-bold mb-1 hover:text-theme-color transition-colors">
                        {project.title}
                      </h2>
                    </Link>
                    <p className="text-sm font-medium text-gray-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="w-1/4">
                    <span className="text-sm font-semibold py-1.5 px-2 bg-gray-100 inline-block">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
