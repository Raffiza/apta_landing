import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesBox,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from '../../../images/icon-1.svg';
import Icon2 from '../../../images/icon-2.svg';
import Icon3 from '../../../images/icon-3.svg';

export const ServicesSection = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesBox>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Services 1</ServicesH2>
          <ServicesP>
            Kami mengembangkan pelatihan terkait dengan Public Private
            Partnership, Risk Management, Financial Model, Health, Safety and
            Environtment (HSE), Excel for Banking, Sistem Akuntabilitas Kinerja
            Instansi Pemenrintah (SAKIP), Talent Mapping, dan IT Training
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Services 2</ServicesH2>
          <ServicesP>
          Kami mengembangkan pelatihan terkait dengan Public Private
            Partnership, Risk Management, Financial Model, Health, Safety and
            Environtment (HSE), Excel for Banking, Sistem Akuntabilitas Kinerja
            Instansi Pemenrintah (SAKIP), Talent Mapping, dan IT Training
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Services 3</ServicesH2>
          <ServicesP>
          Kami mengembangkan pelatihan terkait dengan Public Private
            Partnership, Risk Management, Financial Model, Health, Safety and
            Environtment (HSE), Excel for Banking, Sistem Akuntabilitas Kinerja
            Instansi Pemenrintah (SAKIP), Talent Mapping, dan IT Training
          </ServicesP>
        </ServicesBox>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
