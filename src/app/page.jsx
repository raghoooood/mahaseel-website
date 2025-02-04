"use client";

import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import StylizedImage from "@/components/StylizedImage";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { midhat6 } from "@/images/companies-images";
import ImageSlider from "@/components/ImageSlider";
import Container from "@/components/Container";
import bg1 from '../images/bg-1.jpg'

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col w-full h-screen top-0 py-12 px-6 sm:px-10 lg:px-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bg1}
            alt="Background image"
            fill
            className="rounded-t-4xl rounded-b-[170px] object-cover opacity-50"
            priority
          />
        </div>

        {/* Content Wrapper */}
        <Container className="relative z-10 flex flex-col items-center lg:items-start h-full justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Side: Text Content */}
            <FadeIn className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950">
                Investing in businesses that shape tomorrow
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-neutral-500 py-4">
                <Typewriter
                  words={[
                    "From Vibrant cafés and restaurants",
                    "to Efficient parking services",
                    "& impactful marketing solutions",
                  ]}
                  loop={0} // Infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="mt-6 text-lg sm:text-md text-neutral-800 leading-relaxed font-semibold">
                At Mahaseel Investment, we believe in creating long-term value through strategic investments and exceptional management.
              </p>
              <button className="mt-6 px-6 w-36 bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600 transition duration-300">
                Learn More
              </button>
            </FadeIn>

            {/* Right Side: Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <FadeIn className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[35rem] w-full overflow-hidden">
                <StylizedImage
                  src={midhat6}
                  sizes="(min-width: 1024px) 21rem, 11rem"
                  className="w-full h-auto object-cover"
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Clients Section */}

      <Clients />

      {/* Testimonials Section */}
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40 px-6 sm:px-10 lg:px-16"
        client={{ name: "Marwan Al Sayyah", logo: '' }}
      >
        At Mahaseel, we focus on identifying high-growth opportunities and building businesses that thrive in dynamic markets. Through strategic investments and innovative management, we aim to create long-term value while driving excellence and fostering success across our diverse portfolio.
      </Testimonials>

      {/* Image Slider */}
      <ImageSlider />

      {/* Services Section */}
      <Services />

      {/* Catalog Swiper Section */}
      <CatalogSwiperSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
