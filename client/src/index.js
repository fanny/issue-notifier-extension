import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { initializeFirebase } from './service/pushNotifications';


ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();
