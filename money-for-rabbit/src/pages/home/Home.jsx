/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import Input from '../../components/input/Input';

const getHours = () => {
  // const now = new Date();
  // const hours = now.getHours();

  const test = new Date(2022, 11, 15, 14, 39, 20);
  const hours = test.getHours();
  return hours;
};

/**
 * 07 ~ 16 : afternoon
 * 17 ~ 18 : dusk
 * 19 ~ 06 : night
 */
const getBackgroundImage = (hours) => {
  if (7 <= hours && hours <= 16) {
    return './images/Background:Afternoon.jpeg';
  } else if (17 <= hours && hours <= 18) {
    return './images/Background:Dusk.jpeg';
  } else {
    return './images/Background:Night.jpeg';
  }
};

const backgroundImage = getBackgroundImage(getHours());

function Home() {
  return (
    <>
      {/* <div css={wrapper} /> */}
      <Input type={'email'} style={'sign'} placeholder={'이메일 주소'} />
      <Input type={'password'} style={'sign'} placeholder={'비밀번호'} />
      <Input type={'text'} style={'editNickname'} placeholder={'닉네임 입력'} />
      <Input
        type={'number'}
        style={'price'}
        placeholder={'금액을 입력해주세요.'}
      />
    </>
  );
}

export default Home;

const wrapper = css`
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) center/cover;
`;
