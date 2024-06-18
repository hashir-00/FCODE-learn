import React from "react";

export default class ClassProps extends React.Component{
    render(){
        return(
            <div>
                {this.props.name} props
                {this.props.children}
            </div>
        )
    }
}