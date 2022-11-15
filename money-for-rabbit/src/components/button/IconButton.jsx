/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import palette from './../../styles/palette';

function IconButton({ onClick, big, img, capture, share }) {
  const buttonStyles = [iconButtonBase];

  buttonStyles.push(!img ? bgDark : big ? bigImg : normalImg);

  return (
    <div css={buttonStyles} onClick={onClick}>
      {img && <img src={`images/${img}`} alt={img} />}
      {capture && <FontAwesomeIcon icon={faCamera} />}
      {share && <FontAwesomeIcon icon={faShareNodes} />}
    </div>
  );
}

export default IconButton;

const iconButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 11px;

  cursor: pointer;
  user-select: none;

  transition: ease-in all 0.2s;

  :hover {
    transform: scale(105%);
  }
`;

const bgDark = css`
  background: ${palette.color.brown4};
  width: 70px;
  aspect-ratio: 1;

  color: ${palette.color.brown1};
  ${palette.fontSize[40]}
`;

const bgLight = css`
  padding: 12px;
  background: ${palette.color.brown1};
  border: 2px solid ${palette.color.brown4};

  > img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

const normalImg = css`
  ${bgLight}
  width: 97px;
  height: 88px;
`;

const bigImg = css`
  ${bgLight}
  width: 169px;
  height: 153px;
`;
