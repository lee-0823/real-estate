import styled from "@emotion/styled";

export const BoxStyle = styled.div`
  div {
    width: 100%;
    height: 650px;
    background-color: #0c134f;
    color: #0c134f;
    :hover {
      background-color: #1d267d;
      color: white;
      transition: 0.3s ease;
      z-index: 3;
    }
  }
`;

export const HomeText = styled.div`
  display: flex;
  float: left;
  width: 50%;
  background-color: #0c134f;
  color: #0c134f;
  z-index: 2;
`;

export const CarouselStyle = styled.div`
  display: flex;
  float: right;
  width: 50%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
