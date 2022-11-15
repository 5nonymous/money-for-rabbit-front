/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import palette from './../../styles/palette';

function TextButton({ label, onClick }) {
  return label === '이전' ? (
    <PrevButton onClick={onClick}>{label}</PrevButton>
  ) : (
    <MoreButton onClick={onClick}>{label}</MoreButton>
  );
}

export default TextButton;

const textButtonBase = css`
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

const prev = css`
  ${textButtonBase}
  color: ${palette.color.brown4};
  font-size: 24px;
`;

const more = css`
  ${textButtonBase}
  color: ${palette.color.brown3};
  font-size: 16px;
`;

const PrevButton = ({ children, ...props }) => (
  <div css={prev} {...props}>
    <FontAwesomeIcon icon={faAngleLeft} /> {children}
  </div>
);

const MoreButton = ({ children, ...props }) => (
  <div css={more} {...props}>
    {children} <FontAwesomeIcon icon={faAngleRight} />
  </div>
);
