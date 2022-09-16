import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  height: 660px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px){
    justify-content: center;
    align-items: center;
  }
`;

export const BannerBg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  background-color: black;
  opacity: 0.4;
  /* background: #7d7b7b; */
`;

export const BannerContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 0px;
    }
`

export const BannerH1 = styled.h1`
    color: #FFF;
    font-size:64px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 58px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`
