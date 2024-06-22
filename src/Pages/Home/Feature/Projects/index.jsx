import React from 'react';
import featureImage1 from '../../../../assets/images/Projects/Project Details/image.webp';
const projectData = [
  {
    id: 1,
    image: featureImage1,
    title: 'First Sentier Investors, Sydney',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'contemporary'
  },
  {
    id: 2,
    image: featureImage1,
    title: 'First Sentier Investors, Sydney',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'traditional'
  },
  {
    id: 3,
    image: featureImage1,
    title: 'First Sentier Investors, Sydney',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'refurbishments'
  },
  {
    id: 4,
    image: featureImage1,
    title: 'First Sentier Investors, Sydney',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'traditional'
  },
  
];

export const FeatureProjects = () => {
  return (
    <section className="my-24">
      <div className="flex flex-col px-4 lg:px-24">
        <h2 className="text-4xl font-medium text-left my-10">Wow Feature Projects</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="relative overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="scale-100 group-hover:scale-105 transition-all duration-500"
                  alt=""
                />
              </div>

              <div className="mt-5 bg-white">
                <div className="flex items-center justify-between">
                  <div className="w-3/4">
                    <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                    <p className="text-sm font-medium text-gray-500">{project.description}</p>
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
