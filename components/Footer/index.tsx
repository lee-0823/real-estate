import { FOOTERCONTENTS } from "@/constances/footerContents";
import { Grid } from "@mui/material";
import { FooterStyle, StyledList } from "./style";
import Link from "next/link";

// import { SuppressHydrationWarning } from "react";

export function Footer() {
  //   // 객체를 배열로 변환
  //   const cardContentsList = Object.values(CARDCONTENTS);

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={4} md={4}>
          <StyledList>
            <ul>
              <li>
                <span>시행수탁사</span>신한자산신탁(주)
              </li>
            </ul>
          </StyledList>
        </Grid>
        <Grid item xs={4} md={4}>
          <StyledList>
            <ul>
              <li>
                <span>시행위탁사</span>(주)나르샤인
              </li>
            </ul>
          </StyledList>
        </Grid>
        <Grid item xs={4} md={4}>
          <StyledList>
            <ul>
              <li>
                <span>시행수탁사</span>태산종합건설(주)
              </li>
            </ul>
          </StyledList>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} md={2}>
          <StyledList>
            <div>
              <img src="/img/LogoImg/logo.png" width={200} height={100} />
            </div>
          </StyledList>
        </Grid>
        <Grid item xs={8} md={8}>
          <StyledList>
            <div>
              <div>
                ※ 본 사이트의 설계, 개요, 일러스트, CG, 이미지, 지도 등은
                소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르거나 변경될
                수 있습니다. ※ CG 이미지의 주변 여건, 도로, 건물 등은 소비자의
                이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 현장을
                확인하시기 바랍니다. ※ 조감도, 단지배치도, 평면설계도, 건물외관,
                색채조경, 주변건물, 도로위치 등은 실제와 차이가 있을 수 있으며
                인·허가 과정 및 시공과정에서 변경될 수 있습니다. ※ 본 사이트의
                개발 및 교통 계획에 대한 사항은 관계기관의 사정에 따라 취소 및
                변경 될 수 있으며, 이는 당사와 무관함을 알려드립니다. ※ 본
                사이트의 내용은 제작 과정상 오탈자가 있을 수 있으므로 계약시
                확인하시기 바랍니다.
              </div>
              <div>
                온라인대행 : (주)유어비즈 서울 송파구 송파대로 167 문정역
                테라타워A동 1222호  |  대표이사: 양희춘  |  사업자등록증 :
                220-87-31452
              </div>
              <div>Copyrightⓒ2022 MEGACITY . All Right Reserved.</div>
              <div>
                Creative & Marketing by <Link href="/">YOURBIZ</Link>
              </div>
            </div>
          </StyledList>
        </Grid>
        <Grid item xs={2} md={2}>
          <StyledList>
            <div>
              <Link href="/">
                <span>TOP</span>
              </Link>
            </div>
          </StyledList>
        </Grid>
      </Grid>
    </FooterStyle>
  );
}
