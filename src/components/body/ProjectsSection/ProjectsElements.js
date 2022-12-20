import styled from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const ProjectsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    height: 1000px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 80px;
  font-family: "Manrope_ExtraBold";

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  padding: 50px 50px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    grid-row: 2;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ProjectsH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;

  @media screen and (max-width: 768px){
    font-size: 1.75rem;
  }
`;

export const ProjectsP = styled.p`
  font-size: 1.25rem;
  line-height: 2;

  @media screen and (max-width: 1100px){
    text-align: center;
  }
  

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: #125aa4;
  color: #fff;
  border-radius: 5px;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 20px 48px;
`;

export const ProjectsImgWrapper = styled.div`
  max-height: 450px;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px){
    max-height: 350px;
  max-width: 350px;
  }
`;

export const ProjectsImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: fill;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
  z-index: 1;
`;

export const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const NextIcon = styled(BsChevronCompactRight)`
  color: #000;
  height: 45px;
  width: 45px;
`;

export const PrevIcon = styled(BsChevronCompactLeft)`
  color: #000;
  height: 45px;
  width: 45px;
`;
