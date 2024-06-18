const initialState = {
    message: "subscirbe"
}
const reducer = (state=initialState,action)=>{
    const newState= {...state}
    if(action.type === "SUBSCRIBE"){
        newState.message = "subscribed"
    }
    return newState;
}
export default reducer