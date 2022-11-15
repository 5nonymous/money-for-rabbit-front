/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import palette from '../../styles/palette';

function BoxButton({ children, onClick, half, light, user, icon }) {
  const buttonStyles = [boxButtonBase];

  if (user || icon) {
    buttonStyles.push(user && username);
    buttonStyles.push(icon && squareIcon);
  } else {
    buttonStyles.push(half ? halfWidth : fullWidth);
    buttonStyles.push(light ? bgLight : bgDark);
  }

  return (
    <div css={buttonStyles} onClick={onClick}>
      {children}
    </div>
  );
}

export default BoxButton;

const boxButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  font-weight: 400;

  cursor: pointer;
  user-select: none;

  transition: ease-in all 0.2s;

  :hover {
    transform: scale(105%);
  }
`;

const username = css`
  background: ${palette.color.brown1};
  padding: 17px 20px;
  width: fit-content;
  height: fit-content;

  color: ${palette.color.brown4};
  ${palette.fontSize[30]}
  ${palette.fontWeight.semiBold}
`;

const fullWidth = css`
  width: 85%;
  padding: 20px 0;
  ${palette.fontSize[24]}
`;

const halfWidth = css`
  width: 42.5%;
  padding: 15px 0;
  ${palette.fontSize[18]}
`;

const bgDark = css`
  background: ${palette.color.brown4};
  color: ${palette.color.brown1};
`;

const bgLight = css`
  background: ${palette.color.white};
  border: 1px solid ${palette.color.brown4};
  color: ${palette.color.brown4};
`;

const squareIcon = css`
  width: 70px;
  height: 70px;

  ${bgDark}
  ${palette.fontSize[40]}
`;
