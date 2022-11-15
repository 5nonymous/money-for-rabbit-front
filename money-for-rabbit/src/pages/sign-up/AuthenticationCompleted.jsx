/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import palette from '../../styles/palette';
import BoxButton from '../../components/button/BoxButton';
import { useNavigate } from 'react-router-dom';

function AuthenticationCompleted() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div css={flexCenterColumn}>
      <div css={textContainer}>
        <div css={text}>
          <div>
            <p>이메일 인증이</p>
            <p>완료되었습니다.</p>
          </div>
          <BoxButton onClick={() => handleOnClick()}>로그인</BoxButton>
        </div>
      </div>

      <div css={rabbit} />
    </div>
  );
}

export default AuthenticationCompleted;

const flexCenterColumn = css`
  width: 100%;
  height: 100%;
  position: relative;
`;

const boldText = css`
  text-align: center;
  color: ${palette.color.brown4};
  ${palette.fontSize[30]}
  ${palette.fontWeight.bold};
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
  background: url('/images/Rabbit_NoBackground_LotsOfMoney.png') no-repeat center/contain;
  width: 322px;
  height: 573px;

  position: absolute;
  left: 12%;
  bottom: -250px;
`;
