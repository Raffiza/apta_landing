import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { BannerSection } from "../components/body/BannerSection";
import { ServicesSection } from "../components/body/ServicesSection";
import { AboutUsSection } from "../components/body/AboutUsSection";
import { ProjectsSection } from "../components/body/ProjectsSection";
import { Footer } from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <BannerSection/>
      <AboutUsSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <Footer/>
    </>
  );
};
