import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './scenes/Welcome';
import LoLAmigo from './scenes/LoLAmigo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoLAmigo />, document.getElementById('root'));
registerServiceWorker();
