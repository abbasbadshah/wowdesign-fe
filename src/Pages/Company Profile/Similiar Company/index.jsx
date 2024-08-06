import { PhotoDisplay } from "../../../components/shared";
import { Link } from "react-router-dom";
import {
  BuildingOffice2Icon,
  MapIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/images/Company/companylistingDummylogo.png";

export const SimiliarCompanies = () => {
  const companies = [
    {
      id: "architect-1",
      name: "Foster + Partners [Real]",
      category: "Architects",
      location: "London",
      projects: 250,
      logo: logo,
      cover: "l5Tzv1alcps",
    },
    {
      id: "architect-2",
      name: "Zaha Hadid Architects [Real]",
      category: "Architects",
      location: "London",
      projects: 200,
      logo: logo,
      cover: "X48hkTT1qQc",
    },
    {
      id: "architect-3",
      name: "Gensler [Real]",
      category: "Architects",
      location: "San Francisco",
      projects: 300,
      logo: logo,
      cover: "8oej2shd2is",
    },
    {
      id: "architect-4",
      name: "Modern Designs Co.",
      category: "Architects",
      location: "New York",
      projects: 150,
      logo: logo,
      cover: "fyARaZSqLhk",
    },
    {
      id: "architect-5",
      name: "Innovative Architects Inc.",
      category: "Architects",
      location: "Chicago",
      projects: 180,
      logo: logo,
      cover: "sN8VbhwjKqM",
    },
    {
      id: "architect-6",
      name: "Sustainable Structures Ltd.",
      category: "Architects",
      location: "Toronto",
      projects: 120,
      logo: logo,
      cover: "MnnAFbkHNvQ",
    },
    {
      id: "interior-1",
      name: "Kelly Wearstler [Real]",
      category: "Interior Designer",
      location: "Los Angeles",
      projects: 100,
      logo: logo,
      cover: "yidbLm7q1ZI",
    },
    {
      id: "interior-2",
      name: "Philippe Starck [Real]",
      category: "Interior Designer",
      location: "Paris",
      projects: 150,
      logo: logo,
      cover: "_HqHX3LBN18",
    },
    {
      id: "interior-3",
      name: "Nate Berkus Associates [Real]",
      category: "Interior Designer",
      location: "Chicago",
      projects: 80,
      logo: logo,
      cover: "fobX0HI9vVo",
    },
    {
      id: "interior-4",
      name: "Elegant Spaces Design",
      category: "Interior Designer",
      location: "New York",
      projects: 90,
      logo: logo,
      cover: "jn7uVeCdf6U",
    },
    {
      id: "interior-5",
      name: "Modern Living Interiors",
      category: "Interior Designer",
      location: "Miami",
      projects: 70,
      logo: logo,
      cover: "OXXsAafHDeo",
    },
    {
      id: "interior-6",
      name: "Luxe Home Designs",
      category: "Interior Designer",
      location: "London",
      projects: 110,
      logo: logo,
      cover: "jUOaONoXJQk",
    },
  ];

  const displayedCompanies = companies.slice(0, 5);

  return (
    <div className="px-4 sm:px-6 lg:px-24 mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayedCompanies.map((company) => (
          <div
            key={company.id}
            className="w-full overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 overflow-hidden">
                <PhotoDisplay
                  photoId={company.cover}
                  className="w-full h-auto min-h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{company.name}</h3>
              </div>
            </div>
            <div className="relative px-6 py-4">
              <img
                src={company.logo}
                alt="Company Logo"
                className="w-20 h-20 rounded-full absolute -top-10 right-6 border-4 border-white shadow-md"
              />
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <BuildingOffice2Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{company.category}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{company.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DocumentDuplicateIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">
                    {company.projects} Projects
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <Link
                to={`/company-profile/${company.id}`}
                className="block w-full py-2 text-center text-white bg-theme-color rounded-md hover:bg-black transition duration-300"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
