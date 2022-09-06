import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 80px;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  /* background-color: beige; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 100px;
  margin: 0 auto;
  /* padding: 0 50px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RightContent = styled.div``;

export const TextWrapper = styled.div`
max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
max-height: 350px;
max-width: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

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

export const ProjectsImgActive = styled.img`
max-height: 350px;
max-width: 350px;
`

export const ProjectsImgInactive = styled.img`
max-height: 230px;
max-width: 230px;


`


