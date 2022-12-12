/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import Input from '../../components/input/Input';
import BoxButton from '../../components/button/BoxButton';
import commonAxios from '../../utils/commonAxios';
import axios from 'axios';
import getUserNumber from '../../utils/getUserNumber';

function Withdrawal() {
  const [inputUsername, setInputUsername] = useState('');
  const navigate = useNavigate();

  const changeHandlerUsername = (e) => {
    setInputUsername(e.target.value);
  };

  const onClickCancel = () => {
    navigate(`/user/${getUserNumber()}`);
  };

  const onClickWithdrawal = () => {
    commonAxios
      .get(`user/${getUserNumber()}`)
      .then((res) => {
        const username = res.data.user_info.username;
        console.log('user', { username });
        if (username === inputUsername) {
          axios
            .delete('http://tgoddessana.pythonanywhere.com/api/user/withdraw', {
              headers: {
                'Content-Type': `application/json`,
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
              data: { username },
            })
            .then(() => {
              alert('탈퇴했습니다');
              navigate('/withdrawal/done');
            })
            .catch((err) => console.log(err.response.data));
        } else {
          alert('닉네임을 다시한번 확인해주세요.');
          setInputUsername('');
        }
      })
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <div css={wrapper}>
      <div>
        <p>Money For Rabbit </p>
        <p>회원탈퇴</p>
      </div>
      <div>
        <p>탈퇴하실 경우 Money For Rabbit</p>
        <p>서비스 이용이 불가합니다.</p>
        <p>
          탈퇴하시려면 <span>[닉네임]</span>을 입력해주세요.
        </p>
      </div>
      <Input
        type={'text'}
        style={'nickname'}
        placeholder={'닉네임 입력'}
        onChange={changeHandlerUsername}
        value={inputUsername}
      />
      <div css={buttonWrapper}>
        <BoxButton half onClick={onClickCancel}>
          안할래요
        </BoxButton>
        <BoxButton light half onClick={onClickWithdrawal}>
          탈퇴할래요
        </BoxButton>
      </div>
      <div css={image} />
    </div>
  );
}

export default Withdrawal;

const wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${common.color.brown4};

  div {
    text-align: center;
    :first-of-type {
      margin-top: -150px;
    }
    p {
      ${common.fontWeight.bold};
      ${common.fontSize[30]};
      :first-of-type {
        margin-bottom: 15px;
      }
    }
    :nth-of-type(2) p {
      ${common.fontWeight.medium};
      ${common.fontSize[20]};
      :first-of-type {
        margin-top: 35px;
      }
      :not(:last-of-type) {
        margin-bottom: 8px;
      }
      :last-of-type {
        margin-bottom: 41px;
      }
      span {
        ${common.fontWeight.bold};
      }
    }
  }
`;

const buttonWrapper = css`
  width: 284px;
  ${common.align.centerRow};
  gap: 30px;
  margin-top: 36px;
`;

const image = css`
  width: 223px;
  height: 220px;
  position: absolute;
  bottom: 0;
  left: 85px;
  background: url('./images/Rabbit_noBackground_under1000.png') top/cover
    no-repeat;
`;
