import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterSectionWrapper,
  FooterTextWrapper,
  FooterIconWrapper,
  FooterNavWrapper,
  TextWrapperContent,
  TextCompanyName,
  TextCompanyNumber,
  TextCompanyEmail,
  TextCompanyAddress,
  TextNav,
  IconWrapper,
  IconPhone,
  IconMail,
  IconIG,
  IconFB,
  IconTWT,
  FooterSectionDivider,
} from "./FooterElements";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <FooterSectionWrapper>
          <FooterTextWrapper>
            <TextCompanyName>APTA</TextCompanyName>
            <TextCompanyAddress>
              JL.BENDUNGAN ASAHAN NO.6 JAKARTA PUSAT 10210
            </TextCompanyAddress>
          </FooterTextWrapper>
          <FooterTextWrapper>
            <TextWrapperContent>
              <IconPhone />
              <TextCompanyNumber>+62 2526316</TextCompanyNumber>
            </TextWrapperContent>
            <TextWrapperContent>
              <IconMail />
              <TextCompanyEmail>INFO@APTAINDONESIA.COM</TextCompanyEmail>
            </TextWrapperContent>
          </FooterTextWrapper>
        </FooterSectionWrapper>
        <FooterSectionDivider/>
        <FooterSectionWrapper>
          <FooterIconWrapper>
            <IconWrapper>
              <IconIG />
              <IconFB />
              <IconTWT />
            </IconWrapper>
          </FooterIconWrapper>
          <FooterNavWrapper>
            <TextNav>
              About Us
            </TextNav>
            <TextNav>
              Services
            </TextNav>
            <TextNav>
              Projects
            </TextNav>
            <TextNav>
              Contact Us
            </TextNav>
          </FooterNavWrapper>
        </FooterSectionWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};
