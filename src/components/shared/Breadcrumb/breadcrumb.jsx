import React from "react";
import { ArrowRightIcon, HomeIcon } from "@heroicons/react/24/outline";

export const BreadcrumbComponent = ({ title, bgImage, breadcrumb }) => {
  return (
    <div className="relative h-[50vh] flex flex-col justify-center items-center -mt-[6.4rem] lg:-mt-[6.4rem]">
      <div
        className="absolute inset-0 bg-black opacity-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 "></div>
      <div className="relative z-[99]">
        <h1 className="mb-4 text-4xl font-bold text-white">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center space-x-2">
            <li>
              <span
                href="#"
                className="flex items-center gap-2 text-white cursor-pointer hover:text-theme-color"
              >
                <HomeIcon className="w-5 h-5" aria-hidden="true" />
                <span className=""> Home</span>
              </span>
            </li>
            {breadcrumb.map((crumb, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <ArrowRightIcon className="w-6 text-white" />
                  <span
                    className="ml-4 text-sm font-bold text-white cursor-pointer hover:text-theme-color"
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
