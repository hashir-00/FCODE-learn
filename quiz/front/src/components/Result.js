import React from "react";
import "../styles/Results.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/questionReducer";
import { resetResult } from "../redux/resultReducer";
import {
  attempts_Number,
  earnPoints_Number,
  flag_points,
} from "../helper/helper";
import { publishResult } from "../hooks/setResults";

const Results = () => {
  const result = useSelector((state) => state.result.result);
  const userId = useSelector((state) => state.result.userId);
  const questionAnswer = useSelector((state) => state.questions.questionAnswer);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.result);
 

  const attempts = attempts_Number(result);


  const points = earnPoints_Number(result, questionAnswer);
  const flag = flag_points(points.earnPoints, points.totalPoints);

  publishResult({result,userName:userId,attempts,points:points.earnPoints,achieved:flag ? "passed":"fail" })
  
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResult());
  }
  return (
    <div className="container">
      <h1>Quiz Appli</h1>
      <div>
        <div>
          <span>Username</span>

          <span> {userId}</span>
        </div>
        <div>
          <span>results</span>

          <span>{points.earnPoints}</span>
        </div>
        <div>
          <span>tot questions</span>

          <span> #</span>
        </div>
        <div>
          <span>Totl attemps</span>

          <span> #</span>
        </div>
        <div>
          <span>Total points</span>

          <span>{points.totalPoints}</span>
        </div>
        <div>
          <span>{flag ? "passed" : "fail"}</span>

   
        </div>
      </div>

      <div>
        <Link to={"/"} onClick={onRestart}>
          restart
        </Link>
      </div>
      <div>
        <ResultTable />
      </div>
    </div>
  );
};
export default Results;
