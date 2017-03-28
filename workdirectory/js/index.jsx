import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './state';



ReactDOM.render(<App thisprops = {store.getState().mabyActive}/>, document.getElementById('workdiv'));


store.subscribe(()=>console.log('New state', store.getState()));

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
console.log(5);
store.dispatch({
    type: 'LOAD_ISSUES',
    payload:[{id:1,name:'First issue'},{id:2, name:"Second issue"}],
});
