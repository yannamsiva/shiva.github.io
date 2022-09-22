import React, { Component } from 'react'

 class Counter extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}
countDecrement()
{
    this.setState(
        {
            count : this.state.count-1
        }
    )
}
countIncrement()
{
    this.setState(
{
    count : this.state.count+1
}


    )
    
}

  render() {
    return (
      <div>
       Count -  {this.state.count}<br></br>
       <button onClick= {()=> this.countIncrement()} >IncreMent</button>
       <button onClick= {()=> this.countDecrement()} >Decrement</button>

      </div>

    )
  }
}

export default Counter