/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';
import BoxButton from '../../components/button/BoxButton';
import { useNavigate } from 'react-router-dom';

function AuthenticationFailed() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div css={flexCenterColumn}>
      <div css={textContainer}>
        <div css={text}>
          <div>
            <p>잘못된 접근 방식입니다.</p>
          </div>
          <BoxButton onClick={() => handleOnClick()}>메인으로</BoxButton>
        </div>
      </div>

      <div css={rabbit} />
    </div>
  );
}

export default AuthenticationFailed;

const flexCenterColumn = css`
  width: 100%;
  height: 100%;
  min-height: 700px;
  position: relative;
  overflow: hidden;
`;

const boldText = css`
  text-align: center;
  color: ${common.color.brown4};
  ${common.fontSize[30]}
  ${common.fontWeight.bold};
`;

const text = css`
  width: 100%;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 40px;

  ${boldText}
  user-select: none;
`;

const textContainer = css`
  width: 100%;
  height: calc(100% - 330px);

  position: absolute;
  top: 0;
`;

const rabbit = css`
  background: url('/images/crying_rabbit.png') no-repeat center/cover;
  width: 244px;
  height: 288px;

  position: absolute;
  left: 70px;
  bottom: 0;
`;
