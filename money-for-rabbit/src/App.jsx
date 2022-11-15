/** @jsxImportSource @emotion/react */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './styles/layout/Layout';
import { css } from '@emotion/react';
import Home from './pages/home/Home';
import UserPage from './pages/user-page/UserPage';
import NotFound from './pages/error/NotFound';
import Done from './pages/withdrawal/Done';
import AuthenticationCompleted from './pages/sign-up/AuthenticationCompleted';

function App() {
  return (
    <div css={wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout page={<Home />} />} />
          <Route path='/user/:userId/' element={<Layout page={<UserPage />} />} />
          <Route path='/withdrawal/done' element={<Layout page={<Done />} />} />
          <Route path='/signup/done' element={<Layout page={<AuthenticationCompleted />} />} />
          <Route path='/*' element={<Layout page={<NotFound />} />} />
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
