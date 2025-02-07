# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```

# app\layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilbert's Portfolio",
  description: "Hi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // can set to system for toggle
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

```

# app\page.tsx

```tsx
'use client'

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Grid } from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems = {navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
      </div>
    </main>
  );
};

export default Home;
```

# app\provider.tsx

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

# components\Experience.tsx

```tsx
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className='py-20' id="experience">
        <h1 className="heading">
            My
            <span className="text-purple"> experience</span>
        </h1>
        {/* gap-10 is between each experience*/}
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <Button
                    key={card.id}
                    //random makes the border speeds random
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))
            }
        </div>
    </div>
  )
}

export default Experience
```

# components\Grid.tsx

```tsx
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  // Filter only the tech stack and copy email items
  const filteredItems = gridItems.filter(item => item.id === 3 || item.id === 6);

  return (
    <section id="about">
      <BentoGrid className="w-full py-5">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className} ${item.id === 3 ? 'md:col-span-3' : 'md:col-span-2'}`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
```

# components\Hero.tsx

```tsx
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
              I am a 3rd year CS student at Georgia Tech with full-stack and ML development experience.
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
```

# components\RecentProjects.tsx

```tsx
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="pb-20" id="projects">
      <h1 className="heading">
        My
        <span className="text-purple"> projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {/* TODO FIX: If I add this, the projects go out of whack */}
        {/* <h1 className="heading">
              A small selection of {' '}
              <span className="text-purple">recent projects</span>
          </h1> */}
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
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
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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

```

# components\ui\3d-pin.tsx

```tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
```

# components\ui\BentoGrid.tsx

```tsx
import { useState, useEffect, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/utils/cn";

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["C/C++", "Python", "Typescript"];
  const rightLists = ["AWS", "PyTorch", "SQL"];

  const [copied, setCopied] = useState(false);
  const [buttonText, setButtonText] = useState("Copy my email address");
  const lottieRef = useRef<any>(null);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "gmao8@gatech.edu";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setButtonText("Email is Copied!");

    // Restart the Lottie animation
    if (lottieRef.current) {
      lottieRef.current.anim.goToAndPlay(0);
    }
    
    setTimeout(() => {
      setCopied(false);
      setButtonText("Copy my email address");
    }, 3000);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        "max-h-[200px]", // Added max height
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-[200px] flex flex-col px-5 p-5 lg:p-6" // Adjusted padding and min-height
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 text-xs lg:text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`font-sans text-base lg:text-xl max-w-96 font-bold z-10 mt-2`}>
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-2 lg:-right-1 scale-75 lg:scale-90"> {/* Added scaling */}
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-4"> {/* Reduced gap */}
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-2 lg:px-2 py-2 px-2 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-4"> {/* Reduced gap */}
                <span className="lg:py-2 lg:px-2 py-2 px-2 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-3 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  } scale-75`}
              >
                <Lottie options={defaultOptions} height={150} width={300} isStopped={!copied} ref={lottieRef}/>
              </div>

              <MagicButton
                title={buttonText}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] text-sm py-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
```

# components\ui\FloatingNav.tsx

```tsx
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5  items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};

```

# components\ui\GradientBg.tsx

```tsx
"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
```

# components\ui\MagicButton.tsx

```tsx
import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
```

# components\ui\MovingBorders.tsx

```tsx
"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
        // makes col-span-2, button is now wider
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
```

# components\ui\Spotlight.tsx

```tsx
import React from "react";
import { cn } from "@/utils/cn";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

```

# components\ui\TextGenerateEffect.tsx

```tsx
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 0 ? 'text-purple' : 
                'dark:text-white text-black' }  opacity-0`} // dynamic class name, change letters into difference colors
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
```

# data\index.ts

```ts
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience"},
    { name: "Projects", link: "#projects" },
    // { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Let's connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TournaMate",
    des: "Free, open-source tournament management software for esports and sports with automated bracket generation and scheduling",
    img: "/Tournamate.svg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/OpenAI.svg"],
    link: "https://tournamate-e202c.web.app/",
  },
  {
    id: 2,
    title: "Food Search Engine",
    des: "A food search engine that uses the Google Maps and Places API to find restaurants near you",
    img: "/FoodSearch.svg",
    iconLists: ["/SpringBoot.svg", "/re.svg", "/Java.svg", "GoogleMaps.svg", "GCP.svg"],
    link: "https://frontend-dot-cs-3300-location-finder.uk.r.appspot.com/",
  },
  {
    id: 3,
    title: "xv6 Operating System",
    des: "Implemented a user-space threading library and a login system",
    img: "/OS.svg",
    iconLists: ["/dock.svg", "/assembly.svg", "/c_lang.svg"],
    link: "https://github.com/gilbertmao/xv6-Operating-System-Login",
  },
  {
    id: 4,
    title: "This Full-Stack Website!",
    des: "A personal venture into full stack development with the NextJS framework",
    img: "/Website.svg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/gilbertmao/gilbert_mao_portfolio",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Developed cloud tools to improve the lifecycle of software delivery and release, enhancing inter-organizational processes and customer satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/Ncino_logo.svg",
  },
  {
    id: 2,
    title: "Undergrad Teaching Assistant",
    desc: "Instructed lab sessions on computer architecture topics and developed course autograders",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Georgia_Tech_logo.svg",
  },
  {
    id: 3,
    title: "Machine Learning Researcher",
    desc: "Implemented novel machine learning algorithms to discover a new earthquake mechanism, published in esteemed research journal",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/MSU_logo.svg",
  },
  {
    id: 4,
    title: "Regeneron Scientific Talent Search Scholar",
    desc: "Named one of the top 300 scientists for my work in machine learning for seismology.",
    className: "md:col-span-2",
    thumbnail: "/Regeneron.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;

```

# out\app.svg

This is a file of the type: SVG Image

# out\appName.svg

This is a file of the type: SVG Image

# out\arrow.svg

This is a file of the type: SVG Image

# out\assembly.svg

This is a file of the type: SVG Image

# out\b1.svg

This is a file of the type: SVG Image

# out\b4.svg

This is a file of the type: SVG Image

# out\b5.svg

This is a file of the type: SVG Image

# out\bg.png

This is a binary file of the type: Image

# out\c_lang.svg

This is a file of the type: SVG Image

# out\c.svg

This is a file of the type: SVG Image

# out\cloud.svg

This is a file of the type: SVG Image

# out\cloudName.svg

This is a file of the type: SVG Image

# out\confetti.gif

This is a binary file of the type: Image

# out\dock.svg

This is a file of the type: SVG Image

# out\dockerName.svg

This is a file of the type: SVG Image

# out\fm.svg

This is a file of the type: SVG Image

# out\footer-grid.svg

This is a file of the type: SVG Image

# out\Georgia_Tech_logo.svg

This is a file of the type: SVG Image

# out\git.svg

This is a file of the type: SVG Image

# out\grid.svg

This is a file of the type: SVG Image

# out\gsap.svg

This is a file of the type: SVG Image

# out\host.svg

This is a file of the type: SVG Image

# out\hostName.svg

This is a file of the type: SVG Image

# out\index.html

```html
<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preload" as="image" href="/Ncino_logo.svg"/><link rel="preload" as="image" href="/Georgia_Tech_logo.svg"/><link rel="preload" as="image" href="/MSU_logo.svg"/><link rel="preload" as="image" href="/Regeneron.svg"/><link rel="preload" as="image" href="/bg.png"/><link rel="preload" as="image" href="/OS.svg"/><link rel="preload" as="image" href="/dock.svg"/><link rel="preload" as="image" href="/assembly.svg"/><link rel="preload" as="image" href="/c_lang.svg"/><link rel="preload" as="image" href="/Website.svg"/><link rel="stylesheet" href="/_next/static/css/ec14826026724194.css" data-precedence="next"/><link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/webpack-af99e7ebf2553698.js"/><script src="/_next/static/chunks/fd9d1056-a7223fb5cd24b6ec.js" async=""></script><script src="/_next/static/chunks/23-8681f0ee81b471ad.js" async=""></script><script src="/_next/static/chunks/main-app-c3b42cbc2427c79b.js" async=""></script><script src="/_next/static/chunks/9c4e2130-218fd5b81d9b370f.js" async=""></script><script src="/_next/static/chunks/53c13509-500c3ecf9e520b29.js" async=""></script><script src="/_next/static/chunks/dc112a36-4627e70196a7f48b.js" async=""></script><script src="/_next/static/chunks/382-c6627cf2bb7e5701.js" async=""></script><script src="/_next/static/chunks/app/page-543b39be260d42bb.js" async=""></script><script src="/_next/static/chunks/app/layout-ba3d30fe803cfdff.js" async=""></script><link rel="preload" as="image" href="/re.svg"/><link rel="preload" as="image" href="/next.svg"/><link rel="preload" as="image" href="/tail.svg"/><link rel="preload" as="image" href="/ts.svg"/><link rel="preload" as="image" href="/c.svg"/><link rel="icon" href="/jsm-logo.png" sizes="any"/><title>Gilbert&#x27;s Portfolio</title><meta name="description" content="Hi!"/><script src="/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js" noModule=""></script></head><body class="__className_36bd41"><script>!function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');var e=localStorage.getItem('theme');if('system'===e||(!e&&false)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){d.style.colorScheme = 'dark';c.add('dark')}else{d.style.colorScheme = 'light';c.add('light')}}else if(e){c.add(e|| '')}else{c.add('dark')}if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'dark'}catch(e){}}()</script><main class="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"><div class="max-w-7xl w-full"><div class="flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100" style="opacity:1;will-change:transform,opacity;transform:translateY(-100px)"><a class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500" href="#about"><span class="block sm:hidden"></span><span class="text-sm !cursor-pointer">About</span></a><a class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500" href="#experience"><span class="block sm:hidden"></span><span class="text-sm !cursor-pointer">Experience</span></a><a class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500" href="#projects"><span class="block sm:hidden"></span><span class="text-sm !cursor-pointer">Projects</span></a></div><div class="pb-20 pt-36"><div><svg class="animate-spotlight pointer-events-none absolute z-[1] w-[138%] lg:w-[84%] opacity-0 -top-40 -left-10 md:-left-32 md:-top-20 h-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none"><g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fill-opacity="0.21"></ellipse></g><defs><filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur></filter></defs></svg><svg class="animate-spotlight pointer-events-none absolute z-[1] lg:w-[84%] opacity-0 h-[80vh] w-[50vw] top-10 left-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none"><g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="purple" fill-opacity="0.21"></ellipse></g><defs><filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur></filter></defs></svg><svg class="animate-spotlight pointer-events-none absolute z-[1] lg:w-[84%] opacity-0 left-80 top-28 h-[80vh] w-[50vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none"><g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="blue" fill-opacity="0.21"></ellipse></g><defs><filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur></filter></defs></svg></div><div class="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]   absolute top-0 left-0 flex items-center justify-center"><div class="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div></div><div class="flex justify-center relative my-20 z-10"><div class="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"><p class="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Hi! My name is</p><div class="font-bold text-center text-[20px] md:text-5xl lg:text-6xl"><div class="my-4"><div class=" dark:text-white text-black leading-snug tracking-wide"><div><span class="dark:text-white text-black  opacity-0">Gilbert,<!-- --> </span><span class="text-purple  opacity-0">let&#x27;s<!-- --> </span><span class="text-purple  opacity-0">create<!-- --> </span><span class="text-purple  opacity-0">together!<!-- --> </span></div></div></div></div><p class="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">I am a 3rd year CS student at Georgia Tech with full-stack and ML development experience.</p><a href="#projects"><div><button class="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"><span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span><span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">Show my work<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path></svg></span></button></div></a></div></div></div><section id="about"><div class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 mx-auto w-full py-5"><div class="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 max-h-[200px] lg:col-span-2 md:row-span-2 md:col-span-3" style="background:rgb(4,7,29);background-color:linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"><div class="false h-full"><div class="w-full h-full absolute"></div><div class="absolute right-0 -bottom-5 false "></div><div class="justify-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-[200px] flex flex-col p-5 lg:p-6"><div class="font-sans font-extralight md:max-w-32 text-xs lg:text-sm text-[#C1C2D3] z-10">I constantly try to improve</div><div class="font-sans text-base lg:text-xl max-w-96 font-bold z-10 mt-2">My tech stack</div><div class="flex gap-1 lg:gap-3 w-fit absolute -right-2 lg:-right-1 scale-75 lg:scale-90"> <div class="flex flex-col gap-2 md:gap-2 lg:gap-4"> <span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">C/C++</span><span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">Python</span><span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">Typescript</span><span class="lg:py-2 lg:px-2 py-2 px-2 rounded-lg text-center bg-[#10132E]"></span></div><div class="flex flex-col gap-2 md:gap-2 lg:gap-4"> <span class="lg:py-2 lg:px-2 py-2 px-2 rounded-lg text-center bg-[#10132E]"></span><span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">AWS</span><span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">PyTorch</span><span class="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]">SQL</span></div></div></div></div></div><div class="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 max-h-[200px] lg:col-span-2 md:row-span-1 md:col-span-2" style="background:rgb(4,7,29);background-color:linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"><div class="flex justify-center h-full"><div class="w-full h-full absolute"></div><div class="absolute right-0 -bottom-5 false "></div><div class="h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]"><svg class="hidden"><defs><filter id="blurMe"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs></svg><div class=""><div class="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div></div><div class="gradients-container h-full w-full blur-lg [filter:url(#blurMe)_blur(40px)]"><div class="absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100"></div><div class="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div><div class="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div><div class="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div><div class="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div><div class="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70"></div></div></div><div class="justify-center md:max-w-full max-w-60 text-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-[200px] flex flex-col p-5 lg:p-6"><div class="font-sans font-extralight md:max-w-32 text-xs lg:text-sm text-[#C1C2D3] z-10"></div><div class="font-sans text-base lg:text-xl max-w-96 font-bold z-10 mt-2">Let&#x27;s connect!</div><div class="mt-3 relative"><div class="absolute -bottom-5 right-0 block scale-75"><div style="width:300px;height:150px;overflow:hidden;margin:0 auto;outline:none" title="" role="button" aria-label="animation" tabindex="0"></div></div><button class="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"><span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span><span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 !bg-[#161A31] text-sm py-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path></svg>Copy my email address</span></button></div></div></div></div></div></section><div class="py-20" id="experience"><h1 class="heading">My<span class="text-purple"> experience</span></h1><div class="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"><button class="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2" style="border-radius:1.75rem"><div class="absolute inset-0" style="border-radius:calc(1.75rem * 0.96)"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="absolute h-full w-full" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"></rect></svg><div style="position:absolute;top:0;left:0;display:inline-block;transform:translateX(undefinedpx) translateY(undefinedpx) translateX(-50%) translateY(-50%)"><div class="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"></div></div></div><div class="relative bg-slate-900/[0.8] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-white border-neutral-200 dark:border-slate-800" style="border-radius:calc(1.75rem * 0.96)"><div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"><img src="/Ncino_logo.svg" alt="/Ncino_logo.svg" class="lg:w-32 md:w-20 w-16"/><div class="lg:ms-5"><h1 class="text-start text-xl md:text-2xl font-bold">Software Engineer Intern</h1><p class="text-start text-white-100 mt-3 font-semibold">Developed cloud tools to improve the lifecycle of software delivery and release, enhancing inter-organizational processes and customer satisfaction.</p></div></div></div></button><button class="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2" style="border-radius:1.75rem"><div class="absolute inset-0" style="border-radius:calc(1.75rem * 0.96)"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="absolute h-full w-full" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"></rect></svg><div style="position:absolute;top:0;left:0;display:inline-block;transform:translateX(undefinedpx) translateY(undefinedpx) translateX(-50%) translateY(-50%)"><div class="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"></div></div></div><div class="relative bg-slate-900/[0.8] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-white border-neutral-200 dark:border-slate-800" style="border-radius:calc(1.75rem * 0.96)"><div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"><img src="/Georgia_Tech_logo.svg" alt="/Georgia_Tech_logo.svg" class="lg:w-32 md:w-20 w-16"/><div class="lg:ms-5"><h1 class="text-start text-xl md:text-2xl font-bold">Undergrad Teaching Assistant</h1><p class="text-start text-white-100 mt-3 font-semibold">Instructed a lab of 50+ students on computer architecture topics and developed course autograders</p></div></div></div></button><button class="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2" style="border-radius:1.75rem"><div class="absolute inset-0" style="border-radius:calc(1.75rem * 0.96)"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="absolute h-full w-full" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"></rect></svg><div style="position:absolute;top:0;left:0;display:inline-block;transform:translateX(undefinedpx) translateY(undefinedpx) translateX(-50%) translateY(-50%)"><div class="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"></div></div></div><div class="relative bg-slate-900/[0.8] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-white border-neutral-200 dark:border-slate-800" style="border-radius:calc(1.75rem * 0.96)"><div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"><img src="/MSU_logo.svg" alt="/MSU_logo.svg" class="lg:w-32 md:w-20 w-16"/><div class="lg:ms-5"><h1 class="text-start text-xl md:text-2xl font-bold">Machine Learning Researcher</h1><p class="text-start text-white-100 mt-3 font-semibold">Implemented novel machine learning algorithms to discover a new earthquake mechanism, published in esteemed research journal</p></div></div></div></button><button class="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2" style="border-radius:1.75rem"><div class="absolute inset-0" style="border-radius:calc(1.75rem * 0.96)"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="absolute h-full w-full" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"></rect></svg><div style="position:absolute;top:0;left:0;display:inline-block;transform:translateX(undefinedpx) translateY(undefinedpx) translateX(-50%) translateY(-50%)"><div class="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"></div></div></div><div class="relative bg-slate-900/[0.8] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-white border-neutral-200 dark:border-slate-800" style="border-radius:calc(1.75rem * 0.96)"><div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"><img src="/Regeneron.svg" alt="/Regeneron.svg" class="lg:w-32 md:w-20 w-16"/><div class="lg:ms-5"><h1 class="text-start text-xl md:text-2xl font-bold">Regeneron Scientific Talent Search Scholar</h1><p class="text-start text-white-100 mt-3 font-semibold">Named one of the top 300 scientists for my work in machine learning for seismology.</p></div></div></div></button></div></div><div class="flex flex-wrap items-center justify-center p-4 gap-16 mt-10"><div class="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"><a class="relative group/pin z-50 cursor-pointer" href="https://github.com/gilbertmao/xv6-Operating-System-Login"><div style="perspective:1000px;transform:rotateX(70deg) translateZ(0deg)" class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"><div style="transform:translate(-50%,-50%) rotateX(0deg)" class="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"><div class="relative z-50"><div class="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"><div class="relative w-full h-full overflow-hidden lg:rounded-3xl" style="background-color:#13162D"><img src="/bg.png" alt="bgimg"/></div><img src="/OS.svg" alt="cover" class="z-10 absolute bottom-0"/></div><h1 class="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">xv6 Operating System</h1><p class="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style="color:#BEC1DD;margin:1vh 0">Implemented a user-space threading library and a login system</p><div class="flex items-center justify-between mt-7 mb-3"><div class="flex items-center"><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-2px)"><img src="/dock.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-7px)"><img src="/assembly.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-12px)"><img src="/c_lang.svg" alt="icon5" class="p-2"/></div></div><div class="flex justify-center items-center"><p class="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="ms-3" color="#CBACF9" style="color:#CBACF9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path></svg></div></div></div></div></div><div class="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"><div class=" w-full h-full -mt-7 flex-none  inset-0"><div class="absolute top-0 inset-x-0  flex justify-center"><div class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "><span class="relative z-20 text-white text-xs font-bold inline-block py-0.5">xv6 Operating System</span><span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span></div></div><div style="perspective:1000px;transform:rotateX(70deg) translateZ(0)" class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div></div><div class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"></div><div class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "></div><div class="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"></div><div class="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "></div></div></div></a></div><div class="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"><a class="relative group/pin z-50 cursor-pointer" href="https://github.com/gilbertmao/gilbert_mao_portfolio"><div style="perspective:1000px;transform:rotateX(70deg) translateZ(0deg)" class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"><div style="transform:translate(-50%,-50%) rotateX(0deg)" class="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"><div class="relative z-50"><div class="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"><div class="relative w-full h-full overflow-hidden lg:rounded-3xl" style="background-color:#13162D"><img src="/bg.png" alt="bgimg"/></div><img src="/Website.svg" alt="cover" class="z-10 absolute bottom-0"/></div><h1 class="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">This Full-Stack Website!</h1><p class="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style="color:#BEC1DD;margin:1vh 0">A personal venture into full stack development with the NextJS framework</p><div class="flex items-center justify-between mt-7 mb-3"><div class="flex items-center"><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-2px)"><img src="/re.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-7px)"><img src="/next.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-12px)"><img src="/tail.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-17px)"><img src="/ts.svg" alt="icon5" class="p-2"/></div><div class="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style="transform:translateX(-22px)"><img src="/c.svg" alt="icon5" class="p-2"/></div></div><div class="flex justify-center items-center"><p class="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="ms-3" color="#CBACF9" style="color:#CBACF9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path></svg></div></div></div></div></div><div class="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"><div class=" w-full h-full -mt-7 flex-none  inset-0"><div class="absolute top-0 inset-x-0  flex justify-center"><div class="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "><span class="relative z-20 text-white text-xs font-bold inline-block py-0.5">This Full-Stack Website!</span><span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span></div></div><div style="perspective:1000px;transform:rotateX(70deg) translateZ(0)" class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div><div class="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" style="opacity:0;will-change:opacity,transform;transform:translateX(-50%) translateY(-50%) scale(0)"></div></div><div class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"></div><div class="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "></div><div class="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"></div><div class="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "></div></div></div></a></div></div></div></main><script src="/_next/static/chunks/webpack-af99e7ebf2553698.js" async=""></script><script>(self.__next_f=self.__next_f||[]).push([0]);self.__next_f.push([2,null])</script><script>self.__next_f.push([1,"1:HL[\"/_next/static/css/ec14826026724194.css\",\"style\"]\n"])</script><script>self.__next_f.push([1,"2:I[5751,[],\"\"]\n4:I[6513,[],\"ClientPageRoot\"]\n5:I[1056,[\"706\",\"static/chunks/9c4e2130-218fd5b81d9b370f.js\",\"240\",\"static/chunks/53c13509-500c3ecf9e520b29.js\",\"705\",\"static/chunks/dc112a36-4627e70196a7f48b.js\",\"382\",\"static/chunks/382-c6627cf2bb7e5701.js\",\"931\",\"static/chunks/app/page-543b39be260d42bb.js\"],\"default\"]\n6:I[9512,[\"185\",\"static/chunks/app/layout-ba3d30fe803cfdff.js\"],\"ThemeProvider\"]\n7:I[9275,[],\"\"]\n8:I[1343,[],\"\"]\na:I[6130,[],\"\"]\nb:[]\n"])</script><script>self.__next_f.push([1,"0:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/ec14826026724194.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}]],[\"$\",\"$L2\",null,{\"buildId\":\"4sHEoDaobvGbpjZf7kuIK\",\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/\",\"initialTree\":[\"\",{\"children\":[\"__PAGE__\",{}]},\"$undefined\",\"$undefined\",true],\"initialSeedData\":[\"\",{\"children\":[\"__PAGE__\",{},[[\"$L3\",[\"$\",\"$L4\",null,{\"props\":{\"params\":{},\"searchParams\":{}},\"Component\":\"$5\"}]],null],null]},[[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[[\"$\",\"head\",null,{\"children\":[\"$\",\"link\",null,{\"rel\":\"icon\",\"href\":\"/jsm-logo.png\",\"sizes\":\"any\"}]}],[\"$\",\"body\",null,{\"className\":\"__className_36bd41\",\"children\":[\"$\",\"$L6\",null,{\"attribute\":\"class\",\"defaultTheme\":\"dark\",\"enableSystem\":true,\"disableTransitionOnChange\":true,\"children\":[\"$\",\"$L7\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L8\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page could not be found.\"}]}]]}]}]],\"notFoundStyles\":[],\"styles\":null}]}]}]]}],null],null],\"couldBeIntercepted\":false,\"initialHead\":[null,\"$L9\"],\"globalErrorComponent\":\"$a\",\"missingSlots\":\"$Wb\"}]]\n"])</script><script>self.__next_f.push([1,"9:[[\"$\",\"meta\",\"0\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"$\",\"meta\",\"1\",{\"charSet\":\"utf-8\"}],[\"$\",\"title\",\"2\",{\"children\":\"Gilbert's Portfolio\"}],[\"$\",\"meta\",\"3\",{\"name\":\"description\",\"content\":\"Hi!\"}]]\n3:null\n"])</script></body></html>
```

# out\index.txt

```txt
2:I[6513,[],"ClientPageRoot"]
3:I[1056,["706","static/chunks/9c4e2130-218fd5b81d9b370f.js","240","static/chunks/53c13509-500c3ecf9e520b29.js","705","static/chunks/dc112a36-4627e70196a7f48b.js","382","static/chunks/382-c6627cf2bb7e5701.js","931","static/chunks/app/page-543b39be260d42bb.js"],"default"]
4:I[9512,["185","static/chunks/app/layout-ba3d30fe803cfdff.js"],"ThemeProvider"]
5:I[9275,[],""]
6:I[1343,[],""]
0:["4sHEoDaobvGbpjZf7kuIK",[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"props":{"params":{},"searchParams":{}},"Component":"$3"}]],null],null]},[["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":["$","link",null,{"rel":"icon","href":"/jsm-logo.png","sizes":"any"}]}],["$","body",null,{"className":"__className_36bd41","children":["$","$L4",null,{"attribute":"class","defaultTheme":"dark","enableSystem":true,"disableTransitionOnChange":true,"children":["$","$L5",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}]}]]}],null],null],[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/ec14826026724194.css","precedence":"next","crossOrigin":"$undefined"}]],[null,"$L7"]]]]]
7:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Gilbert's Portfolio"}],["$","meta","3",{"name":"description","content":"Hi!"}]]
1:null

```

# out\insta.svg

This is a file of the type: SVG Image

# out\jsm-logo.png

This is a binary file of the type: Image

# out\link.svg

This is a file of the type: SVG Image

# out\MSU_logo.svg

This is a file of the type: SVG Image

# out\Ncino_logo.svg

This is a file of the type: SVG Image

# out\next.svg

This is a file of the type: SVG Image

# out\OS.svg

This is a file of the type: SVG Image

# out\p1.svg

This is a file of the type: SVG Image

# out\p2.svg

This is a file of the type: SVG Image

# out\p3.svg

This is a file of the type: SVG Image

# out\p4.svg

This is a file of the type: SVG Image

# out\profile.svg

This is a file of the type: SVG Image

# out\re.svg

This is a file of the type: SVG Image

# out\Regeneron.svg

This is a file of the type: SVG Image

# out\s.svg

This is a file of the type: SVG Image

# out\stream.svg

This is a file of the type: SVG Image

# out\streamName.svg

This is a file of the type: SVG Image

# out\tail.svg

This is a file of the type: SVG Image

# out\three.svg

This is a file of the type: SVG Image

# out\ts.svg

This is a file of the type: SVG Image

# out\twit.svg

This is a file of the type: SVG Image

# out\vercel.svg

This is a file of the type: SVG Image

# out\Website.svg

This is a file of the type: SVG Image

# out\wha.svg

This is a file of the type: SVG Image

# package.json

```json
{
  "name": "gilbert_mao_portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.3.27",
    "mini-svg-data-uri": "^1.4.4",
    "next": "14.2.5",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.3.0",
    "react-lottie": "^1.2.4",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-lottie": "^1.2.10",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# public\app.svg

This is a file of the type: SVG Image

# public\appName.svg

This is a file of the type: SVG Image

# public\arrow.svg

This is a file of the type: SVG Image

# public\assembly.svg

This is a file of the type: SVG Image

# public\b1.svg

This is a file of the type: SVG Image

# public\b4.svg

This is a file of the type: SVG Image

# public\b5.svg

This is a file of the type: SVG Image

# public\bg.png

This is a binary file of the type: Image

# public\c_lang.svg

This is a file of the type: SVG Image

# public\c.svg

This is a file of the type: SVG Image

# public\cloud.svg

This is a file of the type: SVG Image

# public\cloudName.svg

This is a file of the type: SVG Image

# public\confetti.gif

This is a binary file of the type: Image

# public\dock.svg

This is a file of the type: SVG Image

# public\dockerName.svg

This is a file of the type: SVG Image

# public\fm.svg

This is a file of the type: SVG Image

# public\FoodSearch.svg

This is a file of the type: SVG Image

# public\footer-grid.svg

This is a file of the type: SVG Image

# public\GCP.svg

This is a file of the type: SVG Image

# public\Georgia_Tech_logo.svg

This is a file of the type: SVG Image

# public\git.svg

This is a file of the type: SVG Image

# public\GoogleMaps.svg

This is a file of the type: SVG Image

# public\grid.svg

This is a file of the type: SVG Image

# public\gsap.svg

This is a file of the type: SVG Image

# public\host.svg

This is a file of the type: SVG Image

# public\hostName.svg

This is a file of the type: SVG Image

# public\insta.svg

This is a file of the type: SVG Image

# public\Java.svg

This is a file of the type: SVG Image

# public\jsm-logo.png

This is a binary file of the type: Image

# public\link.svg

This is a file of the type: SVG Image

# public\MSU_logo.svg

This is a file of the type: SVG Image

# public\Ncino_logo.svg

This is a file of the type: SVG Image

# public\next.svg

This is a file of the type: SVG Image

# public\OpenAI.svg

This is a file of the type: SVG Image

# public\OS.svg

This is a file of the type: SVG Image

# public\p1.svg

This is a file of the type: SVG Image

# public\p2.svg

This is a file of the type: SVG Image

# public\p3.svg

This is a file of the type: SVG Image

# public\p4.svg

This is a file of the type: SVG Image

# public\profile.svg

This is a file of the type: SVG Image

# public\re.svg

This is a file of the type: SVG Image

# public\Regeneron.svg

This is a file of the type: SVG Image

# public\s.svg

This is a file of the type: SVG Image

# public\SpringBoot.svg

This is a file of the type: SVG Image

# public\stream.svg

This is a file of the type: SVG Image

# public\streamName.svg

This is a file of the type: SVG Image

# public\tail.svg

This is a file of the type: SVG Image

# public\three.svg

This is a file of the type: SVG Image

# public\Tournamate.svg

This is a file of the type: SVG Image

# public\ts.svg

This is a file of the type: SVG Image

# public\twit.svg

This is a file of the type: SVG Image

# public\vercel.svg

This is a file of the type: SVG Image

# public\Website.svg

This is a file of the type: SVG Image

# public\wha.svg

This is a file of the type: SVG Image

# README.md

```md
## Gilbert Mao Full Stack NextJS Portfolio

To run locally:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## Live Link (deployed with Vercel)

gilbert-mao-portfolio.vercel.app

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

# utils\cn.ts

```ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

