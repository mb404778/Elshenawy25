// import React from 'react'

//  function Cart(props) {
//   return (
//     <div>
//         <h2>My Name is {props.namee}</h2>
//         <h2>My Age is {props.age}</h2>
//     </div>
//   )
// }

// export default Cart;


import React, { Component } from 'react'

 class Cart extends Component {
    state = {

        persons : [
          {name : "Elshenawy", color : "blue"},
          {name : "Gendy", color : "red"},
          {name : "Mohamed", color : "green"},
      
        ]
      
      }

      changeName =(event)=>{
        this.setState(
            {

                persons : [
                  {name : event.target.value, color : "blue"},
                  {name : "Gendy", color : "red"},
                  {name : "Mohamed", color : "green"},
              
                ]
              
              }
        )
      }

  render(props) {
    return (
      <div>
       <h2>My Name is {this.props.name}</h2>
       <h2>My Color is {this.props.color}</h2> 
       <br/>
       <h2>My Name is {this.state.persons[0].name}</h2>
       <input className='form-control' type='text' placeholder='Enter Your Name' onChange={this.changeName}></input>
      </div>
    )
  }
}

export default Cart;