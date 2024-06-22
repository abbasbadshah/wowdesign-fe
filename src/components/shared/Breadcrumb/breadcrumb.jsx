import React from "react";
import { ArrowRightIcon, HomeModernIcon } from "@heroicons/react/24/outline";

export const BreadcrumbComponent = ({ title, bgImage, breadcrumb }) => {
  return (
    <div className="relative h-[50vh] flex flex-col justify-center items-center lg:-mt-[6.4rem]">
      <div
        className="absolute inset-0 bg-black opacity-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-10 "></div>
      <div className="relative z-[99]">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <span
                href="#"
                className="text-white hover:text-black flex gap-2 items-center cursor-pointer"
              >
                <HomeModernIcon className="h-5 w-5" aria-hidden="true" />
                <span className=""> Home</span>
              </span>
            </li>
            {breadcrumb.map((crumb, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <ArrowRightIcon />
                  <span
                    className="ml-4 text-sm font-bold text-black cursor-pointer hover:text-gray-700"
                    aria-current={
                      index === breadcrumb.length - 1 ? "page" : undefined
                    }
                  >
                    {crumb}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
