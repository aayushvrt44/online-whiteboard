import React from "react";
import Board from '../board/board';
import './style.css'; 

class Container extends React.Component
{
     constructor(props) {
        super(props) ;

        this.state = {
            colors : "#FFFFFF",
            color : "#000000",
            size : "5"
        }
     }
    changeColor(params) {
        this.setState({
              color: params.target.value
        })
    }
    changeSize(params) {
        this.setState({
            size: params.target.value
      })
    }

     render() {

        return (
            <div className="container">
                <div className ="tools-section">
                   <div className="color-picker-container">
                       Select Brush Color : &nbsp;
                       <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>    
                </div>
                <div className="brushsize-container">
                       Select Brush Size : &nbsp;
                       <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                        <option >2</option>
                        <option >5</option>
                        <option >10</option>
                        <option >15</option>
                        <option >20</option>
                        <option >25</option>
                        <option >30</option>
                       </select>
                </div>
                <div className="eraser-picker-container">
                     Select Eraser : &nbsp;
                    <input type="color" value={this.state.colors} onChange={this.changeColor.bind(this)}/>
                </div>
                </div>
                <div class="board-container">
                   <Board color={this.state.color} size={this.state.size} colors={this.state.colors}></Board>
                </div>
            </div>
            
            
        )
     }
}
export default Container