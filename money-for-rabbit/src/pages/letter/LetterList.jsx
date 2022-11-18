/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import Box from './Box';

import dummyData from './dummyData';

function LetterList() {
  const userName = '어쩌구';
  return (
    <div css={wrapper}>
      <div css={textButtonWrapper}>
        <TextButton label={'이전'} />
      </div>
      <h1>{userName} 님이 받은 세뱃돈 입니다.</h1>
      <div css={lettersWrapper}>
        {dummyData.map((el) => {
          // TODO: 정확한 데이터 형식에 맞게 수정해야 함
          return <Box size={'small'} writer={el.writer} />;
        })}
      </div>
      {/* TODO: pagination 방식에 대해 논의 후 코드 작성 필요 */}
      <div css={pagination} />
    </div>
  );
}

export default LetterList;

const wrapper = css`
  width: 100%;
  height: 100%;
  ${common.align.centerColumn};
  position: relative;

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

const pagination = css`
  width: 99px;
  height: 44px;
  background-color: red;
  position: absolute;
  bottom: 49px;
`;
