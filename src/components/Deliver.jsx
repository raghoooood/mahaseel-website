import React from "react";
import Section from "./Section";
import imageMeeting from "../images/tower2.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Key Industries" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Mahaseel Investment operates across multiple industries, bringing 
          innovation, efficiency, and long-term value to each sector. Our 
          expertise spans strategic investments, operational excellence, and 
          sustainable growth.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Our Areas of Expertise
      </h3>
      <List>
        <ListItem title="Cafés & Restaurants">
         Creating vibrant, welcoming spaces that offer exceptional service 
          and unique culinary experiences.
        </ListItem>
        <ListItem title="Parking Services">
          Simplifying convenience and efficiency through professional 
          valet parking solutions.
        </ListItem>
        <ListItem title="Marketing Management">
          Developing impactful strategies that help businesses grow and thrive.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
