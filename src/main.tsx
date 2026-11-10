import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Wholesale from './pages/Wholesale.tsx';
import './index.css';

// Minimal path routing; public/_redirects sends every path to index.html on Netlify.
const path = window.location.pathname.replace(/\/+$/, '');
const Page = path === '/wholesale' ? Wholesale : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
