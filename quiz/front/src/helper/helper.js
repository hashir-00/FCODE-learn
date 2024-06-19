import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import axios from "axios"

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

export async function getServerData(url,callback){
   const data= await (await axios.get(url))?.data
   return callback?callback(data):data

}
export async function postServerData(url,result,callback){
    const data= await (await axios.post(url,result))?.data
    return callback?callback(data):data
 
 }
//  postServerData("http://localhost:5000/api/result", {"username":"ss"
//     ,"result":[1,2,3,4]
//     ,"attempts":22
//     ,"points":2
//     ,"achieved":"pass"
      
//     })