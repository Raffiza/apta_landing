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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenuWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
      </SidebarMenuWrapper>
    </SidebarContainer>
  );
};
