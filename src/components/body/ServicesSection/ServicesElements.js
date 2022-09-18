import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* background-color: blue; */

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 40px;
  padding: 0 50px;
  /* background-color: aliceblue; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;

export const ServicesBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 400px;
  max-width: 400px;
  padding: 20px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px){
    max-height: 600px;
  }
`;

export const ServicesIcon = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 20px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 20px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 2;
`;
