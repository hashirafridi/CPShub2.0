import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import SpotlightSection from "@/components/SpotlightSection";
export default function Home() {
 return (
    <div className="min-h-screen bg-white">
       <Navbar />
      <Header />
      <MainSection />
      <SpotlightSection />
    </div>
  );
}
