/** @jsxImportSource @emotion/react */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './styles/layout/Layout';
import { css } from '@emotion/react';
import Home from './pages/home/Home';

function App() {
  return (
    <div css={wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout page={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const wrapper = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
