import React, { useEffect, useState } from "react";
import { useFetchQuestions } from "../hooks/fetchQuestion";
import { useSelector } from "react-redux";

const Questions = ({onChecked}) => {
   const [{ isLoading, apiData, serverError }] = useFetchQuestions();
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.questions.trace);
  const question = data[state];

  useEffect(() => {
    setData(apiData);
  }, [apiData]);

  function onSelect(i) {
    onChecked(i)
  }

  return (
    <div className="questions">
      <h2 className="text-light">questions</h2>

      <div className="question">
        <h3>{question?.question}</h3>
        <div className="options">
          {question?.options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                name="option"
                id={option}
                value={option}
                onChange={() => onSelect(index)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Questions;
