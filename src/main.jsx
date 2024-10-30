// arquivo global q levanta o app;

import ReactDom from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

ReactDom.createRoot(document.getElementById('root')).render(
  <App/>
)