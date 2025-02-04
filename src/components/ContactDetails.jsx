"use client";
import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneDisconnectBold } from "react-icons/pi";

const ContactDetails = () => {
  // Load environment variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "00971524369422";
  const phoneNumber = "+971524369422";
  const landlineNumber = "+97145772038";
  const emailAddress = "info@mahaseelinvestment.com";
  const officeAddress = "Blue Bay Tower, Business Bay, Dubai, Office 711";

  // WhatsApp click function
  const handleWhatsAppClick = () => {
    const message = "Hello, I am interested in your services!";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <FadeIn>
      {/* Office Section */}
      <h2 className="font-display text-lg font-semibold text-neutral-950">Our Office</h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t, but we have to list our addresses here for legal reasons.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      {/* Contact Details Section */}
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-lg font-semibold text-neutral-950">Contact Us</h2>
        <div className="mt-6 flex flex-col gap-6">
          {/* Email */}
          <Link
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-3 text-neutral-600 hover:text-neutral-950 transition"
          >
            <FaEnvelope size={22} className="text-sky-900" />
            <span className="text-base font-medium">{emailAddress}</span>
          </Link>

          {/* Phone */}
          <Link
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 text-neutral-600 hover:text-neutral-950 transition"
          >
            <FaPhoneAlt size={22} className="text-green-600" />
            <span className="text-base font-medium">{phoneNumber}</span>
          </Link>

          {/* Landline */}
          <Link
            href={`tel:${landlineNumber}`}
            className="flex items-center gap-3 text-neutral-600 hover:text-neutral-950 transition"
          >
            <PiPhoneDisconnectBold size={22} className="text-blue-500" />
            <span className="text-base font-medium">{landlineNumber}</span>
          </Link>

          {/* WhatsApp
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 text-neutral-600 hover:text-neutral-950 transition"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} className="text-green-500" />
            <span className="text-base font-medium">WhatsApp Chat</span>
          </button> */}

         
        </div>
      </Border>

      {/* Social Media */}
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-lg font-semibold text-neutral-950">Follow Us</h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
