import React, { useState } from "react";
import "../styles/Main.css";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { moveNextQuestion } from "../hooks/fetchQuestion";
import { movePreviousAction } from "../redux/questionReducer";
import { PushAnswer, publishResult } from "../hooks/setResults";
import { Navigate } from "react-router-dom";
import {
  attempts_Number,
  earnPoints_Number,
  flag_points,
} from "../helper/helper";


const Quiz = () => {
  
  const trace = useSelector((state) => state.questions.trace);
  const queue = useSelector((state) => state.questions.queue);
  const result = useSelector((state) => state?.result.result);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);


  const userId = useSelector((state) => state.result.userId);
  const questionAnswer = useSelector((state) => state.questions.questionAnswer);
  const attempts = attempts_Number(result);
  const points = earnPoints_Number(result, questionAnswer);
  const flag = flag_points(points.earnPoints, points.totalPoints);

  function onChecked(check) {
    setChecked(check);
  }

  const onPrev = () => {
    if (trace > 0) {
      dispatch(movePreviousAction());
    }
  };

  const onNext = () => {
    if (trace < queue?.length) {
      dispatch(moveNextQuestion());
    }
    if (result?.length <= trace) {
      dispatch(PushAnswer(checked));
    }
  };

  if (result?.length && result?.length >= queue?.length) {
    publishResult({
      result,
      userName: userId,
      attempts,
      points: points.earnPoints,
      achieved: flag ? "passed" : "fail",
    });

    return (
      <Navigate to={"/Results"} replace={true}>
        {" "}
      </Navigate>
    );
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions onChecked={onChecked} />
      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Previous
          </button>
        ) : (
          <></>
        )}
        {trace < queue?.length - 1 ? (
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        ) : (
          <></>
        )}
        {trace === queue?.length - 1 ? (
          <button className="btn next" onClick={onNext}>
            Submit
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Quiz;
