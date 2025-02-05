'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const OurWorkCard = ({ card }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(card.link); // Navigate only when clicking the image
  };

  return (
    <div className="cursor-pointer flex flex-col rounded-lg overflow-hidden shadow-lg w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg transition-transform transform hover:scale-105 duration-300">
      {/* Clickable Image */}
      <div 
        className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 transition-transform transform hover:scale-105 duration-300"
        onClick={handleClick} // Only the image is clickable
      >
        <Image
          src={card.img}
          alt={card.title}
          className="object-cover w-full h-full"
          layout="fill"
          unoptimized
        />
        <div className="absolute h-1 inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      </div>

      {/* Non-clickable Title */}
      <div className="flex items-center border-t-2 justify-center bg-white dark:bg-CardDark p-3">
        <h3 className="text-md sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
          {card.title} {/* This is NOT clickable */}
        </h3>
      </div>
    </div>
  );
};

export default OurWorkCard;
