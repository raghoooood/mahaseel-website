import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import List, { ListItem } from "./List";
import { sahalnoom4 } from "@/images/companies-images";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our expertise spans across a range of industries, including"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We believe in fostering growth by aligning with the evolving demands of modern markets and ensuring that each enterprise under our management becomes a leader in its respective industry.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={sahalnoom4}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Cafés & Restaurants">
            : Offering vibrant, welcoming spaces that blend exceptional service with unique culinary experiences.            </ListItem>
            <ListItem title="Parking Services">
            Simplifying convenience and efficiency through professional valet parking solutions.            </ListItem>
            <ListItem title="Marketing Management">
            Crafting impactful strategies that help businesses grow and thrive.            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
