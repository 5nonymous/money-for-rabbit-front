/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import common from '../../styles/common';

function Agreement({ close }) {
  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState(false);

  function handleCheck(e) {
    setIsAgree(e.target.checked);
  }

  return (
    <div css={wrapper}>
      <div css={background}>
        <div css={document}>
          <div css={header}>
            <div>개인정보 수집·이용 동의</div>
            <div onClick={() => navigate('/')}>✕</div>
          </div>

          <div css={contents}>
            <p>Money For Rabbit은 서비스 홍보를 위해 아래와 같이 개인정보를 수집·이용합니다.</p>

            <table>
              <thead>
                <tr>
                  <th>수집 목적</th>
                  <th>수집 항목</th>
                  <th>보유·이용 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    회원 식별 및<br />
                    홍보 이메일 발송
                  </td>
                  <td>이메일</td>
                  <td>
                    회원 탈퇴 또는
                    <br />
                    서비스 종료 시까지
                  </td>
                </tr>
              </tbody>
            </table>

            <li>
              귀하는 Money For Rabbit 서비스 이용에 필요한 최소한의 개인정보 수집·이용에 동의하지 않을 수 있으나, 동의를
              거부 할 경우 회원제 서비스 이용이 불가합니다.
            </li>

            <div css={agreement}>
              <p>위 개인정보 수집·이용에 동의합니다.(필수)</p>

              <div>
                <input type='checkbox' id='agree' onChange={handleCheck} />
                <label htmlFor='agree'></label>
                <p>동의함</p>
              </div>
            </div>

            {isAgree && (
              <div css={nextButton}>
                <div onClick={() => close()}>다음으로 〉</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agreement;

const wrapper = css`
  width: 100vw;
  height: 100vh;
  ${common.align.centerRow}
  position: fixed;
`;

const background = css`
  background-color: rgba(0, 0, 0, 0.5);
  width: 390px;
  height: 100vh;
  position: fixed;
  top: 0;
  ${common.align.centerColumn}
`;

const document = css`
  background-color: white;
  width: 370px;
  height: fit-content;
`;

const header = css`
  background-color: ${common.color.brown4};
  width: 100%;
  padding: 10px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  color: ${common.color.brown1};

  div {
    cursor: pointer;
  }
`;

const contents = css`
  padding: 10px 15px;
  ${common.align.centerColumn}

  table {
    margin: 10px 0;
    border-collapse: collapse;
    font-size: 14px;

    th,
    td {
      padding: 5px;
      border: 1px solid ${common.color.brown4};
    }
  }
`;

const agreement = css`
  margin: 10px 0;
  text-align: center;
  user-select: none;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    width: 18px;
    height: 18px;
    position: relative;
    border: 2px solid ${common.color.brown4};
    border-radius: 3px;
    cursor: pointer;
  }

  input[type='checkbox']:checked + label {
    background-color: ${common.color.brown4};

    &::after {
      content: '';
      width: 16px;
      height: 16px;
      background: url('/images/check.svg') no-repeat center/cover;
      background-position: -1px -1px;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 20px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  p {
    margin: 5px;
  }
`;

const nextButton = css`
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;

  color: ${common.color.brown3};
  ${common.fontWeight.semiBold}
  ${common.fontSize[18]}

  transition: ease all 0.3s;

  div {
    width: fit-content;
    transition: ease all 0.3s;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: ${common.color.brown4};
    }
  }
`;
