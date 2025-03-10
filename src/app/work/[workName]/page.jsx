"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ourWork } from "@/utils/WorkCardData";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WorkDetail = () => {
  const pathname = usePathname();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract the workName from the pathname
  const workName = pathname?.split("/").pop()?.toLowerCase();
  const workItem = ourWork.find((item) => item.title.toLowerCase() === workName);
  
  // Handle missing work item
  const allImages = workItem ? [workItem.img, ...workItem.images] : [];

  // Memoize the functions using useCallback
  const showNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  }, [allImages.length]);

  const showPrevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        if (event.key === "ArrowRight") showNextImage();
        if (event.key === "ArrowLeft") showPrevImage();
        if (event.key === "Escape") setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, showNextImage, showPrevImage]);

  // Render conditionally based on workItem
  if (!workItem) {
    return <p className="text-center text-xl">Work not found</p>;
  }

  return (
    <div className="container py-12 px-4 mx-auto">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{workItem.name}</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">{workItem.description}</p>
      </div>

      {/* Main Image - Click to Open Overlay */}
      <div className="mb-8 flex justify-center">
        <Image
          src={workItem.img}
          alt={`${workItem.title} main image`}
          className="rounded-xl shadow-lg cursor-pointer w-full md:w-3/4 lg:w-1/2"
          onClick={() => {
            setSelectedImage(workItem.img);
            setCurrentIndex(0);
          }}
          width={600}
          height={400}
        />
      </div>

      {/* Gallery of Additional Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {workItem.images.map((imageSrc, index) => (
          <div key={index} className="flex justify-center p-2">
            <Image
              src={imageSrc}
              alt={`Image ${index + 1}`}
              className="rounded-lg w-full h-auto max-w-xs md:max-w-md lg:max-w-lg transition-transform transform hover:scale-105 cursor-pointer"
              style={{ objectFit: "cover" }}
              onClick={() => {
                setSelectedImage(imageSrc);
                setCurrentIndex(index + 1);
              }}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>

      {/* Overlay for Full-Screen Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="relative max-w-4xl w-full flex items-center">
            {/* Previous Button */}
            <button
              className="absolute left-4 text-white bg-gray-700 hover:bg-gray-900 rounded-full p-3"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}
            >
              <FaArrowLeft size={24} />
            </button>

            {/* Full-Screen Image */}
            <Image
              src={allImages[currentIndex]}
              alt="Selected Work Image"
              className="rounded-lg w-full h-auto max-h-[80vh] object-contain"
              width={800}
              height={600}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 text-white bg-gray-700 hover:bg-gray-900 rounded-full p-3"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              <FaArrowRight size={24} />
            </button>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-900 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkDetail;
