import styled from "@emotion/styled";

export const BoxStyle = styled.div<{ visible: boolean }>`
  display: inline-flex;
  width: 100%;
  height: 650px;
  position: relative;
  /* background-color: #0c134f; */
  color: #0c134f;

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
  position: relative;
  /* visibility: hidden; */
  color: white;
  width: 50%;
  top: 50px;
  left: 300px;
  height: 100px;
  z-index: 2;
  /* :hover {
    
  } */
`;

export const CarouselStyle = styled.div`
  width: 50%;
  z-index: 1;
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
