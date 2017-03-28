import React from 'react';
import store from './state';


export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            numb: store.getState().mabyActive,
        }
    }
    render(){
        return(
            <div>
                <h1>Hello world{this.state.numb}</h1>
                <input type ='button' value= 'click me' onClick = {
                        ()=>{store.dispatch({
                            type: 'mabyActive',
                        })}
                    }/>
            </div>

        );
    }
}
