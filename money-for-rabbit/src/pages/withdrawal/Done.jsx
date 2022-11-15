/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function Done() {
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
  color: #c39d52;

  div {
    text-align: center;
    p {
      font-weight: 700;
      font-size: 30px;
      :first-child {
        margin-bottom: 20px;
      }
    }
    :nth-of-type(2) p {
      font-size: 20px;
      :first-child {
        margin-top: 35px;
      }
    }
  }
`;
