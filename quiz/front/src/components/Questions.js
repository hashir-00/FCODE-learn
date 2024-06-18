import React, { useEffect, useState } from "react";
import { useFetchQuestions } from "../hooks/fetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResultAction } from "../redux/resultReducer";
import { updateResult } from "../hooks/setResults";

const Questions = ({ onChecked }) => {
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();
  const result = useSelector((state) => state.result.result);

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const trace = useSelector((state) => state.questions.trace);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);


  useEffect(() => {
    dispatch(updateResultAction({ trace, checked }));
  }, [apiData, dispatch, trace, checked, questions, result]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
  }

  return (
    <div className="questions">
      <h2 className="text-light">questions</h2>

      <ul key={questions?.id}>
        <li>
          <h3>{questions?.question}</h3>
        </li>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Questions;

