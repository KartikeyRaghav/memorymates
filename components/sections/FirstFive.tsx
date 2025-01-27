import { useOutsideClick } from "@/hooks/use-outside-click";
import { useEffect, useId, useState } from "react";
import { firstFive } from "../constants/cards";
import { AnimatePresence, motion } from "framer-motion";

const FirstFive = () => {
  const [active, setActive] = useState<
    (typeof firstFive)[number] | boolean | null
  >(null);
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
    <div id="questions" className="py-10 md:py-20 lg:px-32 px-5 md:px-20">
      <p className="lg:text-6xl xl:text-7xl md:text-5xl text-4xl text-center md:text-left mb-8 font-bold">
        English
      </p>
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
                key={`button-${active.subject}-${id}`}
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
                layoutId={`card-${active.subject}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] p-8 h-fit rounded-3xl flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center"
                  layoutId={`image-${active.subject}-${id}`}
                >
                  <div className="md:mr-3">{active.icon}</div>
                  <motion.h3
                    layoutId={`subject-${active.subject}-${id}`}
                    className="font-bold mt-4 md:mt-0 text-neutral-700 text-[1.5rem] text-center md:text-left dark:text-neutral-200"
                  >
                    {active.subject}
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
                      {active.content}
                    </motion.div>
                    <div className="flex justify-between items-start p-4">
                      <motion.button
                        layoutId={`button-${active.subject}-${id}`}
                        onClick={() => {
                          active.done = true;
                        }}
                        className="px-4 py-3 text-sm rounded-full tracking-wide font-bold bg-green-500 text-white"
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
        <ul className="max-w-7xl mx-auto w-full gap-4">
          {firstFive.map((card, index) => (
            <motion.div
              layoutId={`card-${card.subject}-${id}`}
              key={`card-${card.subject}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col border-2 my-10 md:border-none md:my-0 md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 self-center flex-col md:flex-row items-center justify-center">
                <motion.div
                  className="flex items-center justify-center"
                  layoutId={`image-${card.subject}-${id}`}
                >
                  {card.icon}
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`subject-${card.subject}-${id}`}
                    className="font-medium text-[1.5rem] text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.subject}
                  </motion.h3>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.subject}-${id}`}
                className="ml-0 md:ml-10 px-4 py-2 text-sm rounded-full font-bold tracking-wide hover:bg-gray-100 bg-green-500 text-white transition-colors hover:text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default FirstFive;
