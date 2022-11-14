/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faShareNodes } from '@fortawesome/free-solid-svg-icons';

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
  background: #c39d52;
  width: 70px;
  aspect-ratio: 1;

  color: #fff3db;
  font-size: 40px;
`;

const bgLight = css`
  padding: 12px;
  background: #fff3db;
  border: 2px solid #c39d52;

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
