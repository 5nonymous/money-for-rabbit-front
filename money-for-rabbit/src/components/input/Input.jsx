/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import palette from '../../styles/palette';

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
  background-color: ${palette.color.brown1};
  ${palette.fontSize[20]};
  color: ${palette.color.brown4};
  padding: 21px 15px;

  ::placeholder {
    color: ${palette.color.brown4};
  }
`;

const editNickname = css`
  ${defaultStyle}
  width: 180px;
  border-bottom: 2px solid ${palette.color.brown1};
  padding-bottom: 16px;
  ${palette.fontSize[18]};
  color: ${palette.color.brown3};
  text-align: center;

  ::placeholder {
    color: ${palette.color.brown3};
  }
`;

const price = css`
  ${defaultStyle}
  width: 300px;
  height: 45px;
  background-color: ${palette.color.brown1};
  ${palette.fontSize[18]};
  color: ${palette.color.brown4};
  text-align: center;

  ::placeholder {
    color: ${palette.color.brown4};
  }
`;
