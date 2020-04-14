import React, { Component } from 'react';
import Square from './Square';
import './board.css';
class Board extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            player1:this.props.player1,
            player2:this.props.player2,
            playerturn:1,
            grid:Array(9).fill(""),
            count:0
        }
    }
    handleAlert()
    {
        alert("This is invalid move!")
    }
    ongridClick =(index) =>
    {
        const grid=this.state.grid;
        if(grid[index]==="")
        {
            let win=1;
            this.setState({count : this.state.count+1});
            this.state.playerturn === 1 ? grid[index]="X"  :grid[index]="O";
            this.setState({grid})
            console.log(this.state.count);
            if(this.checkWinner())
            {
                if(this.state.playerturn===1) alert("player1 won match!");
                else alert("player2 won match!")
                win=0;
            }
            if(this.state.count===8 && win ===1 ) alert("Draw Match!");
            const playerturn = this.state.playerturn===1 ? 2:1;
            this.setState({playerturn});
            
        }
        else{
                this.handleAlert();
        }

    };
    checkWinner = () =>
    {
        const grid=this.state.grid;
        if(grid[0]!== "" && grid[0]===grid[1] && grid[1]===grid[2]){
            return true;
        }
        else if(grid[3]!== "" && grid[3]===grid[4] && grid[4]===grid[5]){
            return true;
        }
        else if(grid[6]!== "" && grid[6]===grid[7] && grid[7]===grid[8]){
            return true;
        }
        else if(grid[3]!== "" && grid[0]===grid[3] && grid[3]===grid[6]){
            return true;
        }
        else if(grid[1]!== "" && grid[1]===grid[4] && grid[4]===grid[7]){
            return true;
        }
        else if(grid[2]!== "" && grid[2]===grid[5] && grid[5]===grid[8]){
            return true;
        }
        else if(grid[0]!== "" && grid[0]===grid[4] && grid[4]===grid[8]){
            return true;
        }
        else if(grid[2]!== "" && grid[2]===grid[4] && grid[4]===grid[6]){
            return true;
        }
        
        return false;
    };
    handleReset = ()=>
    {
        const grid = Array(9).fill("");
        this.setState({grid});
        const playerturn=1;
        this.setState({playerturn});

    };
    
    render() { 
        return ( 
            <React.Fragment>
            {/* <button className="btn badge-primary sm">Start Game</button>
            <p>player1 is : {this.state.player1}</p>
            <p>player2 is : {this.state.player2}</p> */}
        <div className="grid">
            <div className="row">
                <Square grid={this.state.grid} index={0} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={1} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={2} gridClick={this.ongridClick}/>
            </div>
            <div className="row">
                <Square grid={this.state.grid} index={3} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={4} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={5} gridClick={this.ongridClick}/>
            </div>
            <div className="row">
                <Square grid={this.state.grid} index={6} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={7} gridClick={this.ongridClick}/>
                <Square grid={this.state.grid} index={8} gridClick={this.ongridClick}/>
            </div>
        </div>
        </React.Fragment>
         );
    }
}
 
export default Board;
// gridClick={this.gridClick}