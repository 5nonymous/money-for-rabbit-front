/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

const getHours = () => {
  // const now = new Date();
  // const hours = now.getHours();

  const test = new Date(2022, 11, 15, 14, 39, 20);
  const hours = test.getHours();
  return hours;
};

const getBackgroundImage = (hours) => {
  // 07 ~ 16 : afternoon
  // 17 ~ 18 : dusk
  // 19 ~ 06 : night

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
  return <div css={wrapper} />;
}

export default Home;

const wrapper = css`
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) center/cover;
`;
