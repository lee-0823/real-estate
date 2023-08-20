import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  background-color: #0c134f;
`;

export const GrayBox = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  top: 400px;
  left: 0%;

  z-index: 4;
  background-color: gray;
`;

export const HomeText = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 650px;

  top: -50px;

  left: 100px;

  color: white;

  /* background-color: green; */

  /* :hover {
    
  } */
`;

export const TextBox = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;

  top: -200px;

  padding: 125px 20px;
  z-index: 5;

  background-color: pink;
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
  position: relative;
  width: 100%;
  height: 100%;

  top: -525px;

  background-color: red;
  z-index: 6;
`;

export const BackImage = styled.div`
  background-color: yellow;

  .img {
    z-index: 999;

    background-size: contain;

    vertical-align: top;
    border: none;
  }
`;
