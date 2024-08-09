import React from "react";
import LogoOne from "../../../assets/images/Company/browsing/logo/logo1.avif";
import LogoTwo from "../../../assets/images/Company/browsing/logo/logo2.avif";
import LogoThree from "../../../assets/images/Company/browsing/logo/logo3.avif";
import LogoFour from "../../../assets/images/Company/browsing/logo/logo4.avif";

const logos = [LogoOne, LogoTwo, LogoThree, LogoFour, LogoOne, LogoTwo, LogoThree, LogoFour,];

export const TrustedCompanies = () => {
  return (
    <div className="px-4 md:px-24 mt-8 md:mt-16">
      <h2 className="font-bold text-2xl md:text-3xl text-center mb-8 md:mb-12">
        Trusted by the world's leading companies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4 mb-8 md:mb-12">
        {logos.map((logo, index) => (
          <a
            key={index}
            className="transition-all duration-300 hover:translate-y-[-3px]"
            href="/"
          >
            <img src={logo} alt={`partner logo ${index + 1}`} className="w-full max-w-[120px] mx-auto" />
          </a>
        ))}
      </div>
      <div className="w-full bg-gray-300 h-px" />
    </div>
  );
};