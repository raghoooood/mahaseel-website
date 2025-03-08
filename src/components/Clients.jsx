"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

import { 
  abosayyah, 
  estekana, 
  express, 
  mahasil, 
  medhatpasha, 
  parkmycar, 
  sahalnoom ,
  illustrate
} from '../images/clients/companies-jpg';
import { useEffect } from 'react';
import gsap from 'gsap';

// Companies logos array
const clients = [
  abosayyah,
  estekana,
  express,
  mahasil,
  medhatpasha,
  parkmycar,
  sahalnoom,
  illustrate
];

const Clients = () => {

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
    <section 
    className="py-10 md:py-6 px-12 relative bg-cover bg-center bg-no-repeat"
  >
      {/* Overlay to enhance readability */}
      <div className="absolute inset-0 bg-black/2"></div>

      <div className="relative z-10">
        {/* Heading */}
        <h1 className="portfolio-heading text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 text-center mb-12">
          OUR Companies
        </h1>

        {/* Carousel Section */}
        <div className="flex overflow-hidden [maskImage:linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)]">
          <motion.div
            className="flex gap-4 pr-4 -translate-x-1/2"
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] p-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-gray-200">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
