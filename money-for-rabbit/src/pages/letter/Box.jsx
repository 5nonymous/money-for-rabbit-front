// TODO: 금액별로 다른 이미지, 위치, 사이즈 주도록 수정해야 함 => 디자인이 나와야 작업 가능

/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';

function Box({ size, writer, priceImg }) {
  return (
    <div css={wrapper}>
      <div css={priceImgWrapper}>{priceImg}</div>
      {writer}
      <div css={textButtonWrapper}>
        <TextButton label={'더보기'} />
      </div>
    </div>
  );
}

export default Box;

const wrapper = (props) => css`
  width: ${props.size === 'big' ? '319px' : '150px'};
  height: ${props.size === 'big' ? '363px' : '130px'};
  border-radius: 11px;
  border: 1px solid ${common.color.brown4};
  background-color: ${common.color.brown1};

  color: ${common.color.brown4};
  ${common.fontSize[20]};
  ${common.fontWeight.semiBold};

  ${common.align.centerColumn};
  position: relative;
`;

const priceImgWrapper = css`
  position: absolute;
  top: calc(46px / -2);
  width: 47px;
  height: 46px;
  background: url('/images/Money_100.png') center/cover no-repeat;
`;

const textButtonWrapper = css`
  position: absolute;
  bottom: 19px;
`;
