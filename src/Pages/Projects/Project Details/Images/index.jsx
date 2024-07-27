import React from 'react';
import { Gallery } from '../../../../components/shared';
import GalleryImage1 from "../../../../assets/images/Projects/healthcare.jpg";
import GalleryImage2 from "../../../../assets/images/Projects/hospitality.jpeg";
import GalleryImage3 from "../../../../assets/images/Projects/resdentials.jpg";
import GalleryImage4 from "../../../../assets/images/Projects/resdentials.jpg";
import GalleryImage5 from "../../../../assets/images/Projects/resdentials.jpg";
import GalleryImage6 from "../../../../assets/images/Projects/resdentials.jpg";
import GalleryImage7 from "../../../../assets/images/Projects/resdentials.jpg";

export const ProjectImages = () => {
  const images = [GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4, GalleryImage5, GalleryImage6, GalleryImage7];

  return (
    <div>
      <div className="relative -mx-4 mb-8 sm:-mx-6 md:-mx-0 md:mt-4 lg:mb-14 lg:mt-6">
        <div className="grid h-[260px] grid-cols-1 grid-rows-2 gap-0 overflow-hidden transition-all duration-300 sm:h-[320px] md:h-[400px] md:grid-cols-[1fr_0.5fr] md:gap-1 rounded lg:h-[500px] xl:h-[600px] xl:gap-2 3xl:h-[700px] 3xl:gap-3">
          <div className="relative row-start-1 row-end-3 h-full cursor-pointer">
            <img
              alt="pic"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="(min-width: 320) 100vw, 100vw"
              src={GalleryImage1}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="relative hidden h-full cursor-pointer md:block">
            <img
              alt="pic"
              className="object-cover"
              sizes="(min-width: 320) 100vw, 100vw"
              src={GalleryImage2}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
          <div className="relative hidden h-full cursor-pointer md:block">
            <img
              alt="pic"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              sizes="(min-width: 320) 100vw, 100vw"
              src={GalleryImage3}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 3xl:bottom-8 3xl:right-8">
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
};