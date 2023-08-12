import { useState, useEffect } from "react";
import { images } from "@/constances/images";
// Box import를 제거합니다

export function StepperSlide() {
  const [activeStep, setActiveStep] = useState(0);

  // 효과 적용
  useEffect(() => {
    const autoPlayTimer = setTimeout(() => {
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 3000); // 이미지 변환 간격을 조절할 수 있습니다.

    return () => {
      clearTimeout(autoPlayTimer);
    };
  }, [activeStep]);
  return (
    <div
      style={{
        right: 0,
        top: "100px",
        position: "absolute",
        height: "750px",
        width: "400px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transform: `translateX(${-activeStep * 400}px)`,
          transition: "0.6s ease",
        }}
      >
        {images.map((step, index) => (
          <div key={step.index}>
            <img
              width="400px"
              height="750px"
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
