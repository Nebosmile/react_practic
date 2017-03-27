import React from 'react';
import App from './app';
import store from './state';
import ReactDOM from 'react-dom';




React.render(<App/>, document.getElementById('workdiv'));

store.subscribe(()=>console.log('New state', store));

console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER',
});
console.log(2);
store.dispatch({
    type: 'INCREASE_COUNTER',
});
console.log(3);
store.dispatch({
    type: 'RESET_COUNTER',
});
console.log(4);
store.dispatch({
    type: 'Unknow',
});
