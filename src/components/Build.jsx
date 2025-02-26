import React from "react";
import Section from "./Section";
import imageLaptop from "../images/tower1.jpg";
import Blockquote from "./Blockquote";
import List, { ListItem } from "./List";

const Build = () => {
  return (
    <Section title=" OUR GUIDING PRINCIPLES" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We believe in fostering growth by aligning with the evolving demands of modern markets and ensuring that each enterprise under our management becomes a leader in its respective industry

        </p>

        {/* Leadership Quotes */}
        <List>
        <ListItem title="Strategically invest">
        in and manage commercial enterprises. 
        </ListItem>
        <ListItem title="Drive operational">
         excellence and profitability. 
        </ListItem>
        <ListItem title="Create long-term">
        value for businesses and stakeholders alike.         </ListItem>
      </List>

      
      </div>
    </Section>
  );
};

export default Build;
