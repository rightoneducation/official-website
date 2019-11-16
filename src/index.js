import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-less/semantic.less'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
