import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import GoogleAuthenticationProvider from './Context/GoogleAuthContext.js';

ReactDOM.render(
  <BrowserRouter>
    <GoogleAuthenticationProvider>
      <App />
    </GoogleAuthenticationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/service-worker.js`)
    .catch((err) => console.log('Error 💥', err));
}
