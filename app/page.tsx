import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <HeroSection/>
      </div>
    </div>
  );
}
