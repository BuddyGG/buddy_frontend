import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './scenes/Welcome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Welcome />, document.getElementById('root'));
registerServiceWorker();
