import React from "react";
import ReactDOM from "react-dom";

function Hit(props) {
  return (
    <div>
      <div className="hit-rank">#{props.hit.rank}</div>
      <div className="hit-name">
        <div className="hit-price">{props.hit.name}</div>
      </div>
      <div className="hit-worth">
        ${props.hit.wealth["worth in billions"]} Billion ({props.hit.year})
      </div>
      <div className="hit-description"></div>
    </div>
  );
}

export default Hit;
