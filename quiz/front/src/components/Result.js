import React from "react";
import "../styles/Results.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

const Results = () => {
  function onRestart(){
    console.log('restart')

  }
  
    return (
    <div className="container">
      <h1>Quiz Appli</h1>
      <div>
        <div>
          <span>Username</span>
         
          <span> #</span>
        </div>
        <div>
          <span>results</span>
         
          <span> #</span>
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
          <span>Total earn points</span>
         
          <span> #</span>
        </div>
      </div>

      <div>
        <Link to={'/'} onClick={onRestart}>restart</Link>
      </div>
      <div>
        <ResultTable/>
      </div>
    </div>
  );
};
export default Results;
