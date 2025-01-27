"use client";

import Hero from "@/components/sections/Hero";
import Maths from "@/components/sections/Maths";
import English from "@/components/sections/English";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Cover } from "@/components/ui/cover";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Geography from "@/components/sections/Geography";
import Footer from "@/components/sections/Footer";

const Home = () => {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    gsap.to("#number", { opacity: 1, delay: 5.5, top: "2.5rem" });
  }, {});

  return (
    <div>
      <FloatingNav />
      <Hero />
      <English count={count} setCount={setCount} />
      <Maths count={count} setCount={setCount} />
      <Geography count={count} setCount={setCount} />
      <Footer />
      <div id="number" className="opacity-0 fixed right-10 z-auto">
        <Cover>{count} questions done</Cover>
      </div>
    </div>
  );
};

export default Home;
