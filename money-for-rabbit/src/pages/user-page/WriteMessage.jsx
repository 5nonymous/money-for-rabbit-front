/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import commonAxios from '../../utils/commonAxios';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import BoxButton from '../../components/button/BoxButton';

function WriteMessage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const location = useLocation();
  const [selectedMoney, setSelectedMoney] = useState();
  const [isMoneyBag, setIsMoneyBag] = useState();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputMessage = e.target[0].value;

    if (inputMessage.trim()) {
      const data = {
        message: inputMessage,
        amount: +selectedMoney,
        is_moneybag: isMoneyBag,
      };

      commonAxios
        .post(`user/${userId}/messages`, data)
        .then((response) => {
          alert('쪽지가 전달되었습니다.');
          navigate(`/user/${userId}`);
        })
        .catch((err) => {
          alert(err.response.data['error']);
        });
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  const handleChangeInput = (e) => {
    if (e.target.value.length > 150) {
      e.target.value = e.target.value.slice(0, 150);
    }
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (location.state) {
      setSelectedMoney(location.state.money);
      setIsMoneyBag(location.state.isMoneyBag);
    } else {
      navigate(-1);
    }
  }, [navigate, location]);

  if (selectedMoney) {
    return (
      <div css={wrapper}>
        <PrevButton onClick={() => navigate(-1)} />

        <form css={inputWrapper} onSubmit={handleSubmit}>
          <div>
            <p css={label}>덕담을 남겨주세요</p>
            <textarea css={messageInput} value={message} onChange={handleChangeInput} maxLength={150} />
            <span>({message.length}/150)</span>
          </div>

          <BoxButton type={'submit'}>완료</BoxButton>
        </form>
      </div>
    );
  } else return <></>;
}

export default WriteMessage;

const wrapper = css`
  background-color: ${common.color.white};
  width: 100%;
  height: calc(100% - 50px);
  min-height: 500px;
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
  max-height: 700px;
  ${common.align.centerColumn};
  justify-content: space-between;
  padding-bottom: 30px;

  & > div {
    position: relative;
    height: calc(100% - 110px);
    ${common.align.centerColumn};
    justify-content: space-between;
    gap: 16px;
  }

  & > div > span {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: ${common.color.brown4};
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
