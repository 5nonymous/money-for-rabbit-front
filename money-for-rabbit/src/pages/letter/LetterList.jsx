/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import Box from './Box';

import { letterListData as dummyData } from './dummyData';

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
          return (
            <Box
              key={el.id}
              size={'small'}
              writer={el.writer}
              priceImg={el.image}
            />
          );
        })}
      </div>
      <div css={paginationWrapper}>
        <FontAwesomeIcon icon={faAngleLeft} />1
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
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

const paginationWrapper = css`
  position: absolute;
  bottom: 49px;
  ${common.align.centerRow};
  gap: 5px;
  ${common.fontSize[40]};
  color: ${common.color.brown3};

  svg {
    cursor: pointer;
  }
`;
