"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaCalendarAlt,
  FaHome,
  FaChair,
  FaTable,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import { ourWork } from "@/utils/WorkCardData";

gsap.registerPlugin(ScrollTrigger);

const ImageSlider = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.set(sectionsRef.current, { opacity: 0.9 });

    ourWork.forEach((item, index) => {
      gsap.to(sectionsRef.current[index], {
        opacity: 1,
        duration: 3.9,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionsRef.current[index],
          start: "top 80%",
          end: "top 10%",
          scrub: true,
          onEnter: () => {
            gsap.to(sectionsRef.current[index], { opacity: 1 });
          },
          onLeave: () => {
            gsap.to(sectionsRef.current[index], { opacity: 0.2 });
          },
          onLeaveBack: () => {
            gsap.to(sectionsRef.current[index], { opacity: 0.5 });
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.fromTo(
      ".portfolio-heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".portfolio-heading",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen flex flex-col items-center py-10">
      {/* Heading */}
      <h1 className="portfolio-heading text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 text-center mb-12">
        OUR Portfolio
      </h1>

      {ourWork.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full max-w-5xl p-6 bg-white rounded-lg my-6"
        >
          {/* Image on the Left */}
          <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center sm:justify-start">
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={400}
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Information on the Right */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.description}</p>

            <div className="mt-4 text-gray-600">
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaMapMarkerAlt className="mr-2 text-lg" />
                <p>
                  <strong>Address:</strong> {item.address}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaBuilding className="mr-2 text-lg" />
                <p>
                  <strong>Type:</strong> {item.type}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaHome className="mr-2 text-lg" />
                <p>
                  <strong>Area:</strong> {item.area}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaChair className="mr-2 text-lg" />
                <p>
                  <strong>Chairs:</strong> {item.chairs}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaTable className="mr-2 text-lg" />
                <p>
                  <strong>Tables:</strong> {item.tables}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaUsers className="mr-2 text-lg" />
                <p>
                  <strong>Employees:</strong> {item.numOfEmployees}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaChartLine className="mr-2 text-lg" />
                <p>
                  <strong>Avg Monthly Visits:</strong> {item.AvgMonthlyVisits}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-center sm:justify-start">
                <FaCalendarAlt className="mr-2 text-lg" />
                <p>
                  <strong>Establishment Date:</strong> {item.establishmentDate}
                </p>
              </div>
            </div>

            <Link href={item.link} className="mt-4 inline-block relative group">
              <button className="relative px-8 py-3 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-500 to-sky-600 border-2 border-transparent before:absolute before:border-transparent before:rounded-xl before:bg-gradient-to-r before:from-sky-400 before:to-blue-500 before:opacity-0 before:transition-opacity">
                <span className="relative flex items-center gap-2">
                  Visit {item.title}
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
