import React from "react";
import CommercialImage from "../../../assets/images/Projects/commercials.jpg";
import HealthcareImage from "../../../assets/images/Projects/healthcare.jpg";
import RestaurantImage from "../../../assets/images/Projects/restaurant.jpg";
import HospitalityImage from "../../../assets/images/Projects/hospitality.jpeg";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const projectData = [
  {
    id: 1,
    image: CommercialImage,
    title: "Skyline Plaza",
    author: "Abbas Badshah, Indore",
    category: "Commercials",
  },
  {
    id: 2,
    image: HealthcareImage,
    title: "Horizon Medical Complex",
    author: "Saifuddin Bharmal, UAE",
    category: "Healthcare",
  },
  {
    id: 3,
    image: RestaurantImage,
    title: "Garden Bistro",
    author: "Mohammad Kika, Indore",
    category: "Restaurant",
  },
  {
    id: 4,
    image: HospitalityImage,
    title: "Serenity Resort & Spa",
    author: "Huzaifa Diwanji, UAE",
    category: "Hospitality",
  },
];

export const CompanyProjects = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
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
                  alt={project.title}
                  className="scale-100 group-hover:scale-105 transition-all duration-500 rounded w-full h-72 object-cover"
                />
              </Link>

              <div className="mt-5 bg-white flex flex-col">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="w-full sm:w-3/4 mb-2 sm:mb-0">
                    <Link to={`/projects/project-details`} className="block">
                      <h2 className="text-xl font-bold mb-1 hover:text-theme-color transition-colors line-clamp-2">
                        {project.title}
                      </h2>
                    </Link>
                  </div>

                  <div className="w-auto sm:w-1/4 sm:text-right">
                    <span className="text-sm font-semibold py-1.5 px-2 bg-gray-100 inline-block break-words max-w-full">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <span className="flex gap-2 text-sm font-medium text-gray-500 mt-2">
                  <UserCircleIcon className="w-5 text-theme-color flex-shrink-0" />
                  <span className="truncate">{project.author}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
