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
        " relative isolate bg-sky-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-blue-100 stroke-blue-950/5 [mask-image:linear-gradient(to_bottom_left,blue_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-xl leading-relaxed font-medium tracking-tight text-neutral-700 sm:text-4xl text-2xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            {/* Image directly after the quote */}
            <figcaption className="mt-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>{client.name}</div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
