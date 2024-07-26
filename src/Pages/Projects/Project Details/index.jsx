import { Layout } from "../../../components/layout/layout";
import HeroProjectImage from "../../../assets/images/Projects/Project Details/projectimage1.webp";
import Image1 from "../../../assets/images/Projects/Project Details/projectimage1.webp";
import Image2 from "../../../assets/images/Projects/Project Details/projectimage2.webp";
import Image3 from "../../../assets/images/Projects/Project Details/projectimage3.webp";
import Image4 from "../../../assets/images/Projects/Project Details/projectimage4.webp";
import { useState } from "react";
import { DetailPageBreadCrumb } from "../../../components/shared";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

export const ProjectDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageSources = [Image1, Image2, Image3, Image4];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const pageTitle = "Project Detail Page Title";

  const descriptionSentences = [
    "Hill House is a dramatic, contemporary country house of over 10,000 square feet designed to replace our client's existing prop­erty near Oxford.",
    "The house is an architectural statement with a huge generosity of space.",
    "We use volume and light with split and stepped levels to create spatial drama and to maximise the views of open countryside.",
    "An imposing double-height main entrance hall creates a grand sense of arrival, from which flows a sequence of formal and informal spaces for entertaining and relaxation.",
    "Ground floor highlights include an indoor garden and a dramatic 10,000-book library.",
    "The indoor garden is open to the main reception rooms on one side, with a floor-to-ceiling double height glass wall overlooking the terrace on the other side.",
    "You can also experience this unique space from the galleried landing above.",
    "The library is also double height, with the entrance on the upper level among the bookshelves.",
    "A bespoke spiral staircase takes you down to the lower level reading area with views of and access to the gardens.",
    "Hill House is also a practical family home.",
    "A separate entrance for day-to-day use means that the muddy paws of dogs and children can be cleaned before entering the main house.",
    "There is another entrance for trades and deliveries and one for the annexe, which provides self-contained accommodation for guests or staff.",
    "The choice of materials is critical.",
    "Natural stone, timber and glass are the main structural materials, alongside poured concrete and slate flooring.",
    "A simple colour palette and the play of light and shade anchor the new house into its setting, with careful architectural detailing creating a deep sense of quality.",
  ];

  const displayedSentences = isExpanded
    ? descriptionSentences
    : descriptionSentences.slice(0, 3);
  return (
    <Layout headerType={"header1"}>
      <DetailPageBreadCrumb title={pageTitle} authorName={'John Smith'} />
      <div className="px-4 py-8 lg:px-16 ">
        <div className="flex flex-col gap-10 py-4 lg:pt-24 lg:grid lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-6">
            <table class="table-auto">
              <tbody className="text-gray-600 ">
                <tr className="h-10">
                  <th className="font-bold text-black">Client</th>
                  <td>Oxford</td>
                </tr>
                <tr className="h-10">
                  <th className="font-bold text-black">Architects</th>
                  <td>John Smith</td>
                </tr>
                <tr className="h-10">
                  <th className="font-bold text-black">Interior Designer</th>
                  <td>Alexandra Alis</td>
                </tr>
                <tr className="h-10">
                  <th className="font-bold text-black">Project Manager</th>
                  <td>Bella Roland</td>
                </tr>
                <tr className="h-10">
                  <th className="font-bold text-black">Category</th>
                  <td>Category Name</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="relative w-full h-[420px] col-span-3 overflow-hidden rounded">
            <img
              src={imageSources[0]}
              alt="Project Hero 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-full h-[420px] col-span-3 overflow-hidden rounded">
            <img
              src={imageSources[1]}
              alt="Project Hero 1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 py-4 lg:pt-4 lg:grid lg:grid-cols-12">
          <div className="flex flex-col gap-10 text-left lg:col-span-6 lg:pr-52">
            <h1 className="text-5xl font-semibold tracking-wider">
              Hill House
            </h1>
            <div>
              {displayedSentences.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
              <button
                onClick={toggleDescription}
                className="mt-2 text-theme-color hover:text-black"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="relative w-full h-[420px] col-span-3 overflow-hidden rounded">
            <img
              src={imageSources[2]}
              alt="Project Hero 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-full h-[420px] col-span-3 overflow-hidden rounded">
            <img
              src={imageSources[3]}
              alt="Project Hero 1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 py-4 lg:pt-8 lg:grid lg:grid-cols-12">
          <div
            className="relative flex items-center justify-center w-full h-[420px] col-span-6 overflow-hidden rounded"
            style={{
              backgroundImage: `url(${HeroProjectImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <PlayCircleIcon className="w-10 text-white z-[9]" />
            <div className="absolute inset-0 bg-black bg-gradient-to-b opacity-30 to-transparent"></div>
          </div>
          <div className="flex flex-col gap-10 text-lg text-left lg:col-span-6 lg:pr-52">
            <div>
              {displayedSentences.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
              <button
                onClick={toggleDescription}
                className="mt-2 text-theme-color hover:text-theme-color"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
