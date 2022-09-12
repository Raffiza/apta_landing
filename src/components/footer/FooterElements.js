import styled from "styled-components";
import {BsInstagram} from "react-icons/bs";

export const FooterContainer = styled.div`
    max-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3D4144;
    padding: 50px 50px;
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FooterTextWrapper = styled.div`
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-row-gap: 10px;
    margin-top: 40px;
`

export const FooterIconWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
export const FooterH1 = styled.h1`
    font-size: 2rem;
    color: white;
    text-align: center;
`
export const TextCompanyNumber = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`
export const TextCompanyEmail = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`
export const TextCompanyAddress = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`

export const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const IconIG = styled(BsInstagram)`
color: #F3BD3D;
font-size: 1.8rem;
`