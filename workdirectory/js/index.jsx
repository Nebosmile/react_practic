import React from 'react';
import ReactDOM from 'react-dom';
import store from './state';
import {Provider} from 'react-redux';
import App from './app';



ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById('workdiv')
);


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
