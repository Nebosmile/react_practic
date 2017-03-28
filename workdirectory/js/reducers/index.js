import counter from './counter';
import store from '../state';


export function issues(state =[], action){
    switch (action.type) {
        case 'LOAD_ISSUES':
            return action.payload;
        default:
            return state;
    }
}

export function mabyActive(state ={}, action){
    switch (action.type) {
        case 'mabyActive':
        if(store.getState().mabyActive==0){
            return 1;
        }else{
            return 0;
        }

        default:
            return state;
    }
}


export {counter};
