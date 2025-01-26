import Hero from "@/components/sections/Hero";
import Mails from "@/components/sections/Mails";
import Questions from "@/components/sections/Questions";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Home = () => {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <Questions />
      <Mails />
    </div>
  );
};

export default Home;
