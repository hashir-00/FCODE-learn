import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

const ResultTable = () => {
  const [data, setData] = useState([]);

  const getResults = async () => {
    try {
      let data = await getServerData(
        `${process.env.REACT_APP_SERVER_HOSTNAME}api/result`,
        (data) => data
      );
      return setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Result</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.userName}</td>
              <td>{item.attempts}</td>
              <td>{item.points}</td>
              <td>{item.achieved}</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default ResultTable;
