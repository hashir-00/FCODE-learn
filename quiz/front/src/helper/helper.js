import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function attempts_Number(result){
    return result.filter(r=>r!==undefined).length
}
export function earnPoints_Number(result,answers){
   
    return{
        earnPoints: result.filter((r,i)=>r===answers[i]).length*10,
        totalPoints: result.length*10

    }
}
export function flag_points(earnPoints,totalPoints){
    if((earnPoints/totalPoints)> 0.5 ){
        return true
    }
} 

export function CheckUserExist({children}){
    const auth=useSelector(state=>state.result.userId)
    return auth ?children:<Navigate to ={"/"} replace={true}></Navigate>
}