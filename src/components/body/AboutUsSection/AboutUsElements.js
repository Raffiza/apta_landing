import styled from "styled-components";

export const AboutUsContainer = styled.div`
  /* background-color: green; */
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  /* background-color: beige; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 70px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 500px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    max-width: 300;
    justify-content: center;
  }
`;

export const RightContent = styled.div`
  display: flex;
  max-width: 600px;
  max-height: 500px;
`;

export const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-top: 22px;
  line-height: 2;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    text-align: center;
    white-space: normal;
    /* font-size: 1rem; */
  }
`;
export const ImageWrapper = styled.div`
  background-color: #000;
  max-height: 500px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    max-height: 0;
    max-width: 0;
  }
`;

export const ImageBg = styled.img`
  height: 100%;
  width: 100%;
  background-color: #000;
  object-fit: fill;
`;
