/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import commonAxios from '../../utils/commonAxios';
import decodeJWT from '../../utils/decodeJWT';
import common from '../../styles/common';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getBackgroundImage,
  getRabbitImage,
} from '../../utils/getDynamicImage';
import Modal from '../../components/modal/Modal';
import TextButton from '../../components/button/TextButton';
import IconButton from '../../components/button/IconButton';

function UserPage() {
  const accessToken = localStorage.getItem('accessToken') || '';

  const navigate = useNavigate();
  const { userId } = useParams();

  const currentUserId = accessToken && decodeJWT(accessToken).sub;
  const isOthersPage = +userId !== +currentUserId;

  const [username, setUsername] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const [profileModal, setProfileModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const [view, setView] = useState();

  useEffect(() => {
    commonAxios
      .get(`user/${userId}`)
      .then((response) => {
        const { username, total_amount } = response.data.user_info;

        setUsername(username);
        setTotalAmount(total_amount);
        setView('');
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setView(
            <>
              <div css={errorText}>
                <div>사용자를 찾을 수 없습니다.</div>
                <TextButton label={'메인으로'} onClick={() => navigate('/')} />
              </div>

              <div css={rabbitImage(1)} />
            </>
          );
        } else {
          alert(error.response.data.error);
        }
      });
  }, [userId, accessToken, navigate]);

  function handleClick() {
    if (accessToken) {
      if (isOthersPage) {
        navigate(`/user/${userId}/new`);
      } else {
        navigate(`/user/${userId}/letters`);
      }
    } else {
      setLoginModal(true);
    }
  }

  function onClickShareBtn() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크 복사 완료');
    });
  }

  return (
    <div css={wrapper}>
      {view
        ? view
        : username && (
            <>
              <div css={introText}>
                <div>
                  {isOthersPage ? (
                    <span>{username} 님은</span>
                  ) : (
                    <div css={userSettingBtn}>
                      <span onClick={() => setProfileModal(true)}>
                        {username}
                      </span>{' '}
                      님
                    </div>
                  )}
                </div>
                <div>
                  <span>
                    {totalAmount && totalAmount.toLocaleString('ko-KR')}
                  </span>{' '}
                  원{isOthersPage ? '을 모았어요.' : '이 모였어요.'}
                </div>
              </div>

              <div css={shareBtnWrapper}>
                <IconButton share onClick={onClickShareBtn} />
              </div>

              <div css={rabbitImage(+totalAmount)}>
                <div css={invisibleButton} onClick={() => handleClick()} />
              </div>

              <div css={bottomText}>
                <div>
                  절구통을 눌러
                  {isOthersPage
                    ? ' 쪽지를 전달하세요.'
                    : ' 받은 쪽지를 확인해보세요.'}
                </div>
              </div>

              {profileModal && (
                <Modal type={'profile'} close={() => setProfileModal(false)} />
              )}
              {!accessToken && loginModal && (
                <Modal type={'signIn'} close={() => setLoginModal(false)} />
              )}
            </>
          )}
    </div>
  );
}

export default UserPage;

const wrapper = () => css`
  background: url(${getBackgroundImage()}) center/cover;
  width: 100%;
  height: 100%;
  min-height: 730px;
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

const shareBtnWrapper = css`
  position: absolute;
  top: 37px;
  right: 25px;
  z-index: 1;
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

const errorText = css`
  padding: 50px 14px;
  width: 100%;

  text-align: center;
  color: ${common.color.brown5};

  z-index: 1;

  div {
    margin: 10px 0;
  }
`;
