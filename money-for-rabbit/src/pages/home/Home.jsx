/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function Home() {
  return <div css={wrapper} />;
}

export default Home;

const wrapper = css`
  width: 100%;
  height: 100%;
  background: url('./images/Background:Afternoon.jpeg') center/cover;
`;
