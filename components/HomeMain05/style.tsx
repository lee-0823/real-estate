import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  background-color: #0c134f;
`;

export const KakaoMap = styled.div`
  width: 500px;
  height: 400px;

  background-color: green;
`;

export const HomeText = styled.div`
  /* position: relative; */
  /* visibility: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 1000px;
  padding-top: 100px;

  color: white;

  .span {
    display: inline;
  }

  /* background-color: red; */

  /* :hover {
    
  } */
`;

/* text-align: center; */
export const Text = styled.p<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  color: ${({ color }) => color ?? "white"};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;
  margin: ${({ margin }) => margin ?? 0};
`;
