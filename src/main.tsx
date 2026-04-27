import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/global.scss';
import faviconUrl from './assets/header/Logo.png';

let iconLink = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
if (!iconLink) {
  iconLink = document.createElement('link');
  iconLink.rel = 'icon';
  document.head.appendChild(iconLink);
}
iconLink.type = 'image/png';
iconLink.href = faviconUrl;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
