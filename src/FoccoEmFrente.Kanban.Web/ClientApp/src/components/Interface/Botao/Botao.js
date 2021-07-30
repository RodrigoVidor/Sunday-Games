import React from "react";

 export default function Botao(props) {
    return (
       <button className={props.className} onClick={props.onClick}>{props.text}</button>
    );
 }