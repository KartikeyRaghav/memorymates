"use client";

import { useGSAP } from "@gsap/react";
import { logo_ids } from "../constants/Hero";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const LogoM = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to("#hero", { opacity: 1, duration: 1 });
    tl.to(
      [
        "#logo-centre",
        "#logo-left-slant",
        "#logo-left-straight",
        "#logo-right-slant",
        "#logo-right-straight",
      ],
      { opacity: 1, duration: 1 }
    );
    tl.to(
      [
        "#logo-centre",
        "#logo-left-slant",
        "#logo-left-straight",
        "#logo-right-slant",
        "#logo-right-straight",
      ],
      { rotate: -45 }
    );
    tl.to(["#logo-left-slant", "#logo-left-straight"], {
      translateX: "-6vw",
      scaleY: 0.3,
    });
    gsap.to(["#logo-right-slant", "#logo-right-straight"], {
      translateX: "6vw",
      translateY: "-6vw",
      rotate: 45,
      scaleY: 0.3,
      delay: 2.5,
    });
    tl.to("#logo-left-straight", {
      scaleY: 0.5,
      rotate: 0,
      translateX: "-8.5vw",
      translateY: "3.15vw",
    });
    gsap.to("#logo-right-straight", {
      scaleY: 0.5,
      rotate: 0,
      translateX: "8.28vw",
      translateY: "-2.3vw",
      delay: 3,
    });
    tl.to("#logo", { translateX: "-27vw", duration: 1, delay: 0.5 });
    gsap.to("#name", {
      translateX: "38vw",
      opacity: 1,
      duration: 1,
      delay: 4,
    });
    tl.to("#logo", { translateY: "-6vh", duration: 1 });
  }, {});

  return (
    <div
      id="hero"
      className="w-full h-full flex items-center justify-center opacity-0"
    >
      <div id="logo" className="w-full h-full">
        <div className="relative mt-[50vh] flex items-center justify-center">
          {logo_ids.map((item, i) => (
            <div
              id={item}
              key={i}
              className="absolute opacity-0 text-[20rem] bg-white"
              style={{
                width: "1.5vw",
                height: "25vw",
                borderRadius: "0.75vw",
              }}
            ></div>
          ))}
          <p
            id="name"
            className="absolute opacity-0 translate-y-[3vw] font-bold text-[12vw] font-serif hidden md:block "
          >
            AIL MAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoM;
