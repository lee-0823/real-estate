export interface FOOTERCONTENTS {
  cardContent1: {
    filed?: string;
    subFiled?: string;
  }[];
  cardContent2: {
    filed?: string;
    subFiled?: string;
  }[];
  cardContent3: {
    filed?: string;
    subFiled?: string;
  }[];
  cardContent4: {
    icon?: string;
    licontent?: string[];
  }[];
}

export const FOOTERCONTENTS = {
  footerContent1: {
    filed: "시행수탁사",
    subFiled: "신한자산신탁(주)",
  },
  footerContent2: {
    filed: "시행위탁사",
    subFiled: "(주)나르샤인",
  },
  footerContent3: {
    filed: "시공사",
    subFiled: "태산종합건설(주)",
  },
  footerContent4: [
    { icon: "아이콘" },
    {
      licontent: `※ 본 사이트의 설계, 개요, 일러스트, CG, 이미지, 지도 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르거나 변경될 수 있습니다.\n
    ※ CG 이미지의 주변 여건, 도로, 건물 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 현장을 확인하시기 바랍니다.\n
    ※ 조감도, 단지배치도, 평면설계도, 건물외관, 색채조경, 주변건물, 도로위치 등은 실제와 차이가 있을 수 있으며 인·허가 과정 및 시공과정에서 변경될 수 있습니다.\n
    ※ 본 사이트의 개발 및 교통 계획에 대한 사항은 관계기관의 사정에 따라 취소 및 변경 될 수 있으며, 이는 당사와 무관함을 알려드립니다.\n
    ※ 본 사이트의 내용은 제작 과정상 오탈자가 있을 수 있으므로 계약시 확인하시기 바랍니다.`,
    },
    {
      licontent:
        "온라인대행 : (주)유어비즈 서울 송파구 송파대로 167 문정역 테라타워A동 1222호  |  대표이사: 양희춘  |  사업자등록증 : 220-87-31452",
    },
    { licontent: "Copyrightⓒ2022 MEGACITY . All Right Reserved." },
    { licontent: "Creative & Marketing by YOURBIZ", link: "x" },
  ],
};
