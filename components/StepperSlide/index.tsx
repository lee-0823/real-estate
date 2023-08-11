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

  // 이 부분을 수정합니다
  return (
    <div
      style={{
        maxWidth: "800px",
        flexGrow: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {images.map((step, index) => (
        <div key={step.index}>
          {activeStep === step.index && (
            <img
              style={{
                height: "255px",
                display: "block",
                maxWidth: "400px",
                overflow: "hidden",
                width: "100%",
                position: "absolute",
                left: "50%",
                top: "0",
                transform: "translateX(-50%)",
              }}
              src={step.imgPath}
              alt={step.label}
            />
          )}
        </div>
      ))}
    </div>
  );
}
