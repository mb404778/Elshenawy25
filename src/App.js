import React, { Component }  from "react";
import Cart from "./Cart"

import HomePage from "./HomePage/HomePage";

class App extends Component {

state = {

  persons : [
    {name : "Elshenawy", color : "blue"},
    {name : "Gendy", color : "red"},
    {name : "Mohamed", color : "green"},

  ]

}

switchName =(newName)=>{
  this.setState(
    {

      persons : [
        {name : newName, color : "blue"},
        {name : "Gendy", color : "red"},
        {name : "Mohamed", color : "green"},
    
      ]
    
    }
  )
}
  render(){

  return(


    <div className="text-center">
      <HomePage/>
      <br/>
      <Cart name = {this.state.persons[0].name} color ={this.state.persons[0].color}/>
      <br/>
      <button className="btn btn-primary " onClick={this.switchName.bind(this,"Omar")}>Change</button>
      <br/>
      <br/>

    </div>

  )
}
}

export default App;