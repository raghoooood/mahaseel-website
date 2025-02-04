import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <div>
      {/* Section for Diversified Investment */}
      <Section title="Diversified Investment" image={{ src: imageWhiteboard, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            Mahaseel Investment specializes in the investment and management of commercial enterprises across various industries.
          </p>
        </div>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">Hashtags</h3>
        <TagList className="mt-4">
          <TagListItem>#CommercialEnterprises</TagListItem>
          <TagListItem>#DynamicGrowth</TagListItem>
          <TagListItem>#Diversification</TagListItem>
        </TagList>
      </Section>

      {/* Section for Innovation Excellence */}
      <Section title="Innovation Excellence" image={{ src: imageWhiteboard, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            Focused on driving innovation and operational excellence to create value for businesses and stakeholders.
          </p>
        </div>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">Hashtags</h3>
        <TagList className="mt-4">
          <TagListItem>#Innovation</TagListItem>
          <TagListItem>#OperationalExcellence</TagListItem>
          <TagListItem>#ValueCreation</TagListItem>
        </TagList>
      </Section>

      {/* Section for Strategic Growth */}
      <Section title="Strategic Growth" image={{ src: imageWhiteboard, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            Partners with businesses to foster growth, building resilient companies with long-term success.
          </p>
        </div>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">Hashtags</h3>
        <TagList className="mt-4">
          <TagListItem>#BusinessGrowth</TagListItem>
          <TagListItem>#Resilience</TagListItem>
          <TagListItem>#LongTermSuccess</TagListItem>
        </TagList>
      </Section>
    </div>
  );
};

export default Discover;
