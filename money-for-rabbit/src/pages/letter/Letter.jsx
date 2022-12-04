/** @jsxImportSource @emotion/react */

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import { letterData as dummyData } from './dummyData';
import Box from './Box';
import BoxButton from '../../components/button/BoxButton';

function Letter() {
  const navigate = useNavigate();

  const userName = '어쩌구';

  return (
    <div css={wrapper}>
      <div css={textButtonWrapper}>
        <TextButton label={'이전'} onClick={() => navigate(-1)} />
      </div>
      <h1>{userName} 님이 받은 세뱃돈 입니다.</h1>
      <div css={lettersWrapper}>
        <Box
          size={'big'}
          writer={dummyData.author_name}
          contents={dummyData.message}
          priceImg={dummyData.image_name}
        />
      </div>
    </div>
  );
}

export default Letter;
const wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  ${common.align.centerColumn};
  h1 {
    color: ${common.color.brown4};
    ${common.fontSize[24]};
    ${common.fontWeight.semiBold};
  }
`;

const textButtonWrapper = css`
  position: absolute;
  top: 24px;
  left: 24px;
`;

const lettersWrapper = css`
  width: 320px;
  height: fit-content;
  margin-top: 68px;
  ${common.align.centerRow};
  justify-content: space-between;
  flex-wrap: wrap;

  > div:not(:nth-of-type(4) ~ div) {
    margin-bottom: 47px;
  }
`;
