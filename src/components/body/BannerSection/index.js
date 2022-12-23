import React from 'react'
import { BannerContainer,BannerBg,BannerContent,BannerH1,BannerButtonWrapper } from './BannerElements'
import {Button} from '../../ButtonElements'
import BannerImg from '../../../images/bannerBg.png'


export const BannerSection = () => {
  return (
    <BannerContainer id="banner">
        <BannerBg src={BannerImg}/>
        <BannerContent>
            <BannerH1>Lorem Ipsum</BannerH1>
            <BannerButtonWrapper>
            <Button 
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary='true'
            >
              More About Us</Button>
            </BannerButtonWrapper>
        </BannerContent>
    </BannerContainer>
  )
}
