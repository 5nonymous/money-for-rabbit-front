/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import palette from './../../styles/palette';

function TextButton({ label, onClick }) {
  return label === '이전' ? (
    <PrevButton onClick={onClick} />
  ) : (
    <MoreButton onClick={onClick} />
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

const PrevButton = (props) => (
  <div css={prev} {...props}>
    <FontAwesomeIcon icon={faAngleLeft} /> 이전
  </div>
);

const MoreButton = (props) => (
  <div css={more} {...props}>
    더보기 <FontAwesomeIcon icon={faAngleRight} />
  </div>
);
