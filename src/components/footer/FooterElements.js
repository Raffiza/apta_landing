import styled from "styled-components";
import { BsInstagram, BsFacebook, BsTwitter,BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export const FooterContainer = styled.div`
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d4144;

  @media screen and (max-width: 768px) {
    padding: 16px 16px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px 50px;

  @media screen and (max-width: 768px) {
    padding: 16px 16px;
  }
`;

export const FooterSectionDivider = styled.div`
display: flex;
width: 100%;
height: 1px;
background-color: #f3bd3d;
margin: 50px 0;
`

export const FooterSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 50px;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  max-width: 200px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  grid-row-gap: 10px;
`;

export const TextWrapperContent = styled.div`
display: flex;
align-items: center;
  grid-column-gap: 20px;
flex-direction: row;
grid-column-gap: 10px;

`

export const FooterIconWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const FooterNavWrapper = styled.div`
display: grid;
`

export const TextCompanyName = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
export const TextCompanyNumber = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;
export const TextCompanyEmail = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;
export const TextCompanyAddress = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: left;
`;

export const IconWrapper = styled.div`
  display: flex;
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const IconPhone = styled(BsFillTelephoneFill)`
  color: #f3bd3d;
  font-size: 1.5rem;
`;

export const IconMail = styled(IoMail)`
  color: #f3bd3d;
  font-size: 1.5rem;
`;

export const IconIG = styled(BsInstagram)`
  color: #f3bd3d;
  font-size: 1.5rem;
`;

export const IconFB = styled(BsFacebook)`
  color: #f3bd3d;
  font-size: 1.5rem;
`;

export const IconTWT = styled(BsTwitter)`
  color: #f3bd3d;
  font-size: 1.5rem;
`;
