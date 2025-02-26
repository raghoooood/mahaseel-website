"use client";
import { useEffect, useId, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use for active path detection
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import Offices from "./Offices";
// import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import Container from "./Container";
import logo from '../images/clients/companies-png/logo.png';

const NAV_LINKS = [
  { name: "Portfolio", href: "/work" },
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
];

const Header = ({ panelId, expanded, onToggle, toggleRef }) => {
  const pathname = usePathname();

  return (
    <div className="border-b border-n-6 bg-n-80/90 top-0 left-0 w-full h-16 sm:h-20 flex justify-between items-center z-40 p-4 sm:p-5 transition-all duration-300">
      {/* Logo */}
      <Link href="/" aria-label="Home">
        <Image src={logo} alt="mahaseel-logo" width={145} />
      </Link>

      {/* Navigation (Visible only on Large Devices) */}
      <nav className="hidden lg:flex gap-x-8">
        {NAV_LINKS.map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`relative font-medium group transition-all duration-300 ${
              pathname === href ? "text-sky-600" : "text-black"
            }`}
          >
            {name}
            <span className={`absolute left-0 bottom-0 h-0.5 bg-sky-600 transition-all duration-300 ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
        ))}
      </nav>

      {/* Contact Button & Toggle */}
      <div className="flex items-center gap-x-8">
        <Button href="/contact" invert={false}>Contact us</Button>
        <button
          ref={toggleRef}
          type="button"
          onClick={onToggle}
          aria-expanded={expanded.toString()}
          aria-controls={panelId}
          className="group -m-2.5 rounded-full p-2.5 transition hover:bg-sky-600"
          aria-label="Toggle navigation"
        >
          {expanded ? <IoMdClose className="h-6 w-6 fill-white" /> : <HiMenuAlt4 className="h-6 w-6 fill-black hover:fill-white" />}
        </button>
      </div>
    </div>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname(); // Detect current path

  // Close menu on navigation
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        {/* Fixed Header */}
        <div className="fixed left-0 right-0 top-0 z-50">
          <Header
            panelId={panelId}
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)}
          />
        </div>

        {/* Mobile Navigation (Visible only inside the toggle) */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0.5rem" }}
          className="relative z-50 overflow-hidden bg-black pt-2"
          aria-hidden={!expanded}
        >
          <motion.div layout className="bg-black">
            <div className="pb-16">
              <Header
                panelId={panelId}
                expanded={expanded}
                onToggle={() => setExpanded((prev) => !prev)}
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="lg:hidden flex flex-col space-y-4 px-6 py-4 bg-black text-white">
              {NAV_LINKS.map(({ name, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-white text-lg"
                  onClick={() => setExpanded(false)} // Close toggle on click
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Offices & Social Media */}
            <Container>
              <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                <div>
                  <h2 className="text-base font-semibold text-white">Our office</h2>
                  <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
                </div>
                {/* <div className="sm:border-l sm:pl-16">
                  <h2 className="text-base font-semibold text-white">Follow us</h2>
                  <SocialMedia className="mt-6" />
                </div> */}
              </div>
            </Container>
          </motion.div>
        </motion.div>
      </header>

      {/* Main Content */}
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div layout className="relative isolate flex w-full flex-col pt-20"> {/* Added pt-20 to push content below navbar */}
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default RootLayoutInner;
