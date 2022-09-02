import React from 'react'
import { BannerContainer,BannerBg,BannerContent,BannerH1 } from './BannerElements'
import BannerImg from '../../../images/bannerBg.png'


export const BannerSection = () => {
  return (
    <BannerContainer id="banner">
        <BannerBg src={BannerImg}/>
        <BannerContent>
            <BannerH1>Lorem Ipsum</BannerH1>
        </BannerContent>
    </BannerContainer>
  )
}
