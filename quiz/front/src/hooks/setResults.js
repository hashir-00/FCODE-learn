
import * as Action from'../redux/resultReducer'

export const PushAnswer= (result)=>async(dispatch)=>{
    try{
        dispatch(Action.pushResultAction(result))
    }
    catch(error){
        console.log(error)
    }
}