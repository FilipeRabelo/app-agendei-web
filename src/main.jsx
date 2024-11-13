// // arquivo global q levanta o app;

// import ReactDom from 'react-dom/client';
// import App from './App.jsx';
// import './styles/global.css';

// ReactDom.createRoot(document.getElementById('root')).render(
//   <App/>
// )






import "./styles/global.css";
import React from 'react'
import ReactDOM from 'react-dom/client'

import Rotas from "./rotas.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Rotas />
)
