export interface CARDCONTENTS {
  cardContent1: {
    icon?: string;
    label?: string;
    image?: string;
  }[];
  cardContent2: {
    icon?: string;
    label?: string;
    image?: string;
  }[];
  cardContent3: {
    icon?: string;
    label?: string;
    image?: string;
  }[];
  cardContent4: {
    icon?: string;
    label?: string;
    image?: string;
  }[];
}

export const CARDCONTENTS = {
  cardContent1: [
    { icon: "아이콘" },
    { label: "전호실 문앞까지 진입가능한 드라이브 & 도어투도어 시스템" },
    { image: "이미지예시" },
  ],
  cardContent2: [
    { icon: "아이콘" },
    { label: "화물 하역의 편의성을 높여줄 화물전용 로딩데크 제공" },
    { image: "이미지예시" },
  ],
  cardContent3: [
    { icon: "아이콘" },
    { label: "여유로운 주차가 가능한 넓은 확장형 주차공간" },
    { image: "이미지예시" },
  ],
  cardContent4: [
    { icon: "아이콘" },
    { label: "대형차량들까지 고려한 7M 광폭 램프폭 설계" },
    { image: "이미지예시" },
  ],
};
