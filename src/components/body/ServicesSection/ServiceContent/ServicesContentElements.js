import styled from "styled-components";

export const ServicesWrapper = styled.div` 
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: ${({lightBg}) => (lightBg ? '#fff' : '#125AA4')};
`;


export const ServicesRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` :  `'col1 col1''col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 16px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 16px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 64px;
line-height: 1.1;
font-weight: 800;

color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 768px){
  text-align: center;

}

@media screen and (max-width: 480px){
    font-size: 48px;
}
`
export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 20px;
  text-align: justify;
  line-height: 2;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
  
    @media screen and (max-width: 768px){
        text-align: center;
    }
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
margin: 0;

@media screen and (max-width: 768px){
    max-width: 400px;
}
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`