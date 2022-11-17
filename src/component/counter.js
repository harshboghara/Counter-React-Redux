import { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { decrement, increment,reset } from "../action/action";


class Counter extends Component {
    constructor(){
        super();
        this.state = ''
    }
    render(){
        return(
            <>
                <h1>Counter</h1>
                <h2>{this.props.state}</h2>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>
                <button onClick={this.props.reset}>reset</button>
            </>
        )
    }
}

const mapStateToProps=(state) =>{
    return {
        state,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);