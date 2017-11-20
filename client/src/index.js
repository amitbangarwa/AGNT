import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './routes'

const render = NewApp => ReactDOM.render(<NewApp />, document.getElementById('root'));

render(Router);
registerServiceWorker();
