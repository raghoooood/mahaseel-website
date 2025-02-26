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
        title="Impactful solutions for real-world problems."
      >
        <p>
                
        We are committed to efficiency and smart resource management, ensuring maximum value for our clients.
        </p>
      </PageIntro>

      {/* Add OurWork component below the PageIntro */}
      <OurWork/>  {/* This will render the work cards grid */}
    </>
  );
};

export default WorkPage;
