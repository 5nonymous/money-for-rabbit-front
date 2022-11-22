/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function Layout({ page }) {
  return <div css={wrapper}>{page}</div>;
}

export default Layout;

const wrapper = css`
  width: 390px;
  height: 100vh;
  /* background-color: blue; */
`;
