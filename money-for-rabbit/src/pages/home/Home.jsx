/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import common from '../../styles/common';
import Notion from '../../components/button/Notion';
import { getBackgroundImage } from '../../utils/getDynamicImage';
import getUserNumber from '../../utils/getUserNumber';
import Modal from '../../components/modal/Modal';

function Home() {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const rabbitImageURL =
    process.env.PUBLIC_URL + '/images/Rabbit_NoBackground_Default3.png';

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(!isModal);
  };

  const onClickScreen = (e) => {
    if (e.target === e.currentTarget) {
      localStorage.getItem('accessToken')
        ? navigate(`/user/${getUserNumber()}`)
        : openModal();
      navigate(`/user/${getUserNumber()}`);
    }
  };

  return (
    <div css={wrapper} onClick={onClickScreen}>
      <div css={svgWrapper}>
        <svg css={svgStyle({ isModal })} onClick={onClickScreen}>
          <text css={svgText} x="10" y="40" onClick={onClickScreen}>
            화면을 터치하세요
          </text>
        </svg>
      </div>
      <div css={rabbit(rabbitImageURL)} onClick={onClickScreen} />
      <div css={notionWrapper}>
        <Notion />
      </div>
      {isModal && <Modal close={closeModal} type={'signIn'} />}
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
  background: url(${getBackgroundImage()}) center/cover;
`;

const svgWrapper = css`
  width: 100%;
  height: fit-content;
  ${common.align.centerRow};
`;

const svgStyle = (props) => css`
  width: 260px;
  height: 50px;
  ${common.fontSize[30]};
  ${common.fontWeight.bolder};
  position: absolute;
  top: 30px;
  animation: ${props.isModal
    ? ''
    : css`
        ${bounceAnimation} 2s both infinite
      `};
`;

const svgText = css`
  fill: ${common.color.brown3};
  stroke: ${common.color.white};
  stroke-width: 10px;
  stroke-linejoin: round;
  paint-order: stroke;
`;

const rabbit = (url) => css`
  width: 262px;
  height: 500px;
  position: absolute;
  left: 47px;
  bottom: 60px;
  background: url(${url}) center/cover no-repeat;
`;

const notionWrapper = css`
  position: absolute;
  left: 108px;
  bottom: 18px;
`;
