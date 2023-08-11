import * as React from "react";
import Box from "@mui/material/Box";

import { StepperSlide } from "@/components/StepperSlide";
import { BoxStyle, HomeText, CarouselStyle } from "./style";

import { images } from "@/constances/images";

export function HomeMain02() {
  return (
    <BoxStyle>
      <HomeText>
        <p>
          <span>당신의 지식산업센터,</span>
          <span>선택의 기준도 달라져야 합니다!</span>
        </p>
        <p>디테일의 차이가 만드는 메가 프리미엄 </p>
        <h3>양주 옥정 메가시티</h3>
      </HomeText>
      <CarouselStyle>
        <StepperSlide />
      </CarouselStyle>
    </BoxStyle>
  );
}
