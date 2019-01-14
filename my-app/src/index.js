import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MulClock from './components/Clock';
import MarkdownEditor from './components/MarkdownEditor';
import Welcom from './components/Welcom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MulClock />, document.getElementById('example-clock'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('example-md'));
ReactDOM.render(<Welcom name='chrome'/>, document.getElementById('example-welcom'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
