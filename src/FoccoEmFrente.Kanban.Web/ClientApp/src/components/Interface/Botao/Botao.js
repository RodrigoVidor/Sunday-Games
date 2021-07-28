import React from "react";

 export default function Botao(props) {
    return (
       <button onClick={props.onClick}>{props.text}</button>
    );
 }