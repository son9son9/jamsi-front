import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Chat from './pages/Chat';
import Login from './pages/Login';
import List from './pages/List';
import NoAccountLogin from './pages/NoAccountLogin';
import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chat />} />

        {/* 로그인, 회원가입 선택 페이지 */}
        <Route path="/login" element={<Login />} />

        {/* 채팅 목록 페이지 */}
        <Route path="/list" element={<List />} />

        {/* 비회원 로그인 페이지 */}
        <Route path="/no/account" element={<NoAccountLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
