import React from "react";

 export default function FormInput(props) {
    return (<>
       <label>{props.id, props.type, props.placeholder}</label>

       <input type={props.type} placeholder={props.placeholder} value={props.value} /> 
       </>
    );
 }
