import React from "react";
import {
  AboutUsContainer,
  ContentWrapper,
  LeftContent,
  RightContent,
  TextWrapper,
  Heading,
  Paragraph,
  ImageWrapper,
  ImageBg
} from "./AboutUsElements";

import AboutBg from '../../../images/aboutBg.jpg'

export const AboutUsSection = () => {
  return (
    <AboutUsContainer>
      <ContentWrapper>
        <LeftContent>
          <TextWrapper>
            <Heading>About us</Heading>
            <Paragraph>
              {`ABHIYANI PRADIPA NUSANTARA atau APTA adalah Anak Usaha dari ANAGATA DHIA KARYA MANDIRI (ADHIKARI).  
              
              APTA adalah perusahaan yang utamanya bergerak di bidang Learning and Human Capital, PMO and Business Incubation, dan IT Solution and Services.`}
            </Paragraph>
          </TextWrapper>
        </LeftContent>
        <RightContent>
          <ImageWrapper><ImageBg src={AboutBg}/></ImageWrapper>
        </RightContent>
      </ContentWrapper>
    </AboutUsContainer>
  );
};
