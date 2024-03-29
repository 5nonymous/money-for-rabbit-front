/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import Box from './Box';

import commonAxios from '../../utils/commonAxios';
import getUserNumber from '../../utils/getUserNumber';

import PageNum from './PageNum';

function LetterList() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);

  const PAGE_LIMIT = 6;
  const pageCount = 3;

  const now = new Date().getTime();
  const OPEN_DATE = new Date('2023-01-22').getTime();

  useEffect(() => {
    if (now < OPEN_DATE) {
      alert('쪽지는 설날인 22일부터 확인할 수 있습니다.');
    } else {
      commonAxios
        .get(`user/${getUserNumber()}/messages?page=${currentPage}`)
        .then((res) => {
          setData(res.data);
          setTotalPage(Math.ceil(res.data['message_set_count'] / PAGE_LIMIT));
          setPageGroup(Math.ceil(currentPage / pageCount));
        })

        .catch((err) => alert(err.response.data.error));
    }
  }, [currentPage]);

  const pagination = () => {
    let lastNumber = pageGroup * pageCount;

    if (lastNumber > totalPage) {
      lastNumber = totalPage;
    }

    let firstNumber = lastNumber - (pageCount - 1);
    if (firstNumber < 1) {
      firstNumber = 1;
    }
    let pageNumList = [];

    const next = lastNumber + 1;
    const prev = firstNumber - 1;
    const prevBtn = <Icon icon={faAngleLeft} onClick={() => setCurrentPage(prev)} />;
    const nextBtn = <Icon icon={faAngleRight} onClick={() => setCurrentPage(next)} />;

    for (let num = firstNumber; num <= lastNumber; num++) {
      pageNumList.push(
        <PageNum
          key={num}
          pageNum={num}
          isCurrent={currentPage === num}
          onClick={() => {
            setCurrentPage(num);
          }}
        />
      );
    }

    return (
      <div css={paginationWrapper}>
        {prev > 0 && prevBtn}
        {pageNumList}
        {lastNumber < totalPage && nextBtn}
      </div>
    );
  };

  return (
    <div css={wrapper}>
      <div css={textButtonWrapper}>
        <TextButton label={'이전'} onClick={() => navigate(-1)} />
      </div>
      {now < OPEN_DATE
        ? '쪽지는 설날인 22일부터 확인할 수 있습니다.'
        : data &&
          (data.messages.length > 0 ? (
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
                      messageId={el.id}
                      userId={getUserNumber()}
                    />
                  );
                })}
              </div>
              {pagination()}
            </>
          ) : (
            '받은 세뱃돈이 없습니다.'
          ))}
    </div>
  );
}

export default LetterList;

const wrapper = css`
  width: 100%;
  height: 100%;
  min-height: 730px;
  background-color: ${common.color.white};

  ${common.align.centerColumn};
  position: relative;

  h1 {
    margin-top: 80px;
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

  margin-bottom: 20px;
`;

const paginationWrapper = css`
  width: 250px;
  height: fit-content;
  ${common.align.centerRow};
  gap: 20px;
  ${common.fontSize[24]};
  color: ${common.color.brown3};
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
