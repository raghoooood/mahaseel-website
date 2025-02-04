import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Leadership & Industries" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At Mahaseel Investment, we focus on identifying high-growth opportunities 
          and fostering businesses that thrive in dynamic markets. Our leadership team 
          brings expertise in strategic investments, operational efficiency, and 
          sustainable growth.
        </p>

        {/* Leadership Quotes */}
        <Blockquote
          author={{ name: "Marwan Al Sayyah", role: "Owner of Mahaseel Investment" }}
          className="mt-12"
        >
          At Mahaseel, we focus on identifying high-growth opportunities and building 
          businesses that thrive in dynamic markets. Through strategic investments 
          and innovative management, we aim to create long-term value while driving 
          excellence and fostering success across our diverse portfolio.
        </Blockquote>

        <Blockquote
          author={{ name: "Walid Shekho", role: "Operations Manager" }}
          className="mt-12"
        >
          Our success comes from optimizing operations across sectors. With a hands-on 
          approach, we give each Mahaseel venture the tools and support to thrive. 
          We don’t just manage investments; we create lasting value for everyone involved.
        </Blockquote>

      
      </div>
    </Section>
  );
};

export default Build;
