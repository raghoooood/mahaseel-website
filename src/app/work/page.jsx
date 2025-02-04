import PageIntro from "@/components/PageIntro";
import OurWork from "@/components/OurWork";  // Import OurWork component
import React from "react";

const WorkPage = () => {
  return (
    <>
  
            <div className="bg-[url('/aboutImage.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 px-6 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">Our work</h1>

            </div>
      <PageIntro
        eyebrow=""
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      {/* Add OurWork component below the PageIntro */}
      <OurWork/>  {/* This will render the work cards grid */}
    </>
  );
};

export default WorkPage;
