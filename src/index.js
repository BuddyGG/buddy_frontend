import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoLAmigo from './LoLAmigo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoLAmigo />, document.getElementById('root'));
registerServiceWorker();
