import React,{Component} from 'react'
import {connect} from 'react-redux'

 class ClassCompRedux extends Component{

//     constructor(props){
//         super(props)
//         this.state = {
//            message:"subscribe",
//         subscribe:"subscribe"
//         }
//    }
   styles= {
    color: "red",
    fontSize: "20px"
}

//  buttonchange=(params) =>{
//     this.setState({
//         message:"subscribed",
//          subscribe:"subscribed"
//     })

// }

render(){
    return(
        <div>
            <h1 style={this.styles}>{this.props.message}</h1>
            <button onClick={this.props.buttonchange}>{this.state.subscribe}</button>
        </div>
    )
}

}

const mapStateProps = (state )=>{
    return{
        message:state.message,
        subscribe:state.subscribe
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        buttonchange:()=>dispatch({type:"SUBSCRIBE"})
    }
}

export default connect(mapDispatchProps,mapStateProps)(ClassCompRedux)