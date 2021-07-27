import React, { useState } from "react";

export default function Login({history}) {

   const desc = useState("Bem vindo ao <strong>Sunday-Games.com</strong>, o melhor sistema para gestão de games.");

   const onRegister = () => {

      history.push("/register");

   }
   
   function Content(props) {
      return (
         <div style={{width: "450px"}}>
            {props.children}
         </div>
      );
   }
   function Paragrafo(props) {
      return (
         <p>
            {props.descricao}
         </p>
      );
   }
   function FormInput(props) {
      return (<>
         <label>{props.id, props.type, props.placeholder, props.label}</label>
         <input /> 
         </>
      );
   }

   function Botao(props) {
      return (
         <button>{props.text}</button>
      );
   }

   return (
      <Content>
         <Paragrafo descricao={desc}></Paragrafo>
         <form>
            <FormInput id="email" type="email" placeholder="E-mail" label="E-mail"/>
            <FormInput id="senha" type="password" placeholder="Insira sua Senha" label="Senha"/>
            <Botao text="Entrar" submit />
            <Botao text="Registrar" type="secondary"/>
         </form>
      </Content>
   );

}