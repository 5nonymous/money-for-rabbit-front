/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import commonAxios from '../../utils/commonAxios';
import decodeJWT from '../../utils/decodeJWT';
import common from '../../styles/common';
import { useNavigate, useParams } from 'react-router-dom';
import { getBackgroundImage, getRabbitImage } from '../../utils/getDynamicImage';
import Modal from '../../components/modal/Modal';

function UserPage() {
  const accessToken = localStorage.getItem('accessToken') || '';
  const [time, setTime] = useState(localStorage.getItem('time') ? localStorage.getItem('time') : '09:00');

  const navigate = useNavigate();
  const { userId } = useParams();

  const currentUserId = accessToken && decodeJWT(accessToken).sub;
  const isOthersPage = +userId !== +currentUserId;

  const [username, setUsername] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (accessToken) {
      commonAxios.get(`user/${userId}`).then((response) => {
        const { username, total_amount } = response.data.user_info;

        setUsername(username);
        setTotalAmount(total_amount);
      });
    }
  }, [userId, accessToken]);

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  function handleClick() {
    if (isOthersPage) {
      navigate(`/user/${userId}/new`);
    } else {
      navigate(`/user/${userId}/letters`);
    }
  }

  function handleTimeSettingBtn() {
    const timeArr = ['09:00', '18:00', '00:00'];
    const time = localStorage.getItem('time');

    if (time === timeArr[0]) {
      setTime(timeArr[1]);
    } else if (time === timeArr[1]) {
      setTime(timeArr[2]);
    } else {
      setTime(timeArr[0]);
    }
    window.location.reload();
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
          <span>{totalAmount && totalAmount.toLocaleString('ko-KR')}</span> 원
          {isOthersPage ? '을 모았어요.' : '이 모였어요.'}
        </div>
      </div>
      <div css={timeSettingWrapper}>
        <div css={timeSettingBtn} onClick={handleTimeSettingBtn} />
        <span>{time}</span>
      </div>

      <div css={rabbitImage(+totalAmount)}>
        <div css={invisibleButton} onClick={() => handleClick()} />
      </div>

      <div css={bottomText}>
        <div>
          절구통을 눌러
          {isOthersPage ? ' 쪽지를 전달하세요.' : ' 받은 쪽지를 확인해보세요.'}
        </div>
      </div>

      {modal && <Modal type={'profile'} close={() => setModal(false)} />}
      {!accessToken && <Modal type={'signIn'} />}
    </div>
  );
}

export default UserPage;

const wrapper = () => css`
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

const timeSettingWrapper = css`
  width: 58px;
  height: fit-content;
  position: absolute;
  top: 25px;
  right: 28px;
  ${common.align.centerColumn};

  span {
    ${common.fontSize[12]};
    ${common.fontWeight.medium};
  }
`;

const timeSettingBtn = css`
  width: 58px;
  height: 71px;
  background: url('/images/time_setting_button_icon.png') no-repeat center/cover;
  z-index: 1;
  cursor: pointer;
`;

const rabbitImage = (money) => css`
  background: url(${getRabbitImage(money)}) no-repeat center/contain;
  width: 322px;
  height: 100%;
  max-height: 573px;
`;

const bottomText = css`
  width: 100%;
  padding: 13px 0;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  z-index: 1;
`;

const invisibleButton = css`
  @media (min-height: 500px) {
    width: 31vh;
    height: 28%;
  }

  @media (min-height: 600px) {
    width: 32vh;
    height: 30%;
  }

  @media (min-height: 700px) {
    width: 230px;
    height: 210px;
  }

  width: 30vh;
  height: 25%;

  position: absolute;
  bottom: 25px;
  left: 45%;
  transform: translateX(-45%);

  cursor: pointer;
`;
