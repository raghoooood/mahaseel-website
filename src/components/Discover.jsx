import React from "react";
import Section from "./Section";
import imageWhiteboard from "../images/blueBay.jpg";


import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="High-growth Opportunities & Fostering Success " image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We have been committed to identifying high-growth opportunities and fostering success across diverse industries, including hospitality, services, and specialized business solutions. {" "}
          <strong className="font-semibold text-neutral-950"> By aligning with forward-thinking businesses </strong> 
          we ensure each venture under our management thrives in competitive markets, delivering unparalleled value to stakeholders. 

        </p>
        <p>
        We are driven by innovation, excellence, and a sharp focus on creating value for all promising businesses. 
        <strong className="font-semibold text-neutral-950"> By partnering </strong> 
        with enterprises that understand evolving market needs, we aim to foster growth and build resilient businesses that stand strong over time.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">At Mahaseel Investment, </strong> our strategy combines patience, pragmatism, and a deep understanding of business fundamentals. We focus on uncovering opportunities, supporting emerging trends, and shaping the future of industries we invest in.        
         <strong className="font-semibold text-neutral-950"> From </strong> 
         vibrant cafés and restaurants to efficient parking services and impactful marketing solutions, every venture under our portfolio is a reflection of our dedication to quality and innovative growth.        </p>
       
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  );
};

export default Discover;
