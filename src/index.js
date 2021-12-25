import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register(`${process.env.PUBLIC_URL}/service-worker.js`)
		.catch((err) => console.log('Error 💥', err));
}
