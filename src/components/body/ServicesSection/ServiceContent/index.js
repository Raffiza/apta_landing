import React from "react";
import {
  ServicesWrapper,
  ServicesRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./ServicesContentElements";
export const ServicesContent = ({lightBg, id, imgStart,headLine,lightText,darkText,description,img,alt}) => {
  return (
      <ServicesWrapper lightBg={lightBg} id={id}>
        <ServicesRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
        </ServicesRow>
      </ServicesWrapper>
  );
};
