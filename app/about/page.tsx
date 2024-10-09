import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";

export default function About() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="mt-24">
        <GetStarted />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
