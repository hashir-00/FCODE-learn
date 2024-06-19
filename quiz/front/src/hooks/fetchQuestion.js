import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";
import * as Action from'../redux/questionReducer'
import { getServerData } from "../helper/helper";


export const useFetchQuestions = () => {
const dispatch= useDispatch()
  const [getData, setData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setData(prev => ({ ...prev, isLoading: true }));

     (async () => {
      try {
               let question = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}api/questions`,(data)=>data);
       
        
        if (question.length > 0) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: question }))
         dispatch(Action.startExamAction(question))
        
        }else{
            throw new Error("No questions")
        }
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false }));
        setData((prev) => ({ ...prev, serverError: error }));
      }
    })
    ();
  },[dispatch]);
  return [getData,setData]
};

export const moveNextQuestion=()=>async(dispatch)=>{
  try{
dispatch(Action.moveNextAction())
  }
  catch(error){
console.log(error)
  }
}
export const movepreviousQuestion = ()=>async(dispatch)=>{
  try{
    dispatch(Action.movePreviousAction())
      }
      catch(error){
    console.log(error)
      }
}