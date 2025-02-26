import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Mahaseel Investment" title="WHO ARE WE? ">
        <p>
        At Mahaseel Investment, we believe in creating long-term value through strategic investments and exceptional management. 
Since its inception in 2021, Mahaseel Investment has been celebrated as a dynamic and diversified investment company specializing in the investment and management of commercial enterprises. 

        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      {/* <Values /> */}
      <ContactSection />
    </>
  );
};

export default ProcessPage;
