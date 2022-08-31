import React from 'react'
import { BannerContainer,BannerBg,BannerContent,BannerH1 } from './BannerElements'


export const BannerSection = () => {
  return (
    <BannerContainer id="banner">
        <BannerBg/>
        <BannerContent>
            <BannerH1>Lorem Ipsum</BannerH1>
        </BannerContent>
    </BannerContainer>
  )
}
