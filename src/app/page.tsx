
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Membership } from "@/components/sections/Membership";
import { Trainers } from "@/components/sections/Trainers";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { FitnessAssistant } from "@/components/sections/FitnessAssistant";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Membership />
      <Services />
      <FitnessAssistant />
      <Trainers />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
