import React, { Component } from 'react';
import Board from './Board';

class InputForm extends Component {
    state = { 
        player1 : "",
        player2 : "",
        Edit : false
     }
     onPlayerOneChange = (event)=>{
         this.setState({player1:event.target.value});
     }
     onPlayerTwoChange = (event)=>{
        this.setState({player2:event.target.value});
    }
    render() { 
        return (
        <React.Fragment>
            <input type="text" placeholder="player1 Name" onChange={this.onPlayerOneChange}></input>
            <input type="text" placeholder="Player2 Name" onChange={this.onPlayerTwoChange}></input>
            {console.log(this.state.player1)}
            {console.log(this.state.player2)}
            <Board player1={this.state.player1} player2={this.state.player2}/>
            </React.Fragment>
        );
    }
}
 
export default InputForm;