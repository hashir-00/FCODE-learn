import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { moveNextQuestion } from "../hooks/fetchQuestion";
import { movePreviousAction } from "../redux/questionReducer";
import { PushAnswer } from "../hooks/setResults";

const Quiz = () => {
  const trace = useSelector((state) => state.questions.trace);
  const queue = useSelector((state) => state.questions.queue);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    console.log(trace, queue, state);
    console.log("s");
  });

  function onChecked(check) {
    setChecked(check);
  }

  const onPrev = () => {
    if (trace > 0) {
      dispatch(movePreviousAction());
    }
  };

  const onNext = () => {
    if (trace < queue?.length ) {
      dispatch(moveNextQuestion());
      dispatch(PushAnswer(checked));
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Questions onChecked={onChecked} />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          {" "}
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Quiz;
