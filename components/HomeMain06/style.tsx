import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  /* background-color: #0c134f; */
  background-color: red;
`;

// Styles
export const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
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
