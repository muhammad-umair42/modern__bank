import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Auth from './pages/auth/Auth.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/auth' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
