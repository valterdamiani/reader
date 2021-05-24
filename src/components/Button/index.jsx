import React from "react";

export default function GenericButton (props) {
  return (
      <button className={props.class} type={props.type} onClick={props.data}>{props.label}</button>
  );
};

 