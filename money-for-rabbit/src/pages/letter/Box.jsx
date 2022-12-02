/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import { getMoneyImage } from '../../utils/getDynamicImage';

function Box({ size, writer, priceImg }) {
  console.log('getMoneyImage(priceImg)', getMoneyImage(priceImg));

  return (
    <div css={wrapper(size)}>
      <div css={priceImgWrapper(priceImg)} />
      {writer} 님
      <div css={textButtonWrapper}>
        <TextButton label={'더보기'} />
      </div>
    </div>
  );
}

export default Box;

const wrapper = (size) => css`
  width: ${size === 'big' ? '319px' : '150px'};
  height: ${size === 'big' ? '363px' : '130px'};
  border-radius: 11px;
  border: 1px solid ${common.color.brown4};
  background-color: ${common.color.brown1};

  color: ${common.color.brown4};
  ${common.fontSize[20]};
  ${common.fontWeight.semiBold};

  ${common.align.centerColumn};
  position: relative;
`;

const priceImgWrapper = (priceImg) => css`
  ${getMoneyImage(priceImg)};
`;

const textButtonWrapper = css`
  position: absolute;
  bottom: 19px;
`;
