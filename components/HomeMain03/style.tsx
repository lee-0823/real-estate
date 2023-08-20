import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  background-color: #0c134f;
`;

export const HomeText = styled.div`
  /* position: relative; */
  /* visibility: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  padding-top: 50px;

  color: white;

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

  .span {
    color: ${({ color }) => color ?? "white"};
    font-size: ${({ fontSize }) => fontSize ?? 16}px;
    margin: ${({ margin }) => margin ?? 0};
  }
`;

export const StyledList = styled.div`
  display: flex;

  width: 100%;
  height: 500px;

  padding-top: 50px;

  /* div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 18px;

    :hover {
      color: lightyellow;
      background-color: white;
    }
  } */
  ul {
    width: 100%;
    height: 150px;

    list-style-type: none;
    font-size: 24px;

    /* :hover {
      color: lightyellow;
      background-color: white;
    } */
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0 100px;

    line-height: 35px;
  }
`;
