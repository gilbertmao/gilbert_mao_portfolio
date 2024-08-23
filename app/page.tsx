"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { Grid } from "@/components/Grid"

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[[{name: 'Home', link: '/', icon: <FaHome />}]]} /> */}
        <Hero />
        <Grid />
      </div>
    </main>
  );
};

export default Home;