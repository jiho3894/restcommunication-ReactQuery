import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactQueryWrapper from './core/wrapper/ReactQueryWrapper';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactQueryWrapper>
    <App />
  </ReactQueryWrapper>
);
