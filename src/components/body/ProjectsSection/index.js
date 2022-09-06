import React,{ useState } from "react";
import { ProjectsContainer,ProjectsH1,ProjectsWrapper,LeftContent, RightContent, TextWrapper, ButtonWrapper, SliderWrapper, ProjectsH2, ProjectsP, Button, ProjectsImg, ProjectsImgInactive, ProjectsImgActive} from "../ProjectsSection/ProjectsElements";
import { SliderData } from "./SliderData";


export const ProjectsSection = () => {

  const [current,setCurrent] = useState(0)
  const [next,setNext] = useState(1)
  const [prev,setPrev] = useState(2)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setPrev(prev === length - 1 ? 0 : prev + 1)
    setNext(next === length - 1 ? 0 : next + 1)
    
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setPrev(prev === 0 ? length - 1 : prev - 1)
    setNext(next === 0 ? length - 1 : next - 1)
    
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>
        Projects We've Done
      </ProjectsH1>
      <ProjectsWrapper>
        <LeftContent>
          <TextWrapper>
            <ProjectsH2>
              MusafirApp
            </ProjectsH2>
            <ProjectsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </ProjectsP>
          </TextWrapper>
          <ButtonWrapper>
            <Button>Download Here</Button>
          </ButtonWrapper>
        </LeftContent>
        <RightContent>
          <SliderWrapper>
          <ProjectsImgInactive src={SliderData[prev].image} alt="musafirapp" onClick={prevSlide}/>
          <ProjectsImgActive src={SliderData[current].image} alt="musafirapp"/>
          <ProjectsImgInactive src={SliderData[next].image} alt="musafirapp" onClick={nextSlide}/>
          </SliderWrapper>
        </RightContent>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};
