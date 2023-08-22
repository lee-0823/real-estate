import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  /* background-color: #0c134f; */
`;

export const BackImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;

  .img {
    /* background-size: cover;

    vertical-align: top;
    border: none; */

    /* 상대경로 안먹힘. 
    background: url(${process.env.PUBLIC_URL}/img/BackImg/HomeMain06BackImg.png)
      center / cover no-repeat; */
  }
`;

// Styles
export const StyledContactForm = styled.div`
  position: absolute;
  width: 100%;

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
      margin-top: 3rem;
    }

    span {
      font-size: 12px;
      padding: 3px;
      color: red;
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

// export const ErrorName = styled.div`
//   font-size: 12px;
//   padding: 3px;
//   color: white;
//   display: none;
// `;

// export const ErrorPhone = styled.div`
//   font-size: 12px;
//   padding: 3px;
//   color: white;
//   display: none;
// `;

export const FormCheckBox = styled.div`
  position: left;
  display: flex;
  align-items: center;

  width: 100%;

  background-color: green;

  input {
  }

  label {
    position: relative;
    width: 100%;
    height: 35px;

    padding: 0, 50px;

    /* outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220); */
  }
`;
export const CheckList = styled.div`
  ul li {
    list-style: none;
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
