import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing/Landing";
import Project from "@/components/Projects/Project";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorksSection";
import { Fragment } from "react";
import TechStack from "../../components/TechStack";
export default function Home() {
  return (
    <Fragment>
      <Landing />
      <ServicesSection />
      <Project />
      <Hero />
      <HowItWorks />
      <TechStack />
      <div className="pb-32 sm:pb-28 md:pb-32">
        <CtaSection />
      </div>
    </Fragment>
  );
}
