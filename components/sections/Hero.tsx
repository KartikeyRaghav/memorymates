"use client";

import { useGSAP } from "@gsap/react";
import LogoM from "../ui/logo-m";
import gsap from "gsap";
import { BackgroundLines } from "../ui/background-lines";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.to("#tagline", {
      marginTop: innerWidth > 767 ? '3.5vh' : '140px',
      opacity: 1,
      duration: 1,
      delay: 5,
    });
    gsap.to("#button", {
      translateY: "12vh",
      display: "inline-flex",
      delay: 5.5,
    });
  }, {});
  return (
    <BackgroundLines
      className="min-h-[100vh]"
      children={
        <div className="flex justify-center items-center flex-col">
          <LogoM />
          <p
            id="tagline"
            className="z-10 text-[3vw] text-xl md:text-3xl lg:text-4xl tracking-widest opacity-0 px-20 text-center"
          >
            Learn Faster,{" "}
            <span className="whitespace-nowrap">Retain Longer</span>
          </p>

          <a href="">
            <button
              id="button"
              className="hidden translate-y-[45vh] h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-450 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Get Started
            </button>
          </a>
        </div>
      }
    />
  );
};

export default Hero;
