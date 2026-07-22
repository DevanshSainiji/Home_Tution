import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { BackToTop } from "@/components/ui/BackToTop";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Subjects } from "@/components/sections/Subjects";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Areas } from "@/components/sections/Areas";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col relative">
        <Hero />
        <About />
        <Subjects />
        <Services />
        <WhyChooseUs />
        <Results />
        <Testimonials />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      <FloatingCTA />
      <BackToTop />
    </>
  );
}
