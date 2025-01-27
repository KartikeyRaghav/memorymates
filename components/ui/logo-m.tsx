"use client";

import { useGSAP } from "@gsap/react";
import { logo_ids } from "../constants/Hero";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const LogoM = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.to("#inner_logo", { marginTop: "38vh" });
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
      translateX: innerWidth > 767 ? "-6vw" : "-45px",
      scaleY: 0.3,
    });
    gsap.to(["#logo-right-slant", "#logo-right-straight"], {
      translateX: innerWidth > 767 ? "6vw" : "45px",
      translateY: innerWidth > 767 ? "-6vw" : "-45px",
      rotate: 45,
      scaleY: 0.3,
      delay: 2.5,
    });
    tl.to("#logo-left-straight", {
      scaleY: 0.5,
      rotate: 0,
      translateX: innerWidth > 767 ? "-8.5vw" : "-66px",
      translateY: innerWidth > 767 ? "3.15vw" : "24px",
    });
    gsap.to("#logo-right-straight", {
      scaleY: 0.5,
      rotate: 0,
      translateX: innerWidth > 767 ? "8.28vw" : "66px",
      translateY: innerWidth > 767 ? "-2.3vw" : "-21px",
      delay: 3,
    });
    if (innerWidth > 767) {
      tl.to("#logo", { translateX: "-33vw", duration: 1, delay: 0.5 });
      gsap.to("#name", {
        translateX: "43vw",
        opacity: 1,
        duration: 1,
        delay: 4,
      });
      tl.to("#logo", { translateY: "-6vh", duration: 1 });
    } else {
      tl.to("#inner_logo", {
        scale: 1.5,
        duration: 1,
        delay: 0.5,
      });
    }
  }, {});

  return (
    <div id="hero" className="flex items-center justify-center opacity-0">
      <div id="logo">
        <div
          id="inner_logo"
          className="relative flex items-center justify-center"
        >
          {logo_ids.map((item, i) => (
            <div
              id={item}
              key={i}
              className="absolute opacity-0 text-[20rem] bg-white"
              style={{
                width: "1.5vw",
                minWidth: "11px",
                height: "25vw",
                minHeight: "192px",
                borderRadius: "0.75vw",
              }}
            ></div>
          ))}
          <p
            id="name"
            className="opacity-0 translate-y-[5vw] font-bold text-[8vw] font-serif hidden md:block "
          >
            EMORY MATES
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoM;
