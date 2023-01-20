/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import BoxButton from '../../components/button/BoxButton';

function EmailAuthentication() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!location.state) {
      navigate('/signup');
    } else {
      setUserData(location.state.data);
    }
  }, [navigate, location]);

  if (userData) {
    return (
      <div css={wrapper}>
        <h1>
          {userData.username} 님,
          <br />
          회원가입을 환영합니다!
        </h1>

        <p>
          <span>{userData.email}</span> 으로
          <br />
          인증 메일을 발송하였습니다.
        </p>

        <div>
          <p>
            메일함 확인 후
            <br />
            이메일 인증을 진행해주세요.
          </p>
        </div>

        <BoxButton onClick={() => navigate('/')}>메인으로 가기</BoxButton>
      </div>
    );
  } else return <></>;
}

export default EmailAuthentication;

const wrapper = css`
  background-color: ${common.color.white};
  width: 100%;
  height: 100%;
  min-height: 500px;

  ${common.align.centerColumn}
  gap: 49px;

  color: ${common.color.brown4};
  text-align: center;

  user-select: none;

  h1 {
    ${common.fontSize[30]}
    ${common.fontWeight.bold}
  }

  p {
    ${common.fontSize[20]}
    ${common.fontWeight.medium}
    line-height: 35px;
  }

  span {
    ${common.fontWeight.bold}
    user-select: text;
  }

  div {
    p:last-child {
      ${common.fontSize[16]}
      line-height: 25px;
    }

    span {
      cursor: pointer;
      user-select: none;

      :hover {
        border-bottom: 1px solid ${common.color.brown4};
      }
    }
  }
`;
