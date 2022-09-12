import React from "react";
import {
  FooterContainer,
  FooterH1,
  FooterWrapper,
  FooterTextWrapper,
  FooterIconWrapper,
  TextCompanyNumber,
  TextCompanyEmail,
  TextCompanyAddress,
  IconWrapper,
  IconIG
} from "./FooterElements";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <FooterH1>Contact Us</FooterH1>
        <FooterTextWrapper>
          <TextCompanyNumber>+62 2526316</TextCompanyNumber>
          <TextCompanyEmail>INFO@APTAINDONESIA.COM</TextCompanyEmail>
          <TextCompanyAddress>JL.BENDUNGAN ASAHAN NO.6 JAKARTA PUSAT 10210</TextCompanyAddress>
        </FooterTextWrapper>
        <FooterIconWrapper>
          <IconWrapper>
            <IconIG/>
          </IconWrapper>
        </FooterIconWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};
