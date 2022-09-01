import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesBox, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

export const ServicesSection = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesBox>
                <ServicesIcon/>
                <ServicesH2>Services 1</ServicesH2>
                <ServicesP>lorem ipsum</ServicesP>
            </ServicesBox>
            <ServicesBox>
                <ServicesIcon/>
                <ServicesH2>Services 2</ServicesH2>
                <ServicesP>lorem ipsum</ServicesP>
            </ServicesBox>
            <ServicesBox>
                <ServicesIcon/>
                <ServicesH2>Services 3</ServicesH2>
                <ServicesP>lorem ipsum</ServicesP>
            </ServicesBox>
        </ServicesWrapper>
    </ServicesContainer>
  )
}
