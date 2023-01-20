/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';

function BoxButton({ children, type, onClick, half, light, user, icon, size }) {
  const buttonStyles = [boxButtonBase];

  if (user || icon) {
    buttonStyles.push(user && username);
    buttonStyles.push(icon && squareIcon(size));
  } else {
    buttonStyles.push(half ? halfWidth : fullWidth);
    buttonStyles.push(light ? bgLight : bgDark);
  }

  return (
    <button type={type} css={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default BoxButton;

const boxButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
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
  background: ${common.color.brown1};
  padding: 17px 20px;
  width: fit-content;
  height: fit-content;

  color: ${common.color.brown4};
  ${common.fontSize[30]}
  ${common.fontWeight.semiBold}
`;

const fullWidth = css`
  width: 310px;
  height: 64px;
  ${common.fontSize[24]}
`;

const halfWidth = css`
  width: 42.5%;
  padding: 15px 0;
  ${common.fontSize[18]}
`;

const bgDark = css`
  background: ${common.color.brown4};
  color: ${common.color.brown1};
`;

const bgLight = css`
  background: ${common.color.white};
  border: 1px solid ${common.color.brown4};
  color: ${common.color.brown4};
`;

const squareIcon = (size) => css`
  width: ${size || 70}px;
  height: ${size || 70}px;

  ${bgDark}
  ${common.fontSize[size ? 30 : 40]}
`;
