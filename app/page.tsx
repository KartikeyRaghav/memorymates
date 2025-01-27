"use client";

import Hero from "@/components/sections/Hero";
import SecondSix from "@/components/sections/SecondSix";
import FirstFive from "@/components/sections/FirstFive";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Cover } from "@/components/ui/cover";
import { Carousel } from "@/components/ui/carousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    gsap.to("#number", { opacity: 1, delay: 5.5, top: "2.5rem" });
  }, {});

  return (
    <div>
      <FloatingNav />
      <Hero />
      <FirstFive count={count} setCount={setCount} />
      <SecondSix />
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
      <div id="number" className="opacity-0 fixed right-10 z-auto">
        <Cover>{count} questions done</Cover>
      </div>
    </div>
  );
};

export default Home;

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
