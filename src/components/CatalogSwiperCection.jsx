"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
    midhat1, midhat2, midhat3, sahalnoom1, sahalnoom2
} from '@/images/companies-images';

export default function CatalogSwiperSection() {
    return (
        <div className="py-8 lg:py-28 px-14">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Our Portfolio</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider">Hospitality Ventures</h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>Our robust portfolio represents a blend of innovation and operational efficiency</p>
                        </div>
                        <div>
                            <p>showcasing the breadth and depth of our investments</p>
                            <Link href="/work" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">
                                View Gallery <TbArrowUpRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 30 }, // Add spacing between images
                    1024: { slidesPerView: 3, spaceBetween: 40 }, // Adjust for larger screens
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true} // Keeps infinite motion
                speed={2000} // Controls smooth motion speed
                modules={[Autoplay]}
            >
                {[sahalnoom1, sahalnoom2, midhat1, midhat2, midhat3].map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="sm:w-[460px] h-[330px] w-[340px] ">
                            <Image
                                src={image}
                                alt="LOGO"
                                width={520}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
