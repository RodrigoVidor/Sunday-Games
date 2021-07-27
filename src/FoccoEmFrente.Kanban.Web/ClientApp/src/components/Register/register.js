import React from "react";

export default function Register({history}) {

    const onVoltar = () => {

        history.push("/login");

    }

    function Content() {
      //return (<div>style={{width: "450px"}}</div>)
   }
   function Paragrafo() {
      return <p>Bem vindo ao <strong>Sunday-Games.com</strong>, o melhor sistema para gestão fe games.</p>
   }
   function FormInput() {
      return <div></div>
   }
   function Botao() {
      return <div></div>
   }


    return (
        <Content width={450}>
           <Paragrafo>Crie uma conta no <strong>Sunday-Games.com</strong></Paragrafo>
           <form>
              <FormInput id="email" type="email" placeholder="E-mail" label="E-mail"/>
              <FormInput id="senha" type="password" placeholder="Insira sua Senha" label="Senha"/>
              <FormInput id="senha-conf" type="password" placeholder="Confirme sua Senha" label="Senha-conf"/>
              <Botao text="Registrar" submit />
              <Botao text="Voltar" type="secondary"/>
           </form>
        </Content>
     );
/*
   return (
      <div style={{width: "450px"}}>
         <p>Crie uma conta no <strong>Sunday-Games.com</strong></p>
         <form>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="E-mail" />
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" placeholder="Insira sua senha" />
            <label htmlFor="confirm-password">Confirmar senha</label>
            <input id="confirm-password" type="password" placeholder="Confirmar senha" />
            <button className="btn btn-primary" type="submit">Registrar</button>
            <button className="btn btn-secondary" onClick={onVoltar}>Voltar</button>
         </form>
      </div>
   );*/
}