import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-gradient-to-r from-sky-500 to-sky-300 p-8 sm:p-12 md:p-16 shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl mb-6">
            We&apos;d Love to Hear From You!
          </h2>

          <p className="text-lg text-white opacity-80 mb-8">
            Have any questions or want to work with us? Don&apos;t hesitate to reach out!
          </p>

          <div className="flex justify-center mb-10">
            <Button href="/contact" className="px-8 py-3 text-lg font-semibold text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300 rounded-full shadow-lg">
              Say Hello
            </Button>
          </div>

          <div className="border-t border-white/10 pt-10">
            <h3 className="font-display text-xl font-semibold text-white mb-4">
              Our Offices
            </h3>
            <div className="flex justify-center">
              <Offices invert className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
