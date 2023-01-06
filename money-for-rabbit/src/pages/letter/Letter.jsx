/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import common from '../../styles/common';
import TextButton from '../../components/button/TextButton';
import { letterData as dummyData } from './dummyData';
import Box from './Box';
import IconButton from '../../components/button/IconButton';
import html2canvas from 'html2canvas';
import axios from 'axios';

function Letter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState();
  const [username, setUsername] = useState();

  const pathname = location.pathname;
  const userId = pathname.split('/')[2];
  const letterId = pathname.split('/')[4];

  axios.get(`http://tgoddessana.pythonanywhere.com/api/user/${userId}`).then((res) => {
    setUsername(res.data.user_info.username);
  });

  useEffect(() => {
    axios.get(`http://tgoddessana.pythonanywhere.com/api/user/${userId}/messages/${letterId}`).then((res) => {
      console.log('res', res);
      setData(res.data);
    });
  }, []);

  const onClickCaptureBtn = () => {
    document.getElementById('prevBtn').style.opacity = 0;
    html2canvas(document.getElementById('container')).then((canvas) => {
      onSave(canvas.toDataURL('image/png'), 'money-for-rabbit-download.png');
    });
    document.getElementById('prevBtn').style.opacity = 1;

    const onSave = (uri, filename) => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = uri;
      link.download = filename;
      link.click();
      document.body.removeChild(link);
    };
  };

  return (
    <div css={wrapper}>
      <div css={textButtonWrapper} id='prevBtn'>
        <TextButton label={'이전'} onClick={() => navigate(-1)} />
      </div>
      <h1>{username} 님이 받은 세뱃돈 입니다.</h1>
      <div css={lettersWrapper}>
        {data && <Box size={'big'} writer={data.author_name} contents={data.message} priceImg={data.image_name} />}
      </div>
      <div css={btnWrapper}>
        <IconButton capture onClick={onClickCaptureBtn} />
      </div>
    </div>
  );
}

export default Letter;
const wrapper = css`
  width: 100%;
  height: 100%;
  position: relative;
  ${common.align.centerColumn};
  h1 {
    color: ${common.color.brown4};
    ${common.fontSize[24]};
    ${common.fontWeight.semiBold};
  }
`;

const textButtonWrapper = css`
  position: absolute;
  top: 24px;
  left: 24px;
`;

const lettersWrapper = css`
  width: 320px;
  height: fit-content;
  margin-top: 68px;
  ${common.align.centerRow};
  justify-content: space-between;
  flex-wrap: wrap;

  > div:not(:nth-of-type(4) ~ div) {
    margin-bottom: 47px;
  }
`;

const btnWrapper = css`
  position: absolute;
  bottom: 53px;
  right: 36px;
`;
