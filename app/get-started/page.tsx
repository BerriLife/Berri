import Footer from "@/components/footer";
import { NavBar } from "@/components/navbar";

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>

      <div
        className="m-10 p-5 flex-grow flex justify-center items-center text-2xl sm:text-3xl md:text-4xl"
        style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
      >
        COMING SOON ON PLAY STORE AND APP STORE
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
