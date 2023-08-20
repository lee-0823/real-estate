import { Grid } from "@mui/material";
import { SectionStyle, KakaoMap, HomeText, Text } from "./style";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export function HomeMain05() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b5c3db2ce9e3597ec7e7151541a0d5b9`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.824135, 127.0936999),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(
          37.824135,
          127.0936999
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <SectionStyle>
      <div>
        <HomeText>
          <span>Location</span>
          <br></br>
          <span>오시는길</span>
        </HomeText>
      </div>
      <Grid container>
        <Grid item xs={6} md={6}>
          <KakaoMap id="map"></KakaoMap>
          <HomeText>
            <Text fontSize={18} color="white" margin="0">
              흥보관
            </Text>
          </HomeText>
        </Grid>
        <Grid item xs={6} md={6}>
          <HomeText>
            <Text fontSize={18} color="white" margin="0">
              현장
            </Text>
          </HomeText>
        </Grid>
      </Grid>
    </SectionStyle>
  );
}
