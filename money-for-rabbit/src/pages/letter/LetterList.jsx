/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import Box from './Box';

import commonAxios from '../../utils/commonAxios';
import getUserNumber from '../../utils/getUserNumber';

function LetterList() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    commonAxios
      .get(`user/${getUserNumber()}/messages?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.response.data.error));
  }, [page]);

  return (
    <div css={wrapper}>
      <div css={textButtonWrapper}>
        <TextButton label={'이전'} />
      </div>
      {data && (
        <>
          <h1>{data.user_info.username} 님이 받은 세뱃돈 입니다.</h1>
          <div css={lettersWrapper}>
            {data.messages.map((el) => {
              return (
                <Box
                  key={el.id}
                  size={'small'}
                  writer={el.author_name}
                  priceImg={el.image_name}
                />
              );
            })}
          </div>
          <div css={paginationWrapper}>
            <Icon
              icon={faAngleLeft}
              state={data.prev}
              onClick={() => setPage((prev) => prev - 1)}
            />
            {page}
            <Icon
              icon={faAngleRight}
              state={data.next}
              onClick={() => setPage((prev) => prev + 1)}
            />
          </div>
        </>
      )}
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

const Icon = styled(FontAwesomeIcon)`
  visibility: ${(props) => (props.state ? 'visible' : 'hidden')};
`;
