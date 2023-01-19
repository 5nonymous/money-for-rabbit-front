/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import axios from 'axios';
import common from '../../styles/common';
import Input from '../../components/input/Input';
import BoxButton from '../../components/button/BoxButton';
import Notion from '../../components/button/Notion';
import Modal from '../../components/modal/Modal';
import Agreement from './Agreement';

function SignUp() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({});
  const [isInput, setIsInput] = useState(false);
  const [agreementInfo, setAgreementInfo] = useState(true);
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: '',
    passwordCheck: '',
  });
  const messages = {
    email: '인증 메일을 받을 수 있는 주소를 입력해주세요.',
    username: '닉네임은 2~5자만 가능합니다.',
    passwordChar: '비밀번호는 대문자와 특수기호를 포함해야합니다.',
    passwordLength: '비밀번호는 12~16자만 가능합니다.',
    passwordCheck: '비밀번호가 일치하지 않습니다.',
  };
  const pwRegex =
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+|[\]\\{};:'",.<>/?])[A-Za-z0-9`~!@#$%^&*()\-_=+|[\]\\{};:'",.<>/?]{12,16}/;

  const handleChangeInput = (e) => {
    const { id, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    if (id === 'email') {
      setMessage({ [id]: messages[id] });
    } else if (id === 'username') {
      if (value.length < 2 || value.length > 5) {
        setMessage({ [id]: messages[id] });

        if (value.length > 5) {
          setUserData((prevState) => ({
            ...prevState,
            username: value.slice(0, 5),
          }));
        }
      }
    } else if (id === 'password') {
      if (value.length < 12 || value.length > 16) {
        setMessage({ [id]: messages['passwordLength'] });
      } else if (!pwRegex.test(value)) {
        setMessage({ [id]: messages['passwordChar'] });
      } else {
        setMessage({});
      }
    } else if (id === 'passwordCheck') {
      setIsInput(true);
      setMessage({});
    } else {
      setMessage({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const keys = ['email', 'username', 'password'];
    let data = {};

    keys.map((key, id) => (data[key] = e.target[id].value));

    if (userData.password === userData.passwordCheck) {
      axios
        .post('http://tgoddessana.pythonanywhere.com/api/user/register', data)
        .then((response) => {
          navigate('/signup/welcome', { state: { data: data } });
        })
        .catch((err) => {
          let errorMessage = err.response.data;

          alert(errorMessage['error']);
        });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div css={[flexCenterCol(), wrapper]}>
      <div css={flexCenterCol(30)}>
        <div css={boldText}>환영합니다.</div>

        <form css={flexCenterCol(25)} onSubmit={handleSubmit}>
          <div css={flexCenterCol(10)}>
            <Input
              id={'email'}
              value={userData.email}
              onChange={handleChangeInput}
              type={'email'}
              style={'sign'}
              placeholder={'이메일 주소'}
            />
            {message['email'] && <p css={regularText(16)}>{message['email']}</p>}
          </div>
          <div css={flexCenterCol(10)}>
            <Input
              id={'username'}
              value={userData.username}
              onChange={handleChangeInput}
              type={'text'}
              style={'sign'}
              placeholder={'닉네임'}
              maxLength={5}
            />
            {message['username'] && <p css={regularText(16)}>{message['username']}</p>}
          </div>
          <div css={flexCenterCol(10)}>
            <Input
              id={'password'}
              value={userData.password}
              onChange={handleChangeInput}
              type={'password'}
              style={'sign'}
              placeholder={'비밀번호'}
            />
            {message['password'] && <p css={regularText(16)}>{message['password']}</p>}
          </div>
          <div css={flexCenterCol(10)}>
            <Input
              id={'passwordCheck'}
              value={userData.passwordCheck}
              onChange={handleChangeInput}
              type={'password'}
              style={'sign'}
              placeholder={'비밀번호 확인'}
            />
            {isInput && userData.password !== userData.passwordCheck && (
              <p css={regularText(16)}>{messages['passwordCheck']}</p>
            )}
          </div>

          <BoxButton type={'submit'}>회원가입</BoxButton>
        </form>

        <div css={flexCenterCol(20)}>
          <Line />

          <p css={regularText(20)}>이미 계정이 있습니까?</p>
          <BoxButton light onClick={() => setModal(true)}>
            로그인
          </BoxButton>

          <Notion />
        </div>
      </div>
      {modal && <Modal type={'signIn'} close={() => setModal(false)} />}
      {agreementInfo && <Agreement close={() => setAgreementInfo(false)} />}
    </div>
  );
}

export default SignUp;

const flexCenterCol = (gap) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${gap && `gap: ${gap}px`}
`;

const wrapper = css`
  background-color: ${common.color.white};
  height: 100%;
  min-height: 750px;
  color: ${common.color.brown4};
`;

const boldText = css`
  ${common.fontSize[40]}
  ${common.fontWeight.bold}
`;

const regularText = (size) => css`
  ${common.fontSize[size]}
  ${common.fontWeight.medium}
`;

const lineStyle = css`
  background: ${common.color.brown2};
  width: 310px;
  height: 3px;
`;

const Line = () => <div css={lineStyle} />;
