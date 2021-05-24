import React from "react";

export default function TextField (props) {
  return (
    <div>
      <textarea
        className={props.class}
        rows={props.rows}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
};