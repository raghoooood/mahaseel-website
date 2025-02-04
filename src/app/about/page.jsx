import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import TeamHierarchy from "@/components/TeamHierarchy"; // Import TeamHierarchy
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <div className="flex items-center justify-between">
          {/* Left Side Text */}
          <div className="w-1/2 space-y-4">
            <p>
              Behind the success of Mahaseel Investment lies a team of visionary leaders and dedicated professionals.
            </p>
            <p>
              Their combined expertise drives innovation, operational excellence, and sustained growth across our portfolio.
            </p>
          </div>

          {/* Right Side Image */}
          <img
            src="/path/to/your/image.jpg"
            alt="About Us"
            className="w-1/2 h-auto object-cover rounded-md"
          />
        </div>
      </PageIntro>

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

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
