/** @jsxImportSource @emotion/react */

import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import Input from '../../components/input/Input';
import BoxButton from '../../components/button/BoxButton';

function SelectMoney() {
  const { userId } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();
  const money = [100, 500, 1000, 5000, 10000, 50000, 99999];
  const [selectedMoney, setSelectedMoney] = useState(0);

  const handleImageClick = (m) => {
    setSelectedMoney(m);

    if (m !== 99999) {
      formRef.current[0].value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkMoney = (m) => {
    if (m) {
      return m <= 0 ? alert('알맞은 금액을 입력해주세요.') : true;
    } else {
      return alert('금액을 입력해주세요.');
    }
  };

  const toNextPage = () => {
    let choice = formRef.current[0].value;

    if (selectedMoney === 99999) {
      if (!checkMoney(choice)) return;
    } else {
      choice = selectedMoney;
    }

    navigate(`/user/${userId}/new/message`, { state: { money: choice } });
    console.log(`${choice}원 선택, ${userId}에게 전달할 쪽지 작성 페이지로 이동`);
  };

  return (
    <div css={wrapper}>
      <PrevButton label={'이전'} onClick={() => navigate(-1)} />

      <div css={moneyWrapper}>
        <div css={moneyButtons}>
          {money.map((m) => {
            const moneyStyles = [moneyBox(m)];

            m === selectedMoney ? moneyStyles.push(selected) : moneyStyles.push(notSelected);

            return (
              <div key={m} css={moneyStyles} onClick={() => handleImageClick(m)}>
                <img src={`/images/Money_${m}.png`} alt='' />
              </div>
            );
          })}
        </div>

        <form css={moneyForm} onSubmit={handleSubmit} ref={formRef}>
          <div onClick={() => setSelectedMoney(99999)}>
            <Input type={'number'} style={'price'} placeholder={'금액을 입력해주세요.'} />
          </div>
        </form>

        <BoxButton onClick={() => toNextPage()}>다음으로</BoxButton>
      </div>
    </div>
  );
}

export default SelectMoney;

const wrapper = css`
  width: 100%;
  height: 100%;

  position: relative;
`;

const prevBtn = css`
  position: absolute;
  top: 24px;
  left: 24px;
`;

const PrevButton = (props) => (
  <div css={prevBtn}>
    <TextButton {...props} />
  </div>
);

const moneyWrapper = css`
  width: 100%;
  height: calc(100% - 54px);

  position: absolute;
  top: 54px;

  ${common.align.centerColumn};
  gap: 26px;
`;

const moneyButtons = css`
  width: 337px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 23px;
  row-gap: 55px;
`;

const moneyBox = (m) => css`
  background: ${common.color.brown1};
  padding: ${m === 100 ? '20px' : m === 500 ? '15px' : '10px'};

  width: ${m === 99999 ? '169px' : '97px'};
  height: ${m === 99999 ? '153px' : '88px'};

  border: 2px solid ${common.color.brown2};
  border-radius: 11px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    border-radius: 11px;
  }
`;

const selected = css`
  border: 2px solid ${common.color.brown4};
`;

const notSelected = css`
  transition: ease-in all 0.2s;

  :hover {
    transform: scale(105%);
  }
`;

const moneyForm = css`
  ${common.align.centerColumn};
  width: 100%;
  gap: 60px;
`;
