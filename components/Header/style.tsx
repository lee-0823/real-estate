import styled from "@emotion/styled";
import { Height } from "@mui/icons-material";

export const Navigation = styled.ul<{ open: boolean }>`
  /* padding-top: 2rem; */

  width: 100%;
  position: fixed;
  height: ${({ open }) => (open ? "400px" : "50px")};

  display: flex;
  overflow: hidden;
  list-style-type: none;
  background-color: transparent;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background-color: #0c134f;
  opacity: 50%;
`;
export const StyledList = styled.li`
  width: 150px;

  :hover {
    background-color: #0c134f;
    color: lightyellow;
  }
  div {
    padding: 10px 0;
    line-height: 30px;
    height: 50px;
    font-size: 28px;
  }
  ul {
    padding-top: 24px;
  }
  ul li {
    padding-top: 12px;
  }
`;
