import PageIntro from "@/components/PageIntro";
import OurWork from "@/components/OurWork";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <div className="bg-[url('/aboutImage.jpg')] bg-center bg-cover">
        <h1 className="container py-32 px-6 text-6xl font-semibold tracking-widest text-start text-white lg:py-64">
          Our work
        </h1>
      </div>

      {/* Centering PageIntro */}
      <div className="flex justify-center px-4 py-8">
        <div className="text-center max-w-3xl">
          <PageIntro
            eyebrow=""
            title="Impactful solutions for real-world problems."
          >
            <p className="text-lg text-gray-700">
              We are committed to efficiency and smart resource management,
              ensuring maximum value for our clients.
            </p>
          </PageIntro>
        </div>
      </div>

      <OurWork />
    </>
  );
};

export default WorkPage;
