import { createStore} from 'redux';
console.log(createStore);


for(let f = 5;f<10;f++)console.log(f);
function reducer(state, action) {
    switch (action.type) {
    case 'INCREASE_COUNTER':
        return {...state, ...{counter: (state.counter +1)}};
    case 'RESET_COUNTER':
        return {...state, ...{counter:0}};
    default:
        return state;
    }
    return state;
}

const store = createStore(reducer,{
    state:{
        issues:[],
        repositiry:'',
        counter:0
    }
})

export default store;
