/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function BoxButton({ children, onClick, half, light, user }) {
  const buttonStyles = [boxButtonBase];

  buttonStyles.push(half ? halfWidth : fullWidth);
  buttonStyles.push(light ? bgLight : bgDark);
  buttonStyles.push(user && username);

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
  background: #fff3db;
  padding: 17px 20px;
  width: fit-content;
  height: fit-content;

  color: #c39d52;
  font-size: 30px;
  font-weight: 600;
`;

const fullWidth = css`
  width: 85%;
  padding: 20px 0;
  font-size: 24px;
`;

const halfWidth = css`
  width: 42.5%;
  padding: 15px 0;
  font-size: 18px;
`;

const bgDark = css`
  background: #c39d52;
  color: #fff3db;
`;

const bgLight = css`
  background: #fff;
  border: 1px solid #c39d52;
  color: #c39d52;
`;
