/** @jsxImportSource @emotion/react */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4 } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';
import TextButton from '../../components/button/TextButton';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section css={[flexCenterCol, brownText]}>
      <div css={flexIcon}>
        <FontAwesomeIcon icon={fa4} />
        <FontAwesomeIcon icon={faFaceFrown} />
        <FontAwesomeIcon icon={fa4} />
      </div>
      <div css={boldText}>이런!</div>
      <div css={flexText}>
        <div css={[common.fontSize[20]]}>페이지를 찾을 수 없어요.</div>
        <TextButton label={'메인으로'} onClick={() => navigate('/')} />
      </div>
    </section>
  );
}

export default NotFound;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexCenterCol = css`
  ${flexCenter}
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const brownText = css`
  color: ${common.color.brown4};
`;

const flexIcon = css`
  ${flexCenter}
  gap: 10px;
  ${common.fontSize[40]}
`;

const flexText = css`
  ${flexCenter}
  flex-direction: column;
  gap: 10px;
`;

const boldText = css`
  ${common.fontSize[30]}
  ${common.fontWeight.bold}
`;
