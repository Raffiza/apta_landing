import React from "react";
import { SidebarContainer, Icon, CloseIcon ,SidebarMenuWrapper,SidebarMenu,SidebarLink} from "./SidebarElements";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenuWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About Us</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="projects">Projects</SidebarLink>
          <SidebarLink to="contact">Contact Us</SidebarLink>
        </SidebarMenu>
      </SidebarMenuWrapper>
    </SidebarContainer>
  );
};
