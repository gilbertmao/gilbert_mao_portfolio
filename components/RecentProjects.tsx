import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="pb-20" id="projects">
      <h1 className="heading">
        My
        <span className="text-teal-400 dark:text-teal-300"> projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            // Increased the container height and width
            className="lg:min-h-[42rem] h-[35rem] flex items-center justify-center sm:w-[28rem] w-[90vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[28rem] w-[90vw] overflow-hidden h-[22vh] lg:h-[32vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img 
                  src={img} 
                  alt="cover" 
                  className="z-10 absolute bottom-0 max-h-full w-auto" 
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              {/* Removed line-clamp to show full description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-teal-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#2DD4BF" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;