import React, { useState } from "react";

export default function Click(){
     
    const [count,setCount]= useState(0);


    function UpdateClick(){
        setCount(count+1)
    }

    return (
        <div>
            <h1>Click Component</h1>
            <button onClick={UpdateClick}>Click Me{count}</button>
        </div>
    )
    
}
