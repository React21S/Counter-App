import React, { Component } from "react";



class  Main extends Component{
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({counter:this.state.counter + 5})
  };

  addOneHandler = () => {
    this.setState({counter:this.state.counter + 1})
  };
  removeOneHandler = () => {
   
    if (this.state.counter !==0){
      this.setState({counter:this.state.counter - 1});
    };
    
  };

  removeFiveHandler = () => {
    if (this.state.counter !==0){
    this.setState({counter:this.state.counter - 5});
    };
  };
  resetHandler = () => {
    this.setState({counter:0})
  };

  render(){
    //let circleClass = "";

    // if (this.state.counter === 0){
    //   circleClass = "box";
    // } else if (this.state.counter % 2 === 0){
    //   circleClass = "box even";
    // } else {
    //   circleClass = "box odd";
    // }


    // another method 
    // this.state.counter === 0
    //  ?( circleClass = "box")
    //  :this.state.counter % 2 === 0
    //  ?( circleClass = "box even")
    //   :(circleClass = "box odd");
    
     
    // Another method
    let circleClass = `${
    this.state.counter === 0
      ?""
      :this.state.counter % 2 === 0
      ? "even"
       :"odd"} box`;
     

  return <main>
  
    <div>
    <h1 className={circleClass} >{this.state.counter}</h1>
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

// const colors = [
//   "rgb(25,154,216)",
//   "rgb(196,4,114)",
//   "rgb(180,27,255)",
//   "rgb(60,33,191)",
//   "rgb(34,116,246)",
//   "rgb(140,212,38)",
//   "rgb(238,4,181)",
//   "rgb(159,77,22)",
//   "rgb(9,189,57)",
//   "rgb(43,114,187)",
//   "rgb(118,186,97)",
//   "rgb(181,69,131)",
//   "rgb(120,173,7)",
//   "rgb(12,36,79)",
//   "rgb(222,71,163)",
//   "rgb(133,121,111)",
//   "rgb(89,176,171)",
//   "rgb(48,159,231)",
//   "rgb(3,132,250)",
//   "rgb(3,181,69)",
//   "rgb(48,209,103)",
//   "rgb(154,129,248)",
//   "rgb(157,203,10)",
//   "rgb(32,245,27)",
//   "rgb(58,61,118)",
//   "rgb(225,112,85)",
//   "rgb(138,83,191)",
//   "rgb(74,205,250)",
//   "rgb(71,14,238)",
//   "rgb(129,164,18)",
//   "rgb(130,125,190)",
//   "rgb(90,144,230)",
//   "rgb(40,64,239)",
//   "rgb(56,107,55)"
// ]
// class Main extends Component{
//   state ={
//     count:0,
//     color:''
//   }

//   addFive = () => {
//     this.setState({count:this.state.count + 5})
//   };
//   addOne = () => {
//     this.setState({count:this.state.count + 1})
//   };
//   removeOne = () => {
//     this.setState({count:this.state.count - 1})
//   };
//   removeFive = () => {
//     this.setState({count:this.state.count - 5})
//   };
//   reset = () => {
//     this.setState({count:0})
//   };

//   changeColor = () => {
//     const index = Math.floor(Math.random() * colors.length)
//     let color = colors[index]
//     this.setState({color})
//   }

//   render(){
//     return <main>
//   <div style = {{
//         background:this.state.color,
//       }} className="box">{this.state.count}</div>
//      <div>
//       <button onClick={this.addFive} onMouseLeave={this.changeColor}>Add Five</button>
//       <button onClick={this.addOne} onMouseLeave={this.changeColor}>Add One</button>
//       <button onClick={this.removeOne} onMouseLeave={this.changeColor}> Remove One</button>
//       <button onClick={this.removeFive} onMouseLeave={this.changeColor}>Remove Five</button>
//       <button onClick={this.reset} onMouseLeave={this.changeColor}>Reset</button>
//      </div>
//   </main>
//   };
// };
// export default Main;