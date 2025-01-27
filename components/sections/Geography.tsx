import { useEffect, useId, useState } from "react";
import { Carousel } from "../ui/carousel";
import SectionLayout from "./section-layout";
import { geography } from "../constants/cards";
import { useOutsideClick } from "@/hooks/use-outside-click";

const Geography = ({ count, setCount }: { count: number; setCount: Function }) => {
    const [active, setActive] = useState<(typeof geography)[number] | boolean | null>(
        null
      );
      const id = useId();
    
      useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
          if (event.key === "Escape") {
            setActive(false);
          }
        }
    
        if (active && typeof active === "object") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [active]);
    
      const ref = useOutsideClick(() => setActive(null));
  return (
    <SectionLayout title="Geography" id="geography">
      <div className="relative overflow-hidden w-full h-full py-10">
        <Carousel slides={geography} />
      </div>
    </SectionLayout>
  );
};

export default Geography;
