import { AnimatePresence, motion } from "framer-motion";
import { maths } from "../constants/cards";
import SectionLayout from "./section-layout";
import { useEffect, useId, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CloseIcon } from "../ui/CloseIcon";
import { AiFillCheckCircle, AiFillQuestionCircle } from "react-icons/ai";
import React from "react";
import { cn } from "@/lib/utils";

const Maths = ({ count, setCount }: { count: number; setCount: Function }) => {
  const [active, setActive] = useState<(typeof maths)[number] | boolean | null>(
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

  const pauseOnHover = true;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    }
  };

  return (
    <SectionLayout title="Maths" id="maths">
      <div>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.question}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`item-${active.question}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] p-8 h-fit rounded-3xl flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  className="flex flex-col items-center justify-center"
                  layoutId={`image-${active.question}-${id}`}
                >
                  <div>
                    {active.done ? (
                      <AiFillCheckCircle className="h-40 w-40 rounded-lg object-cover object-top text-green-500" />
                    ) : (
                      <AiFillQuestionCircle className="h-40 w-40 rounded-lg object-cover object-top" />
                    )}
                  </div>
                  <motion.h3
                    layoutId={`question-${active.question}-${id}`}
                    className="font-bold mt-4 md:mt-0 text-[1.5rem] text-center md:text-left text-neutral-200"
                  >
                    {active.question}
                  </motion.h3>
                </motion.div>

                <div>
                  <div className="relative flex flex-col items-center justify-center">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-5 text-[2rem] pb-5 font-serif font-extrabold"
                    >
                      {active.answer}
                    </motion.div>
                    <div className="flex justify-between items-start p-4">
                      <motion.button
                        layoutId={`button-${active.question}-${id}`}
                        onClick={() => {
                          if (!active.done) {
                            active.done = true;
                            setCount(count + 1);
                          }
                        }}
                        className={`px-4 py-3 text-sm rounded-full tracking-wide font-bold ${
                          active.done ? "bg-green-500" : "bg-blue-900"
                        } text-white`}
                      >
                        {active.done ? "Done" : "Mark as Done"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <div
            ref={containerRef}
            className="scroller relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          >
            <motion.ul
              ref={scrollerRef}
              className={cn(
                "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                start && "animate-scroll ",
                pauseOnHover && "hover:[animation-play-state:paused]"
              )}
            >
              {maths.map((item) => (
                <motion.li
                  layoutId={`item-${item.question}-${id}`}
                  key={`item-${item.question}-${id}`}
                  onClick={() => setActive(item)}
                  className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex gap-4 self-center flex-col items-center justify-center">
                      <motion.div
                        className="flex items-center justify-center"
                        layoutId={`image-${item.question}-${id}`}
                      >
                        {item.done ? (
                          <AiFillCheckCircle className="h-32 w-32 rounded-lg object-cover object-top text-green-500" />
                        ) : (
                          <AiFillQuestionCircle className="h-32 w-32 rounded-lg object-cover object-top" />
                        )}
                      </motion.div>
                      <motion.h3
                        layoutId={`question-${item.question}-${id}`}
                        className="font-medium text-[2rem] text-neutral-200 text-center mb-2"
                      >
                        {item.question}
                      </motion.h3>
                    </div>
                    <motion.button
                      layoutId={`button-${item.question}-${id}`}
                      className={`px-4 py-2 text-[1.2rem] rounded-full font-bold tracking-wide hover:bg-gray-100 ${
                        item.done
                          ? "bg-green-500 text-white"
                          : "text-green-500 bg-white"
                      } transition-colors hover:text-black mt-4 md:mt-0`}
                    >
                      {item.done ? "Answered" : "Answer"}
                    </motion.button>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Maths;
