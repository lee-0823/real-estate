import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
//email라이브러리
import {
  SectionStyle,
  BackImage,
  StyledContactForm,
  FormCheckBox,
  CheckList,
} from './style';
export function HomeMain06() {
  const form = React.useRef(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [checked, setChecked] = useState(true);
  // const [required, setRequired] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      setErrorName(true);
      console.log('name1', name);
      console.log('errorName1', errorName);
      return;
    } else {
      setErrorName(false);
      console.log('name2', name);
      console.log('errorName2', errorName);
    }
    if (!phone) {
      setErrorPhone(true);
      console.log('phone', phone);
      console.log('errorPhone1', errorName);
      return;
    } else {
      setErrorPhone(false);
      console.log('phone2', phone);
      console.log('errorPhone2', errorName);
    }
    if (!checked) {
      alert('개인정보 취급에 동의해주세요!');
      return;
    }
    emailjs
      .sendForm(
        //zerostorm3@gmail.com
        'service_66yooy9', //"YOUR_SERVICE_ID"
        'template_1p7sg5f', //"YOUR_TEMPLATE_ID"
        e.currentTarget,
        'M9TQmuGUq3rdTGUP9' // "YOUR_USER_ID" // Account Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('메세지가 전송되었습니다!');
        },
        (error) => {
          console.log(error.text);
          alert('오류가 발생했습니다. 다시시도해주세요.');
        }
      );
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!e.target.value) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (!e.target.value) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
  };

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <SectionStyle>
      <BackImage>
        <img
          src={process.env.BACKEND_URL + '/img/BackImg/HomeMain06BackImg.png'}
          width={1800}
          height={1050}
        />
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <span>REGISTRATION</span>
            <span>관심고객등록</span>
            <label>이름</label>
            <input
              type='text'
              name='user_name'
              value={name}
              onChange={handleNameInput}
              required
            />
            <span style={{ display: errorName ? 'block' : 'none' }}>
              이름은 필수항목입니다. 입력해주세요
            </span>
            <label>연락처 </label>
            <input
              type='tel'
              name='user_phone'
              maxLength={11}
              value={phone}
              onChange={handlePhoneInput}
              pattern='[0-9]{11}'
              required
            />
            <span style={{ display: errorPhone ? 'block' : 'none' }}>
              연락처는 필수항목입니다. 입력해주세요
            </span>
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Message</label>
            <input type='text' name='message' />
            <div>
              <input type='submit' value='Send' />
            </div>
            <FormCheckBox>
              <input
                type='checkbox'
                id='rgs'
                name=''
                value='20'
                checked={checked}
                onChange={handleCheckboxChange}
              ></input>
              <label>
                <Link href='/'>개인정보 취급방침</Link>에 동의합니다.
              </label>
            </FormCheckBox>
            <CheckList>
              <ul>
                <li>
                  ※ 고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라
                  안전하게 보관되며 분양 완료 후 자동 파기됩니다.
                </li>
                <li>
                  ※ 고객님의 소중한 정보는 분양 이외의 목적으로 사용되지
                  않습니다.
                </li>
                <li>
                  ※ 관심고객으로 등록된 고객님의 정보는 분양정보를 안내하는데
                  사용합니다.
                </li>
              </ul>
            </CheckList>
          </form>
        </StyledContactForm>
      </BackImage>
    </SectionStyle>
  );
}
