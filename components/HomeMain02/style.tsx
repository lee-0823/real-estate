import styled from "@emotion/styled";

export const SectionStyle = styled.div<{ visible: boolean }>`
  display: inline-flex;
  width: 100%;
  height: 1250px;
  position: relative;
  background-color: #0c134f;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  overflow: hidden;
  transition: 2s ease;

  /* :hover {
    .home-text {
      top: 0;
      color: white;
      width: 50%;
      height: 100px;
      transition: 0.3s ease;
      z-index: 2;
    } */
  /* background-color: #1d267d; */
  /* color: white;
    transition: 0.3s ease;
    z-index: 3; */
  /* } */
`;

export const HomeText = styled.div`
  /* @media (max-width : 394px) {
 
} */

  position: relative;
  /* visibility: hidden; */
  color: white;
  width: 100%;
  top: 25px;
  left: 300px;
  height: 100px;
  z-index: 2;
  /* :hover {
    
  } */
`;

export const Text = styled.p<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  color: ${({ color }) => color ?? "white"};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;
  margin: ${({ margin }) => margin ?? 0};
`;

export const BackImageDiv = styled.div`
  position: absolute;
  top: 225px;
  left: 0;
  width: 100%;
  height: 1050px;
  z-index: 1;
`;

export const BackImage = styled.div`
  .img {
    background-size: cover;

    vertical-align: top;
    border: none;
  }
`;

export const CarouselStyle = styled.div`
  width: 50%;
  z-index: 3;
`;

export const HomeText2 = styled.div`
  position: relative;
  /* visibility: hidden; */
  color: white;
  width: 30%;
  height: 200px;
  top: 930px;
  right: 130px;

  background-color: gray;

  z-index: 4;
  /* :hover {
    
  } */
`;
