import React,{Component} from 'react'

class Counter2 extends Component
{

    constructor()
    {
        super();
        this.state={
            count : 0
        }
    }

    countIncrement()
    {
        this.setState(
            {
            count : this.state.count+1
            })
    }
    countDecrement()
    {
        this.setState(
            {
            count : this.state.count-1
            })
    }
render()
{
    return(
        
        <div>
            Count : {this.state.count} 
            <button onClick={()=>{this.countIncrement()}}>IncreMent</button>
            <button onClick={()=>{this.countDecrement()}}>DecreMent</button>

        </div>
        )

}

}

export default Counter2