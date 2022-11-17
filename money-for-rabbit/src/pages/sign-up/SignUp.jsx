/** @jsxImportSource @emotion/react */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import Input from '../../components/input/Input';
import BoxButton from '../../components/button/BoxButton';
import Notion from '../../components/button/Notion';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const keys = ['email', 'nickname', 'password1', 'password2'];
    let data = {};

    keys.map((key, id) => (data[key] = e.target[id].value));

    if (data.password1 === data.password2) {
      alert('다음페이지 이동');
      navigate('/signup/verification', { state: { data: data } });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div css={[flexCenterCol(), wrapper]}>
      <div css={flexCenterCol(30)}>
        <div css={boldText}>환영합니다.</div>

        <form css={flexCenterCol(25)} onSubmit={handleSubmit}>
          <div css={flexCenterCol(10)}>
            <Input type={'email'} style={'sign'} placeholder={'이메일 주소'} />
            <p css={regularText(16)}>인증 메일을 받을 수 있는 주소를 입력해주세요.</p>
          </div>
          <Input type={'text'} style={'sign'} placeholder={'닉네임'} />
          <Input type={'password'} style={'sign'} placeholder={'비밀번호'} />
          <Input type={'password'} style={'sign'} placeholder={'비밀번호 확인'} />

          <BoxButton type={'submit'}>회원가입</BoxButton>
        </form>

        <div css={flexCenterCol(20)}>
          <Line />

          <p css={regularText(20)}>이미 계정이 있습니까?</p>
          <BoxButton light onClick={() => navigate('/login')}>
            로그인
          </BoxButton>

          <Notion />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

const flexCenterCol = (gap) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${gap && `gap: ${gap}px`}
`;

const wrapper = css`
  height: 100%;
  color: ${common.color.brown4};
`;

const boldText = css`
  ${common.fontSize[40]}
  ${common.fontWeight.bold}
`;

const regularText = (size) => css`
  ${common.fontSize[size]}
  ${common.fontWeight.midium}
`;

const lineStyle = css`
  background: ${common.color.brown2};
  width: 310px;
  height: 3px;
`;

const Line = () => <div css={lineStyle} />;
