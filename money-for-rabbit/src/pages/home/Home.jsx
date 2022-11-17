/** @jsxImportSource @emotion/react */

import React from 'react';
import { css, keyframes } from '@emotion/react';
import palette from '../../styles/palette';
import Input from '../../components/input/Input';
import Notion from '../../components/button/Notion';

const getHours = () => {
  const now = new Date();
  const hours = now.getHours();

  // const test = new Date(2022, 11, 15, 19, 39, 20);
  // const hours = test.getHours();
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
  const onClickScreen = (e) => {
    if (e.target.tagName !== 'P') {
      // TODO: 링크 수정 필요
      // 로그인이 되어 있으면 마이페이지
      // 로그인이 안 되어 있으면 로그인 페이지
      window.location.href = '/signup';
    }
  };

  return (
    <div css={wrapper} onClick={onClickScreen}>
      <svg css={[svgStyle]}>
        <text css={svgText} x="10" y="40">
          화면을 터치하세요
        </text>
      </svg>
      <div css={rabbit} />
      <div css={notionWrapper}>
        <Notion />
      </div>
    </div>
  );
}

export default Home;

const bounceAnimation = keyframes`
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
`;

const wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  background: url(${backgroundImage}) center/cover;
`;

const svgStyle = css`
  width: 230px;
  height: 50px;
  ${palette.fontSize[30]};
  ${palette.fontWeight.bolder};
  position: absolute;
  top: 30px;
  left: 80px;
  animation: ${bounceAnimation} 2s both infinite;
`;

const svgText = css`
  fill: ${palette.color.brown3};
  stroke: ${palette.color.white};
  stroke-width: 10px;
  stroke-linejoin: round;
  paint-order: stroke;
`;

const rabbit = css`
  width: 262px;
  height: 500px;
  position: absolute;
  left: 47px;
  bottom: 60px;
  background: url('./images/Rabbit_NoBackground_Default3.png') center/cover
    no-repeat;
`;

const notionWrapper = css`
  position: absolute;
  left: 108px;
  bottom: 18px;
`;
