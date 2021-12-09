import React, { Component } from "react";
import {colors} from "./Colors"



class  Main extends Component{
  state = {
    counter:0,
    color:'',
  };

  addFiveHandler = () => {
    this.setState({counter:this.state.counter + 5});
    this.changeColor();
  };

  addOneHandler = () => {
    this.setState({counter:this.state.counter + 1});
    this.changeColor();
  };

  removeOneHandler = () => {
    if (this.state.counter !==0){
      this.setState({counter:this.state.counter - 1});
    };
    this.changeColor();
  };

  removeFiveHandler = () => {
    if (this.state.counter !==0){
    this.setState({counter:this.state.counter - 5});
    };
    this.changeColor();
  };
  resetHandler = () => {
    this.setState({counter:0});
    this.changeColor();
  };

  changeColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    let color = colors[index]
    this.setState({color})
  }

  render(){
    // // Another method
    // let circleClass = `${
    // this.state.counter === 0
    //   ?""
    //   :this.state.counter % 2 === 0
    //   ? "even"
    //    :"odd"} box`;
     

  return<main>
  
  <div style = {{
      background:this.state.color,
    }}  className="circle">
  {this.state.counter}
  </div>
   <div>
    <button onClick={this.addFiveHandler}>Add Five</button>
    <button onClick={this.addOneHandler}>Add One</button>
    <button onClick={this.removeOneHandler}> Remove One</button>
    <button onClick={this.removeFiveHandler}>Remove Five</button>
    <button onClick={this.resetHandler}>Reset</button>
   </div>
</main>
  };
};
 export default Main;