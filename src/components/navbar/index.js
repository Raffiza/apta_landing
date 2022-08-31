import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem,NavLinks} from './NavbarElements'

export const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="">
                APTA
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact Us</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}
