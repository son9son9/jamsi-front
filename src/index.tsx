import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Chat from './pages/Chat';
import Login from './pages/Login';
import List from './pages/List';
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
      <Route path="/login" element={<Login />} />
      <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
