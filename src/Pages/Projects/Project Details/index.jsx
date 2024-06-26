import { Layout } from "../../../components/layout/layout";
import HeroProjectImage from "../../../assets/images/Projects/Project Details/projectimage1.webp";
import Image1 from "../../../assets/images/Projects/Project Details/projectimage1.webp";
import Image2 from "../../../assets/images/Projects/Project Details/projectimage2.webp";
import Image3 from "../../../assets/images/Projects/Project Details/projectimage3.webp";
import Image4 from "../../../assets/images/Projects/Project Details/projectimage4.webp";
import { PlayIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const ProjectDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageSources = [Image1, Image2, Image3, Image4];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

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
      <div className="relative w-full h-[75vh] overflow-hidden -mt-[4.5rem] lg:-mt-[7.2rem]">
        <img
          src={HeroProjectImage}
          alt="Project Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-16 py-8 ">
        <div className="py-4 lg:py-24 flex flex-col lg:grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-10 lg:pr-52 text-left">
            <h1 className="text-5xl font-semibold tracking-wider">
              Hill House
            </h1>
            <div>
              {displayedSentences.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
              <button
                onClick={toggleDescription}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-10">
            <ul className="flex flex-col gap-1 tracking-wider text-left ">
              <li>
                <span className="font-bold">Location: </span>Oxford
              </li>
              <li>
                <span className="font-bold">Construction Cost: </span>£2m+
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-full h-[50vh] lg:h-screen overflow-hidden flex justify-center items-center"
          style={{
            backgroundImage: `url(${HeroProjectImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <PlayIcon className="w-50" />
          <div className="absolute inset-0 bg-gradient-to-b bg-black opacity-30 to-transparent"></div>
        </div>
        {/* Gallery Image */}
        <div className="py-24 flex flex-col gap-4">
          <div className="relative w-full lg:h-[75vh] overflow-hidden">
            <img
              src={imageSources[0]}
              alt="Project Hero 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {imageSources.slice(1, 3).map((image, index) => (
              <div
                key={index + 1}
                className="relative w-full lg:h-[75vh] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Project Hero ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="relative w-full lg:h-[75vh] overflow-hidden">
            <img
              src={imageSources[3]}
              alt="Project Hero 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
