import React,{Component} from "react";

class Counter1 extends  Component
{
constructor()
{
    super();
    this.state={
        count1 : 0
    }
}

countIncrement()
{
    this.setState(
        {
            count1: this.state.count1+1
        }
    )
}


countDecrement()
{
    this.setState(
        {
            count1: this.state.count1-1
        }
    )
}
    render()
    {
        return(

            
<div>
Counter1 : {this.state.count1}<br></br>
<button onClick={()=>{this.countIncrement()}}>InCrement</button>
<button onClick={()=>{this.countDecrement()}}>Decrement</button>

</div>   
        )
    }

}

export default Counter1;