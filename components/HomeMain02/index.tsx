import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { StepperSlide } from "@/components/StepperSlide";
import {
  SectionStyle,
  HomeText,
  HomeText2,
  BackImageDiv,
  BackImage,
  CarouselStyle,
  Text,
} from "./style";
import { useEffect, useRef, forwardRef, useState } from "react";
import { images } from "@/constances/images";
// import { backImage } from "@/constances/backImage";

//Mui Button
export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      More about
    </Button>
  );
}

export const HomeMain02 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scrollAction = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset = ref.current?.offsetTop;
      if (elementOffset && scrollTop + windowHeight > elementOffset) {
        setVisible(true);
        window.removeEventListener("scroll", scrollAction);
      }
    };

    window.addEventListener("scroll", scrollAction);
  }, [visible]);
  return (
    <SectionStyle ref={ref} visible={visible}>
      <HomeText>
        <Text fontSize={24} color="white" margin="0">
          당신의 지식산업센터,
        </Text>
        <Text fontSize={24} color="white" margin="20px 0 0 0">
          선택의 기준도 달라져야 합니다!
        </Text>
        <Text fontSize={24} color="white" margin="0">
          디테일의 차이가 만드는 메가 프리미엄
        </Text>
        <Text fontSize={24} color="white" margin="20px 0 0 0">
          양주 옥정 메가시티
        </Text>
        {/* <p>
          <span>당신의 지식산업센터,</span>
          <span>선택의 기준도 달라져야 합니다!</span>
        </p>
        <p>디테일의 차이가 만드는 메가 프리미엄 </p>
        <h3>양주 옥정 메가시티</h3> */}
      </HomeText>
      <BackImageDiv>
        <BackImage>
          <img
            src={"/img/BackImg/HomeMain02BackImg.png"}
            width={1800}
            height={1050}
          />
        </BackImage>
      </BackImageDiv>
      <CarouselStyle>
        <StepperSlide />
      </CarouselStyle>
      <HomeText2>
        <Text fontSize={24} color="white" margin="0">
          디테일의 차이가 프리미엄의 차이!
        </Text>
        <Text fontSize={24} color="white" margin="20px 0 0 0">
          MEGA PREMIUM
        </Text>
        <Text fontSize={24} color="white" margin="0">
          오직 당신을 위한 공간,
        </Text>
        <Text fontSize={24} color="white" margin="20px 0 0 0">
          오직 당신을 위한 비즈니스
        </Text>
        <Text fontSize={24} color="white" margin="20px 0 0 0">
          오직 당신을 위한 미래
        </Text>
        <DisableElevation />
      </HomeText2>
    </SectionStyle>
  );
};
