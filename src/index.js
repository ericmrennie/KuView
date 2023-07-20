import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import styles from './scss/App.scss';
// react render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
