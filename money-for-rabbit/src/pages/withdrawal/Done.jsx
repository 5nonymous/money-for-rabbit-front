/** @jsxImportSource @emotion/react */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import BoxButton from '../../components/button/BoxButton';

function Done() {
  const navigate = useNavigate();
  return (
    <div css={wrapper}>
      <div>
        <p>Money For Rabbit </p>
        <p>회원탈퇴가 완료되었습니다.</p>
      </div>
      <div>
        <p>이용해 주셔서 감사합니다.</p>
        <p>그래도 새해 복은 많이 받으세요..</p>
      </div>
      <BoxButton onClick={() => navigate('/')}>메인으로 가기</BoxButton>
    </div>
  );
}

export default Done;

const wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${common.color.brown4};

  div {
    text-align: center;
    p {
      ${common.fontWeight.bold};
      ${common.fontSize[30]};
      :first-child {
        margin-bottom: 20px;
      }
    }
    :nth-of-type(2) p {
      ${common.fontSize[20]};
      :first-child {
        margin-top: 35px;
      }
      :last-child {
        margin-bottom: 50px;
      }
    }
  }
`;
