import React, { useState } from "react";
import Content from "../Interface/Content";
import Paragrafo from "../Interface/Paragrafo";
import FormInput from "../Interface/FormInput";
import Botao from "../Interface/Botao";

export default function Login({history}) {

   const [formLogin, setFormLogin] = useState ({email:"", password:""});

   const setEmail = (event) => {
      setFormLogin({...formLogin, email: event.target.value});
   }

   const setPassword = (event) => {
      setFormLogin({...formLogin, password: event.target.value});
   }

   const onRegister = () => {

      history.push("/register");

   }

   const onLogin = async (event) => {
      event.preventDefault();

      const response = await fetch("/api/account/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(formLogin)
         
      });

      const responseContent = await response.json();

      if (!response.ok)
      {
         window.alert(responseContent);
         return;
      }

      localStorage.setItem("token", responseContent);
      history.push("/");
   }

     
   return (
      <Content width="450px">
         <Paragrafo>Bem vindo ao <strong>Sunday-Games.com</strong>, o melhor sistema para gestão de games.</Paragrafo>
         <form onSubmit={onLogin}>
            <FormInput id="email" type="email" placeholder="E-mail" label="E-mail" value={formLogin.email} onChange={setEmail}/>
            <FormInput id="senha" type="password" placeholder="Insira sua Senha" label="Senha" value={formLogin.password} onChange={setPassword}/>
            <Botao text="Entrar" submit />
            <Botao text="Registrar" type="secondary" onClick={onRegister}/>
         </form>
      </Content>
   );

}