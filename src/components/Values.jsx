import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-blue-100 stroke-sky-950/5 [mask-image:linear-gradient(to_bottom_left,blue_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro eyebrow="Our Values" title="Mahaseel Investment Principles">
        <p>
          At Mahaseel Investment, we take a strategic and forward-thinking approach to invest in and manage diverse commercial
          enterprises. Our goal is to create long-term value by focusing on growth, resilience, and adapting to future industry
          trends.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Inception (2021)">
            Established in 2021, Mahaseel became known for its dynamic and diversified investment approach.
          </GridListItem>
          <GridListItem title="Focus on Commercial Enterprises">
            Ensures long-term success in competitive markets through focused investment and management.
          </GridListItem>
          <GridListItem title="Diverse Industries">
            Invests in hospitality, services, and specialized business solutions, fostering success across industries.
          </GridListItem>
          <GridListItem title="Forward-thinking Partnerships">
            Aligns with innovative businesses to adapt to evolving market trends.
          </GridListItem>
          <GridListItem title="Growth and Resilience">
            Partners with businesses that can thrive in changing market conditions.
          </GridListItem>
          <GridListItem title="Strategic Approach">
            Combines patience, pragmatism, and a deep understanding of business fundamentals.
          </GridListItem>
          <GridListItem title="Emerging Trends & Future Shaping">
            Focuses on identifying opportunities and supporting trends shaping future industries.
          </GridListItem>
          <GridListItem title="Diverse Portfolio">
            Includes ventures like cafés, restaurants, parking services, and marketing solutions.
          </GridListItem>
          <GridListItem title="Guiding Principles">
            Invests strategically to drive profitability and create long-term value for all stakeholders.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
