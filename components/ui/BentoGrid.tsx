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