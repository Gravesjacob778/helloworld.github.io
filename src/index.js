import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const multiButton=()=>{
    var output = [];
    for (let i = 0; i < 5; i++){
        output.push(<button>按鍵i</button>)
    }
    return output;
}

ReactDOM.render(
    <div>{multiButton()}</div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
