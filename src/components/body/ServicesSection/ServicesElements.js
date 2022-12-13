import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


@media screen and (max-width: 768px) {
  padding: 100px 0;
}
`; 

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;