import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Leadership" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We are driven by innovation, excellence, and a sharp focus on creating value for all promising businesses. By partnering with enterprises that understand evolving market needs, we aim to foster growth and build resilient businesses that stand strong over time.

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
