import React, { Component } from 'react';
import './board.css';

class Square extends Component {
    render() { 
        return ( 
        <div className="sqaure" onClick={()=>this.props.gridClick(this.props.index)}>
            <p className="gridSquare">{this.props.grid[this.props.index]}</p>
        </div>
         );
        }
}
// 
// onClick={()=>this.props.gridClick(this.props.index)}
export default Square;