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

store.dispatch({
    type: 'INCREASE_COUNTER',
});
store.dispatch({
    type: 'INCREASE_COUNTER',
});
store.dispatch({
    type: 'RESET_COUNTER',
});
store.dispatch({
    type: 'Unknow',
});
store.dispatch({
    type: 'LOAD_ISSUES',
    payload:[{id:1,name:'First issue'},{id:2, name:"Second issue"}],
});
