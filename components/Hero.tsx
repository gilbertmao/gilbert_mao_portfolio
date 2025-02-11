import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights, https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        {/* lg is for large devices */} 
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Hi! My name is
          </p>
          

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *  change md:text-6xl, add more responsive code
           *  lg = large devices, md = medium devices
           *  mb = margin bottom
           */}
          <TextGenerateEffect
            words="Gilbert, let's create together!"
            className="text-center text-[20px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          I am a 3rd year undergraduate student at Georgia Tech studying computer science with full-stack and ML development experience. 
              I was previously a machine learning researcher at Michigan State University. Through being able to play many different sports, 
              I&apos;ve learned how to pick up new skills very quickly. I love to learn and create things that can help people. 
              Feel free to take a look around to see if anything piques your interest; I&apos;d love to chat further! 
              Always open to opportunities where we can add value to a team and accomplish amazing things!
          </p>
          
          
          {/* anchor the button */}
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;