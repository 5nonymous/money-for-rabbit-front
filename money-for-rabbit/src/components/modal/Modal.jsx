/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import Input from '../input/Input';
import BoxButton from '../button/BoxButton';
import Notion from '../button/Notion';
import axios from 'axios';

function Modal({ close, type }) {
  const navigate = useNavigate();

  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleOnClickSignIn = (e) => {
    e.preventDefault();
    axios
      .post('http://tgoddessana.pythonanywhere.com/api/user/login', inputInfo)
      .then((res) => {
        console.log(res);
        localStorage.setItem('access_token : ', res.data.access_token);
        // TODO: 로그인 성공 시 유저페이지로 이동
      })
      .catch((err) => alert(err.response.data.error));
  };

  const handleOnClickSignUp = () => {
    navigate('/signup');
  };

  const click = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const onClickNicknameHandler = () => {
    alert('click');
  };

  const onClickWithdrawal = () => {
    alert('탈퇴');
  };

  const onClickLogOut = () => {
    alert('로그아웃');
  };

  const SignIn = (
    <div css={wrapper({ type })}>
      <form css={signIn}>
        <Input
          id={'email'}
          value={inputInfo.email}
          type={'email'}
          style={'sign'}
          placeholder={'이메일 주소'}
          onChange={handleChange}
        />
        <Input
          id={'password'}
          value={inputInfo.password}
          type={'password'}
          style={'sign'}
          placeholder={'비밀번호'}
          onChange={handleChange}
        />
        <BoxButton type={'submit'} onClick={handleOnClickSignIn}>
          로그인
        </BoxButton>
      </form>
      <div css={signUp}>
        <p>회원이 아니신가요?</p>
        <BoxButton light onClick={handleOnClickSignUp}>
          회원가입
        </BoxButton>
      </div>
      <Notion />
    </div>
  );

  const Profile = (
    <div css={wrapper({ type })}>
      <div css={inputWrapper}>
        <Input type={'text'} style={'nickname'} placeholder={'닉네임 입력'} />
        <span onClick={onClickNicknameHandler}>변경</span>
      </div>
      <div css={buttonWrapper}>
        <BoxButton light half onClick={onClickWithdrawal}>
          탈퇴하기
        </BoxButton>
        <BoxButton half onClick={onClickLogOut}>
          로그아웃
        </BoxButton>
      </div>
    </div>
  );

  const modalType = {
    signIn: SignIn,
    profile: Profile,
  };

  return (
    <div css={background} onClick={click}>
      {modalType[type]}
    </div>
  );
}

export default Modal;

const flexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const background = css`
  ${flexCenter};
  height: 100%;
  width: 390px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

const wrapper = (props) => css`
  ${flexCenter};
  width: ${props.type === 'signIn' ? '361px' : '300px'};
  height: fit-content;
  background-color: ${common.color.white};
  border-radius: 20px;
  padding-top: 32px;
  padding-bottom: 14px;
  ${props.type === 'profile' &&
  'padding-left: 30px; padding-right: 30px; padding-bottom: 30px;'};
  cursor: default;

  p {
    ${common.fontWeight.medium};
    ${common.fontSize[20]};
    color: ${common.color.brown4};
  }
`;

const signIn = css`
  ${flexCenter};
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: 3px solid ${common.color.brown3};
`;

const signUp = css`
  ${flexCenter};
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 50px;
`;

const inputWrapper = css`
  ${flexCenter};
  gap: 16px;
  margin-top: 18px;
  margin-bottom: 48px;

  span {
    color: ${common.color.brown4};
    ${common.fontSize[18]};
    ${common.fontWeight.medium};
    cursor: pointer;
  }
`;

const buttonWrapper = css`
  width: 100%;
  ${flexCenter};
  flex-direction: row;
  gap: 22px;
`;
