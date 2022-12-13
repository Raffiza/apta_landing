import React from "react";
import {
  ServicesContainer,
  ServicesH1
 
} from "./ServicesElements";
import { ServicesContent } from "./ServiceContent";
import { homeObjOne,homeObjTwo,homeObjThree } from "./ServiceContent/ServicesData";

export const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
        {/* <ServicesBox>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Learning & Human Capital</ServicesH2>
          <ServicesP>
            Kami mengembangkan pelatihan terkait dengan Public Private
            Partnership, Risk Management, Financial Model, Health, Safety and
            Environtment (HSE), Excel for Banking, Sistem Akuntabilitas Kinerja
            Instansi Pemenrintah (SAKIP), Talent Mapping, dan IT Training
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon2} />
          <ServicesH2>PMO & Business incubation</ServicesH2>
          <ServicesP>
            Kami menjembatani berbagai aktivitas terkait dengan manajemen proyek
            seperti penyiapan pengadaan, pengawasan pelakasanaan proyek,
            menyiapkan alat pendukung pengawasan, proyek, dan memberikan saran
            untuk perbaikan pelaksanaan proyek.
          </ServicesP>
        </ServicesBox>
        <ServicesBox>
          <ServicesIcon src={Icon3} />
          <ServicesH2>IT Solution & Services</ServicesH2>
          <ServicesP>
            Selain menyediakan koneksi internet, APTA juga mengembangkan
            berbagai aplikasi seperti PPP Transaksi Data Room, KPBU Monitoring
            Tools, SAKIP Tools, Muslim Travelers Guide, e-Pengadaan Barang dan
            Jasa, Printing Management Services, APTA Podcast, Website Design,
            dan Digital Marketing Campaign.
          </ServicesP>
        </ServicesBox> */}
       <ServicesContent {...homeObjOne}/>
       <ServicesContent {...homeObjTwo}/>
       <ServicesContent {...homeObjThree}/>
    </ServicesContainer>
  );
};
