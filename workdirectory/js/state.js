import { createStore, combineReducers} from 'redux';
import * as reducers from './reducers/index.js'
// import counterReducer from './reducers/counter';
// import issuesReducer from './reducers/issues';
console.log(createStore);


const reducer = combineReducers(reducers);


const store = createStore(reducer,{
        issues:[],
        repositiry:'',
        counter:0,
        mabyActive:0,
});

export default store;
