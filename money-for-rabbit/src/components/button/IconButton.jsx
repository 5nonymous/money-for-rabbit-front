/** @jsxImportSource @emotion/react */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import BoxButton from './BoxButton';

function IconButton({ onClick, capture, share }) {
  return (
    <BoxButton icon onClick={onClick}>
      {capture && <FontAwesomeIcon icon={faCamera} />}
      {share && <FontAwesomeIcon icon={faShareNodes} />}
    </BoxButton>
  );
}

export default IconButton;
