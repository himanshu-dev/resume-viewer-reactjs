import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RootComponent} from './component/$root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <RootComponent />,
    document.getElementById('root')
);
serviceWorker.unregister();
