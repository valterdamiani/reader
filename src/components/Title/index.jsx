import React from "react";

export default function Title (props) {
  return (
    <div>
      <h1 className={props.class}>{props.label}</h1>
    </div>
  );
};