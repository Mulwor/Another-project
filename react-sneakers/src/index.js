import React from 'react';                
/* Import - take smth (C:/Users/Али/Desktop/Новая папка/Another-project/
react-sneakers/node_modules/@types/react/index) and use this file here */
// Возьми весь этот код (from 'react') и сохрани его в этой (React) переменной

import ReactDOM from 'react-dom/client';
/* Необходимо для того, чтобы реактовский проект запускать корректна. Его преобразовывать
в HTML */

import './index.scss';
// Возьми весь CSS файл и примени его здесь

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

