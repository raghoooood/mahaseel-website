'use client';

import React from 'react';
import OurWorkCard from './OurWorkCard'; 
import { ourWork } from '@/utils/WorkCardData'; // Correct path to import ourWork array

const OurWork = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Grid for WorkCard Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {ourWork.length > 0 ? (
          ourWork.map((card) => (
            <div key={card.id} className="w-full flex justify-center">
              <div className="w-full max-w-[350px]">
                <OurWorkCard card={card} /> {/* Pass entire card as a single prop */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No work found</p>
        )}
      </div>
    </div>
  );
};

export default OurWork;
