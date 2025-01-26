import Hero from "@/components/sections/Hero";
import SecondSix from "@/components/sections/SecondSix";
import FirstFive from "@/components/sections/FirstFive";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Home = () => {
  return (
    <div>
      <FloatingNav />
      <Hero />
      <FirstFive />
      <SecondSix />
    </div>
  );
};

export default Home;
