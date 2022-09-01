import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { BannerSection } from "../components/body/BannerSection";
import { ServicesSection } from "../components/body/ServicesSection";

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
      <ServicesSection/>
    </>
  );
};
