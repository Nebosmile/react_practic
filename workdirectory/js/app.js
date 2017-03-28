import React from 'react';
import {connect} from 'react-redux'
import store from './state';


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                <h1>Hello world,{this.props.user}</h1>
                <input type ='button' value= 'click me' onClick = {
                        ()=>{store.dispatch({
                            type: 'mabyActive',
                        })}
                    }/>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return{
        user:state.mabyActive
    }
}
export default connect(mapStateToProps)(App)
