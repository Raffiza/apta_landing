import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: right;
  align-items: flex-start;
  padding: 0 30px;
  height: 660px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px){
    justify-content: center;
    align-items: center;
  }
`;

export const BannerBg = styled.image`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #7d7b7b;
`;

export const BannerContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 160px;

    @media screen and (max-width: 768px) {
        margin-top: 0px;
    }
`

export const BannerH1 = styled.h1`
    color: #000;
    font-size:64px;
    text-align: right;

    @media screen and (max-width: 768px) {
        font-size: 58px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }
`
