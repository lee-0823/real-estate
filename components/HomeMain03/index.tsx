import { CARDCONTENTS } from "@/constances/cardContents";
import { Grid } from "@mui/material";
import { SectionStyle, HomeText, Text, StyledList } from "./style";

// import { SuppressHydrationWarning } from "react";

export function HomeMain03() {
  // 객체를 배열로 변환
  const cardContentsList = Object.values(CARDCONTENTS);

  return (
    <SectionStyle>
      <HomeText>
        <Text fontSize={38} color="white" margin="0">
          특화설계
          <span>메가시티만의 가치를 더한 맞춤설계</span>
        </Text>
      </HomeText>
      <Grid container>
        {cardContentsList.map((cardContents: any, index: number) => (
          // 배열로 변환한 카드 컨텐츠 리스트를 map 함수로 사용
          <Grid item xs={3} md={3} key={index}>
            <StyledList>
              <ul>
                <li>{cardContents[0].icon}</li>
                <br></br>
                <li>{cardContents[1].label}</li>
                <br></br>
                <li>{cardContents[2].image}</li>
              </ul>
            </StyledList>
          </Grid>
        ))}
      </Grid>
    </SectionStyle>
  );
}
