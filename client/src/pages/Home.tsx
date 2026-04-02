import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="font-inter min-h-screen w-screen">
      <div className="mx-auto max-w-7xl pt-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
