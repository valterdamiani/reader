import React from "react";

export default function RedirectLink (props) {
  return (
     <p className={props.secondaryClass}>
        <a className={props.primaryClass} href={props.path}><i className={props.icon}></i>&nbsp;{props.label}</a>
    </p>
  );
};