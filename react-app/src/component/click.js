import React  from "react";

class Click extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

    }

    UpdateClick=()=>{
        this.setState({count:this.state.count+1})
                }
    render(){
        const {count}= this.state
        return (
            <div>
                
                <h1>Click Component</h1>
                <button onClick={this.UpdateClick}>Click Me{count}</button>
               
            </div>
        )
    }
}
export default Click;