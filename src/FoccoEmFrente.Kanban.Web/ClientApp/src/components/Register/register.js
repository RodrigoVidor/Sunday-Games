import React, { useState } from "react";
import Content from "../Interface/Content";
import Paragrafo from "../Interface/Paragrafo";
import FormInput from "../Interface/FormInput";
import Botao from "../Interface/Botao";
import HttpRequest from "../../utils/HttpRequest";

export default function Register({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const OnRegister = async (event) => {
    event.preventDefault();

    const response = await new HttpRequest("account/register ", "POST")
      .setBody({
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
      .send();

    if (!response.ok) {
      window.alert(response.errorMessage);
      return;
    }

    localStorage.setItem("token", response.data);
    history.push("/");
  };

  const onVoltar = () => {
    history.push("/login");
  };

  return (
    <Content width="450px">
      <Paragrafo>
        Crie uma conta no <strong>Sunday-Games.com</strong>
      </Paragrafo>
      <form onSubmit={OnRegister}>
        <FormInput
          id="email"
          type="email"
          placeholder="E-mail"
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          id="senha"
          type="password"
          placeholder="Insira sua Senha"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <FormInput
          id="senha-conf"
          type="password"
          placeholder="Confirme sua Senha"
          label="Confirmar senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Botao className="btn btn-primary" text="Registrar" submit />
        <Botao className="btn btn-secondary" text="Voltar" type="secondary" onClick={onVoltar} />
      </form>
    </Content>
  );
}
