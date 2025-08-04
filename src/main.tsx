import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <Toaster position="top-center" />
    <App />
  </React.StrictMode>
);