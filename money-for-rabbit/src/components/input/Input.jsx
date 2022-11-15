/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function Input({ type, style, placeholder }) {
  const inputStyle = {
    sign,
    editNickname,
    price,
  };
  return (
    <input
      type={type}
      css={inputStyle[style]}
      placeholder={placeholder}></input>
  );
}

export default Input;

const defaultStyle = css`
  outline: none;
  border: none;
`;

const sign = css`
  ${defaultStyle}
  width: 310px;
  height: 64px;
  border-radius: 15px;
  background-color: #fff3db;
  font-size: 20px;
  color: #c39d52;
  padding: 21px 15px;

  ::placeholder {
    color: #c39d52;
  }
`;

const editNickname = css`
  ${defaultStyle}
  width: 180px;
  border-bottom: 2px solid #fff3db;
  padding-bottom: 16px;
  font-size: 18px;
  color: #ecd189;
  text-align: center;

  ::placeholder {
    color: #ecd189;
  }
`;

const price = css`
  ${defaultStyle}
  width: 300px;
  height: 45px;
  background-color: #fff3db;
  font-size: 18px;
  color: #c39d52;
  text-align: center;

  ::placeholder {
    color: #c39d52;
  }
`;
