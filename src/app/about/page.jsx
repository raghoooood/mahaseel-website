import React from "react";
import Image from "next/image"; // Import next/image for optimized images
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import TeamHierarchy from "@/components/TeamHierarchy"; // Import TeamHierarchy
import StylizedImage from "@/components/StylizedImage";
import FadeIn from "@/components/FadeIn";
import { midhat1, midhat3, midhat6 } from "@/images/companies-images";

const AboutPage = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
          {/* Left Side Text */}
          <div className=" space-y-4 text-left">
            <p className="w-full"> 
              Behind the success of Mahaseel Investment lies a team of visionary leaders and dedicated professionals.
            </p>
            <p>
              Their combined expertise drives innovation, operational excellence, and sustained growth across our portfolio.
            </p>
          </div>
        </PageIntro>

          {/* Right Side Optimized Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end py-5">
            <FadeIn className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[35rem] w-full overflow-hidden">
              <StylizedImage
                src={midhat1}
                sizes="(min-width: 1024px) 21rem, 11rem"
                className="w-full h-auto object-cover"
              />
            </FadeIn>
          </div>
        </div>

      {/* Stats Section */}
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>

      {/* Team Hierarchy Section */}
      <Container className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">Meet Our Team</h2>
        <TeamHierarchy />
      </Container>

      {/* Company Culture */}
      <Cultures />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default AboutPage;
