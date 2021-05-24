import React from "react";
import api from '../../providers/api'
import swal from 'sweetalert';

export default function ActionButton (props) {

  function sendData () {
    console.log('chamou');
    if(props.action == 'favorite'){
        api.post(`/articles/${props.set}/favorite`)
        .then(response => {
          swal(props.set + ' has been added to your favorites list');
        })
        .catch(error => {
            swal(error.message);
        });
    }else{
      api.post(`/profiles/${props.set}/follow`)
      .then(response => {
        swal('You are following ' + props.set);
      })
      .catch(error => {
          swal(error.message);
      });
    }
}
  return (
      <button onClick={() => sendData()} className={props.class} ><i className={props.iconClass}></i>&nbsp; {props.label} {props.content} <span class="counter">{props.counter}</span></button>
  );
};