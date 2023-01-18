/** @jsxImportSource @emotion/react */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import { getMoneyImage } from '../../utils/getDynamicImage';

function Box({ size, writer, priceImg, contents, messageId, userId }) {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(`/user/${userId}/letters/${messageId}`);
  };

  return (
    <div css={wrapper(size)}>
      <div css={priceImgWrapper(priceImg)} />
      <span css={writerStyle}>{writer} 님</span>
      {size === 'small' ? (
        <div css={textButtonWrapper}>
          <TextButton label={'더보기'} onClick={onClickBtn} />
        </div>
      ) : (
        <p css={contentsStyle}>{contents}</p>
      )}
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

const writerStyle = css`
  position: absolute;
  top: 54px;
`;

const textButtonWrapper = css`
  position: absolute;
  bottom: 19px;
`;

const contentsStyle = css`
  margin: 0;
  color: ${common.color.black};
  ${common.fontWeight.semiBold};
  ${common.fontSize[20]};
`;
