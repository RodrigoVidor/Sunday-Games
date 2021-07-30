import React from "react";

export default function FormInput(props) {
   const {id, label, type, placeholder, value, onChange} = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
