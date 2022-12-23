import styled from 'styled-components'
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
border-radius: 40px;
background: ${({primary}) => (primary ? '#125aa4' : '#f3bd3d')};
color: white;
font-size: ${({fontBig}) => (fontBig ? '1.5rem' : '1rem')};
cursor: pointer;
align-items: center;
justify-content: center;
outline: none;
border: none;
padding: 20px 48px;
filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`