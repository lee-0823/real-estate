import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
//email라이브러리

import { SectionStyle, StyledContactForm } from "./style";

export function HomeMain06() {
  const form = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    form.current &&
      emailjs
        .sendForm(
          "service_jt2qs8m",
          "template_s00pnon",
          form.current,
          "PXRzvNlfA8sG9CwfU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
  //   };

  // //Naver SMTP 서버명 : smtp.naver.com, Daum
  // var myMail = "zerostorm3@naver.com";
  // var myMailPW = "#%zero2975";
  // var myMailHost = "smtp.naver.com";
  // var myMailPort = "465";

  // var email = require("emailjs");
  // var emailServer = email.server.connect({
  //   user: myMail,
  //   password: myMailPW,
  //   host: myMailHost,
  //   port: myMailPort,
  //   ssl: true,
  // });

  // var messageForm = {
  //   text: "",
  //   from: myMail,
  //   to: "<jiniiy07@gmail.com>",
  //   cc: "<>",
  //   subject: "title test",
  // };
  // emailServer.send(messageForm, function (err, messageForm) {
  //   console.log(err || messageForm);
  // });

  return (
    <SectionStyle>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>이름</label>
          {/* required */}
          <input type="text" name="user_name" />
          <label>연락처 </label>
          {/* required */}
          <label>Email</label>
          {/* not required */}
          <input type="email" name="user_email" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </SectionStyle>
  );
}
