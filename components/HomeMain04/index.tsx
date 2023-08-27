import { Grid } from '@mui/material';
import {
  SectionStyle,
  GrayBox,
  HomeText,
  TextBox,
  Text,
  BackImageDiv,
  BackImage,
} from './style';

export function HomeMain04() {
  return (
    <SectionStyle>
      <Grid container>
        <GrayBox />
        <Grid item xs={4} md={4}>
          <HomeText>
            <TextBox>
              <Text fontSize={18} color='white' margin='0'>
                MEGACITY
              </Text>
              <br></br>
              <Text fontSize={42} color='white' margin='0'>
                디테일의 차이가
              </Text>
              <br></br>
              <Text fontSize={42} color='white' margin='0'>
                프리미엄의 차이
              </Text>
              <br></br>
              <Text fontSize={24} color='white' margin='0'>
                메가시티에는 고객감동을 위한 디테일이 있습니다.
              </Text>
              <br></br>
            </TextBox>
          </HomeText>
        </Grid>
        <Grid item xs={8} md={8}>
          <BackImageDiv>
            <BackImage>
              <img
                src={
                  process.env.BACKEND_URL + '/img/HomeMain04/HomeMain04Img.png'
                }
                width={1400}
                height={850}
              />
            </BackImage>
          </BackImageDiv>
        </Grid>
      </Grid>
    </SectionStyle>
  );
}
