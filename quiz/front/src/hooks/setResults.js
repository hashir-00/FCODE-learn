
import { postServerData } from "../helper/helper";
import * as Action from "../redux/resultReducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

export const publishResult = (resultData) => {
  const { result, userName } = resultData;
  (async()=>{
 
    try {
        if( result.length !== 0 && !userName ) throw new Error("no dta")
        await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}api/result`,resultData,data=>data)
    } 
    catch (error) {

    }
  
  })()
}
