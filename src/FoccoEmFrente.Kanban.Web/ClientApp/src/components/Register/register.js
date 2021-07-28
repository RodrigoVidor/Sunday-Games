import React, { useState } from "react";
import Content from "../Interface/Content";
import Paragrafo from "../Interface/Paragrafo";
import FormInput from "../Interface/FormInput";
import Botao from "../Interface/Botao";

export default function Register({history}) {

   const [email, setEmail] = useState ("");
   const [password, setPassword] = useState ("");
   const [confirmPassword, setConfirmPassword] = useState ("");


   const OnRegister = async (event) => {
      event.preventDefault();

      const response = await fetch("/api/account/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({
            email: email,
            password: password,
            confirmPassword: confirmPassword
         })
         
      });

      const responseContent = await response.json();

      if (!response.ok)
      {
         window.alert(responseContent);
         return;
      }

      localStorage.setItem("token", responseContent);
      history.push("/");

   };

    const onVoltar = () => {
       history.push("/login");
    };


    return (
        <Content width="450px">
           <Paragrafo>Crie uma conta no <strong>Sunday-Games.com</strong></Paragrafo>
           <form onSubmit={OnRegister}>
              <FormInput id="email" type="email" placeholder="E-mail" label="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
              <FormInput id="senha" type="password" placeholder="Insira sua Senha" label="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <FormInput id="senha-conf" type="password" placeholder="Confirme sua Senha" label="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
              <Botao text="Registrar" submit />
              <Botao text="Voltar" type="secondary" onClick={onVoltar}/>
           </form>
        </Content>
     );
}