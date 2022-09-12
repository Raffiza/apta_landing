import styled from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 80px;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-row-gap: 100px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1300px) {
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
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;

  @media screen and (max-width: 1300px) {
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
  max-height: 350px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ProjectsH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const ProjectsP = styled.p`
  font-size: 1.5rem;
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
  max-height: 300px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 20px 20px;
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
