import { FOOTERCONTENTS } from "@/constances/footerContents";
import { Grid, Button } from "@mui/material";
import {
  FooterStyle,
  FooterList,
  FooterImg,
  FooterContent,
  FooterButton,
} from "./style";
import Link from "next/link";

// import { SuppressHydrationWarning } from "react";

export function Footer() {
  const footerContentsList = Object.values(FOOTERCONTENTS);

  //   // 객체를 배열로 변환
  //   const cardContentsList = Object.values(CARDCONTENTS);

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={4} md={4}>
          <FooterList>
            <ul>
              <li>
                시행수탁사
                <span>신한자산신탁(주)</span>
              </li>
            </ul>
          </FooterList>
        </Grid>
        <Grid item xs={4} md={4}>
          <FooterList>
            <ul>
              <li>
                시행위탁사
                <span>(주)나르샤인</span>
              </li>
            </ul>
          </FooterList>
        </Grid>
        <Grid item xs={4} md={4}>
          <FooterList>
            <ul>
              <li>
                시행수탁사
                <span>태산종합건설(주)</span>
              </li>
            </ul>
          </FooterList>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3} md={3}>
          <FooterImg>
            <img src="/img/FooterLogo/FooterLogo.png" />
          </FooterImg>
        </Grid>
        <Grid item xs={7} md={7}>
          <FooterContent>
            <div>
              <div>
                ※ 본 사이트의 설계, 개요, 일러스트, CG, 이미지, 지도 등은
                소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르거나 변경될
                수 있습니다.<br></br> ※ CG 이미지의 주변 여건, 도로, 건물 등은
                소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니
                현장을 확인하시기 바랍니다.<br></br> ※ 조감도, 단지배치도,
                평면설계도, 건물외관, 색채조경, 주변건물, 도로위치 등은 실제와
                차이가 있을 수 있으며 인·허가 과정 및 시공과정에서 변경될 수
                있습니다. <br></br>※ 본 사이트의 개발 및 교통 계획에 대한 사항은
                관계기관의 사정에 따라 취소 및 변경 될 수 있으며, 이는 당사와
                무관함을 알려드립니다.<br></br> ※ 본 사이트의 내용은 제작 과정상
                오탈자가 있을 수 있으므로 계약시 확인하시기 바랍니다.
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
          </FooterContent>
        </Grid>
        <Grid item xs={2} md={2}>
          <FooterButton>
            <Button variant="outlined" color="warning" href="/">
              TOP
            </Button>
          </FooterButton>
        </Grid>
      </Grid>
    </FooterStyle>
  );
}
