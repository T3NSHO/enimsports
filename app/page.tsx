import Image from "next/image";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import "./home.css";
export default function Home() {
  return (
  <div className="background">
    <Navbar />
    <HeroSection />
    
  </div>  
  );
}
