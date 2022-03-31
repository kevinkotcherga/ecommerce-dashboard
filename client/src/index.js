import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);
