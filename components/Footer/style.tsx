import styled from "@emotion/styled";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 400px;

  font-family: Haettenschweiler, "Arial Narrow Bold", sans-serif;
  /* background-color: orange; */
`;

export const FooterList = styled.div`
  width: 100%;
  ul {
    width: 100%;
    border-bottom: solid 1px #ffffff26;
  }

  ul li {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    /* background-color: pink; */
  }

  ul li span {
    padding: 50px 20px;
    font-size: 18px;
  }
`;

export const FooterImg = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 45px;

  img {
    width: 200px;
    height: 50px;

    /* background-color: red; */
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 50px;
  font-size: 12px;
  /* background-color: green; */

  div {
    line-height: 30px;
  }

  a: link {
    /* text-decoration: underline; */
    /* font-weight: bold; */
    font-size: 14px;
    font-weight: bold;
  }
`;

export const FooterButton = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
