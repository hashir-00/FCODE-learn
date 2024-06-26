import { createSlice } from "@reduxjs/toolkit";






export const questionReducer = createSlice({
name:'questions',
initialState:{
    queue:[],
    answers:[],
    trace:0,
    questionAnswer:[]
},
reducers:{
    startExamAction:(state,action)=>{
      
        return {
           ...state,
            queue:action.payload,
            questionAnswer:action.payload.map((data)=>data.answerIndex)
            
        }
    },
    moveNextAction:(state)=>{
        return{
            ...state,
            trace:state.trace+1
        }

    },movePreviousAction:(state)=>{
        return{
            ...state,
            trace:state.trace-1
        }

    },
    resetAllAction : ()=>{
        return{
            queue:[],
            answers:[],
            trace:0
        }
    }
}
})

export const {startExamAction,moveNextAction,movePreviousAction,resetAllAction} = questionReducer.actions
export default questionReducer