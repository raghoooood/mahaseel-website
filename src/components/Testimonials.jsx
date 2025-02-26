import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";

const Testimonials = ({ children, client, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-sky-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-blue-100 stroke-blue-950/5 [mask-image:linear-gradient(to_bottom_left,blue_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Quote Section */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <blockquote className="relative font-display text-xl leading-relaxed font-medium tracking-tight text-neutral-700 sm:text-3xl text-2xl">
                <p className="before:content-['“'] after:content-['”']">
                  {children}
                </p>
              </blockquote>
              <figcaption className="mt-4 text-lg font-semibold text-gray-800">
                {client.name}
                <p className="text-sm text-gray-500">{client.position}</p> 
              </figcaption>
            </div>

            {/* Image Section */}
            <div className="mt-8 lg:mt-0 lg:w-1/3 flex justify-end">
              <Image
                src={client.logo}
                alt={client.name}
                width={300} // Increased size
                height={300} // Increased size
                className="object-cover rounded-full" // Added rounded-full
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
