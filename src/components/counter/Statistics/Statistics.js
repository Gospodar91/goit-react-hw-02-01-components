import React from "react";

const Statistics = ({ state, getTotal, percentage }) => {
  const { good, neutral, bad } = state;

  return (
    <>
      <p>Good :{good}</p>
      <p>Neutral :{neutral}</p>
      <p>Bad :{bad}</p>
      <p>Total feedback :{getTotal()}</p>
      <p>Positive feedback :{percentage()}%</p>
    </>
  );
};
export default Statistics;
