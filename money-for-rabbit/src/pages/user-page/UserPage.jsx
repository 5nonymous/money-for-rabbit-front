/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';
import common from '../../styles/common';
import { useNavigate, useParams } from 'react-router-dom';
import { getBackgroundImage, getRabbitImage } from '../../utils/getDynamicImage';
import Modal from '../../components/modal/Modal';

function UserPage() {
  const username = '어쩌구';
  const money = 1234;

  const navigate = useNavigate();
  const { userId } = useParams();
  const currentUserId = '1';
  const collectedMoney = money.toLocaleString('ko-KR');
  const [isOthersPage, setIsOthersPage] = useState(userId !== currentUserId);
  const [modal, setModal] = useState(false);

  function handleClick() {
    if (isOthersPage) {
      navigate(`/user/${userId}/new`);
    } else {
      console.log('받은 쪽지 열람 페이지로 이동합니다.');
    }
  }

  return (
    <div css={wrapper}>
      <div css={introText}>
        <div>
          {isOthersPage ? (
            <span>{username} 님은</span>
          ) : (
            <div css={userSettingBtn}>
              <span onClick={() => setModal(true)}>{username}</span> 님
            </div>
          )}
        </div>
        <div>
          <span>{collectedMoney}</span> 원{isOthersPage ? '을 모았어요.' : '이 모였어요.'}
        </div>
      </div>

      <div css={rabbitImage(money)}>
        <div css={invisibleButton} onClick={() => handleClick()} />
      </div>

      <div css={bottomText}>
        <div>
          절구통을 눌러
          {isOthersPage ? ' 쪽지를 전달하세요.' : ' 받은 쪽지를 확인해보세요.'}
        </div>
      </div>

      {modal && <Modal type={'profile'} close={() => setModal(false)} />}
    </div>
  );
}

export default UserPage;

const wrapper = css`
  background: url(${getBackgroundImage()}) center/cover;
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${common.fontSize[20]}
  ${common.fontWeight.bold};

  user-select: none;
`;

const introText = css`
  padding: 37px 14px;
  width: 100%;

  color: ${common.color.brown4};

  z-index: 1;

  // collected money
  & > div:last-child > span {
    color: ${common.color.brown5};
  }
`;

const userSettingBtn = css`
  margin-bottom: 7px;
  margin-left: -7px;

  span {
    padding: 5px;
    border: 1px solid ${common.color.brown4};
    border-radius: 10px;

    transition: ease-in background 0.2s;

    cursor: pointer;

    :hover {
      background: ${common.color.brown1};
    }
  }
`;

const rabbitImage = (money) => css`
  background: url(${getRabbitImage(money)}) no-repeat center/contain;
  width: 322px;
  height: 573px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const bottomText = css`
  padding: 13px 0;
  z-index: 1;
`;

const invisibleButton = css`
  width: 230px;
  height: 210px;

  position: absolute;
  bottom: 25px;
  left: 40px;

  cursor: pointer;
`;
