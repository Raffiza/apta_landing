import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenuWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenuWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            About Us
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
          >
            Contact Us
          </SidebarLink>
        </SidebarMenu>
      </SidebarMenuWrapper>
    </SidebarContainer>
  );
};
