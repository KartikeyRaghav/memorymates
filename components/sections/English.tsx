import { useOutsideClick } from "@/hooks/use-outside-click";
import { useEffect, useId, useState } from "react";
import { english } from "../constants/cards";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillCheckCircle, AiFillQuestionCircle } from "react-icons/ai";
import SectionLayout from "./section-layout";
import { CloseIcon } from "../ui/CloseIcon";

const English = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Function;
}) => {
  const [active, setActive] = useState<
    (typeof english)[number] | boolean | null
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
    <SectionLayout title="English" id="english">
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
                layoutId={`card-${active.question}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] p-8 h-fit rounded-3xl flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center"
                  layoutId={`image-${active.question}-${id}`}
                >
                  <div className="md:mr-3">
                    {active.done ? (
                      <AiFillCheckCircle className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top text-green-500" />
                    ) : (
                      <AiFillQuestionCircle className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
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
        <ul className="max-w-7xl mx-auto w-full gap-4">
          {english.map((card, index) => (
            <motion.div
              layoutId={`card-${card.question}-${id}`}
              key={`card-${card.question}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col border-2 my-10 md:border-none md:my-0 md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 self-center flex-col md:flex-row items-center justify-center">
                <motion.div
                  className="flex items-center justify-center"
                  layoutId={`image-${card.question}-${id}`}
                >
                  {card.done ? (
                    <AiFillCheckCircle className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top text-green-500" />
                  ) : (
                    <AiFillQuestionCircle className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
                  )}
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`question-${card.question}-${id}`}
                    className="font-medium text-[1.5rem] text-neutral-200 text-center md:text-left"
                  >
                    {card.question}
                  </motion.h3>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.question}-${id}`}
                className={`ml-0 md:ml-10 px-4 py-2 text-sm rounded-full font-bold tracking-wide hover:bg-gray-100 ${
                  card.done
                    ? "bg-green-500 text-white"
                    : "text-green-500 bg-white"
                } transition-colors hover:text-black mt-4 md:mt-0`}
              >
                {card.done ? "Answered" : "Answer"}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
};

export default English;
