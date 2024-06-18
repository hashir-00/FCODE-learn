import { questionReducer } from "./questionReducer";
import  { configureStore, combineReducers } from '@reduxjs/toolkit'
import { resultReducer } from "./resultReducer";



const rootReducer= combineReducers({
    questions:questionReducer.reducer,
    result:resultReducer.reducer
})
export default configureStore({reducer:rootReducer});