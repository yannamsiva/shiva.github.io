import React, {Component} from "react";

class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
    changeState()
    {
        this.setState(
        {
            message:'Thx for subscribing'
        }
        )
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeState()}>SubScribe</button>
            </div>
        )
    }
}
export default Message;