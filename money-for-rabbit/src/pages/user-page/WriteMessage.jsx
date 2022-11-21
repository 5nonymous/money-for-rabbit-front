/** @jsxImportSource @emotion/react */

import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import BoxButton from '../../components/button/BoxButton';

function WriteMessage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const location = useLocation();
  const selectedMoney = location.state.money;

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputMessage = e.target[0].value;

    if (inputMessage) {
      const data = { money: +selectedMoney, message: inputMessage };

      console.log('data: ', data);
      console.log(`${userId}의 페이지로 이동`);

      navigate(`/user/${userId}`);
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  return (
    <div css={wrapper}>
      <PrevButton onClick={() => navigate(-1)} />

      <form css={inputWrapper} onSubmit={handleSubmit}>
        <div>
          <p css={label}>덕담을 남겨주세요</p>
          <textarea css={messageInput} />
        </div>

        <BoxButton type={'submit'}>완료</BoxButton>
      </form>
    </div>
  );
}

export default WriteMessage;

const wrapper = css`
  width: 100%;
  height: calc(100% - 50px);
`;

const prevBtn = css`
  padding: 24px;

  div {
    width: fit-content;
  }
`;

const PrevButton = (props) => (
  <div css={prevBtn}>
    <TextButton label={'이전'} {...props} />
  </div>
);

const inputWrapper = css`
  height: calc(100% - 78px);
  ${common.align.centerColumn};
  justify-content: space-between;

  & > div {
    height: calc(100% - 110px);
    ${common.align.centerColumn};
    justify-content: space-between;
    gap: 16px;
  }
`;

const label = css`
  color: ${common.color.brown4};
  text-align: center;
  ${common.fontSize[24]};
  ${common.fontWeight.semiBold};
`;

const messageInput = css`
  width: 320px;
  height: calc(100% - 46px);
  max-height: 520px;
  padding: 8px;

  background: ${common.color.brown1};
  border: 2px solid ${common.color.brown4};
  outline: none;

  font-family: inherit;
  color: ${common.color.brown4};
  ${common.fontSize[18]};
  line-height: 24px;

  resize: none;
`;
