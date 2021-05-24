import React from "react";

export default function ImageLink (props) {
  return (
        <a href={props.path}><img src={props.imageSrc} /></a>
  );
};