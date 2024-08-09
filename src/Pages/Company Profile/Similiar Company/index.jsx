import { PhotoDisplay } from "../../../components/shared";
import { Link } from "react-router-dom";
import {
  BuildingOffice2Icon,
  MapIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/images/Company/browsing/logo/logo1.avif";

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
      <div className="flex justify-between">
        <h2 className="text-4xl font-medium text-left mb-10">
          Similiar <span className="text-theme-color font-bold">Companies</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayedCompanies.map((company) => (
          <Link to={`/company-profile`} className="block">
            <div className="relative w-full h-96 rounded overflow-hidden group">
              <div className="absolute inset-0">
                <PhotoDisplay
                  photoId={company.cover}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="text-white rounded-full text-sm font-bold">
                    {company.projects} Projects
                  </span>
                </div>

                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <BuildingOffice2Icon className="w-5 h-5 mr-2" />
                      <span>{company.category}</span>
                    </div>
                    <div className="flex items-center">
                      <MapIcon className="w-5 h-5 mr-2" />
                      <span>{company.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
