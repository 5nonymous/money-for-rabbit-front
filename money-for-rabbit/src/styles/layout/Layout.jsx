/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

function Layout({ page }) {
  return (
    <div css={wrapper}>
      {!/Android|iPhone/i.test(navigator.userAgent) && (
        <video css={video} autoPlay loop muted>
          <source
            src={process.env.PUBLIC_URL + '/background_video.mp4'}
            type="video/mp4"
          />
        </video>
      )}
      <div css={container} id="container">
        {page}
      </div>
    </div>
  );
}

export default Layout;

const wrapper = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const video = css`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const container = css`
  width: 390px;
  height: 100vh;
  background-color: white;
`;
