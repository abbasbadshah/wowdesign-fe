import React from 'react';
import { 
  PaintBrushIcon, 
  Square3Stack3DIcon, 
  UsersIcon, 
  TrophyIcon, 
  StarIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import { DashboardLayout } from '../../../components/layout/Dashboard Layout';
import BgImage from '../../../assets/images/Projects/healthcare.jpg'
import Logo from '../../../assets/images/Company/companylistingDummylogo.png'

export const DashboardProfile = () => {
  const designerInfo = {
    name: "Sophia Elegance",
    title: "Visionary Interior Designer",
    bio: "Transforming spaces into breathtaking experiences. With over a decade of expertise, I blend timeless elegance with modern innovation to create interiors that inspire and delight.",
    stats: [
      { label: "Projects", value: 127, icon: <Square3Stack3DIcon className="w-6 h-6" /> },
      { label: "Clients", value: "98+", icon: <UsersIcon className="w-6 h-6" /> },
      { label: "Awards", value: 12, icon: <TrophyIcon className="w-6 h-6" /> },
    ],
    featuredWorks: [
      { title: "Zen Loft Retreat", image: `${BgImage}`, description: "A minimalist urban sanctuary" },
      { title: "Coastal Charm Villa", image: `${BgImage}`, description: "Beachside luxury redefined" },
      { title: "Eclectic Art Studio", image: `${BgImage}`, description: "Where creativity meets comfort" },
    ],
    skills: ["Contemporary", "Minimalist", "Eco-friendly", "Luxury", "Commercial", "Residential"]
  };

  return (
    <DashboardLayout>
    <div className="max-w-[90rem] w-[85rem] max-h-[85vh] overflow-y-auto z-[99] p-10 bg-white shadow-md rounded text-left">
      {/* Header */}
      <header className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={BgImage} alt="Designer Workspace" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-4xl font-bold">{designerInfo.name}</h1>
          <p className="text-xl">{designerInfo.title}</p>
        </div>
        <img src={Logo} alt={designerInfo.name} className="absolute bottom-5 right-10 w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover" />
      </header>

      {/* Bio and Stats */}
      <section className="bg-white rounded-xl mt-5 shadow-md p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600">{designerInfo.bio}</p>
        </div>
        <div className="flex-1 flex justify-around">
          {designerInfo.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-theme-color mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-theme-color">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-5">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designerInfo.featuredWorks.map((work, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{work.title}</h3>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Design Specialties</h2>
        <div className="flex flex-wrap gap-2">
          {designerInfo.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-md">
        <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Space?</h2>
        <p className="mb-4">Let's bring your vision to life. Contact me for a consultation.</p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 flex items-center justify-center space-x-2 mx-auto">
          <ChatBubbleLeftRightIcon className="w-5 h-5" />
          <span>Get in Touch</span>
        </button>
      </section>
    </div>
    </DashboardLayout>
  );
}