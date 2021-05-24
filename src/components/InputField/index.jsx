import React from "react";

export default function InputField (props) {
  return (
    <div>
      <input
        className={props.class}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
};