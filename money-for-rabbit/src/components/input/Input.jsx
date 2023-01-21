/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';

function Input({ id, value, type, style, placeholder, onChange, onFocus, maxLength, min, max }) {
  const inputStyle = {
    sign,
    nickname,
    price,
  };

  return (
    <input
      id={id}
      value={value}
      type={type}
      css={inputStyle[style]}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      maxLength={maxLength}
      min={min}
      max={max}
    ></input>
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
  background-color: ${common.color.brown1};
  ${common.fontSize[20]};
  color: ${common.color.brown4};
  padding: 21px 15px;

  ::placeholder {
    color: ${common.color.brown4};
  }
`;

const nickname = css`
  ${defaultStyle}
  width: 180px;
  border-bottom: 2px solid ${common.color.brown1};
  padding-bottom: 16px;
  ${common.fontSize[18]};
  color: ${common.color.brown3};
  text-align: center;

  ::placeholder {
    color: ${common.color.brown3};
  }
`;

const price = css`
  ${defaultStyle}
  width: 300px;
  height: 45px;
  background-color: ${common.color.brown1};
  ${common.fontSize[18]};
  color: ${common.color.brown4};
  text-align: center;

  ::placeholder {
    color: ${common.color.brown4};
  }
`;
