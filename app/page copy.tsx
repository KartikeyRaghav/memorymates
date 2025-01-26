import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className="h-[100vh] relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Tailwind is Awesome
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div>
      <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="Question"
          revealText="Answer to the question "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
}
