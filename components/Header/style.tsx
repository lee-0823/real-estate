// import { backImage } from "@/constances/BackImage";
// import { Height } from "@mui/icons-material";

import styled from "@emotion/styled";

export const HeaderStyle = styled.header<{ open: boolean }>`
  position: fixed;
  display: flex;

  overflow: hidden;
  width: 100%;
  height: ${({ open }) => (open ? "200px" : "50px")};
  opacity: ${({ open }) => (open ? 1 : 0.5)};
  background-color: ${({ open }) => (open ? "#0c134f" : "none")};
  top: 0;
  left: 0;
  z-index: 999;

  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  /* background-color: #0c134f; */

  font-size: 18px;
`;

export const BuggerMenu = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-left: 30.5px;

  /* background-color: red; */
`;

export const Navigation = styled.div`
  display: flex;
`;

export const StyledList = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 18px;

    /* :hover {
      color: lightyellow;
      background-color: white;
    } */
  }
  ul {
    width: 100%;
    height: 150px;

    list-style-type: none;
    font-size: 14px;

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
    line-height: 35px;
  }
`;

export const TelInfo = styled.div`
  float: right;
  .div {
    display: flex;
    color: whitesmoke;
  }
`;
