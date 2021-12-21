import React from "react";
import ReactDOM from "react-dom";

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <div className="hit-price">{props.hit.name}</div>
      </div>
      <div className="hit-description">
        <div className="hit-price">
          Rank {props.hit.rank} ({props.hit.year})
        </div>
      </div>
    </div>
  );
}

export default Hit;
