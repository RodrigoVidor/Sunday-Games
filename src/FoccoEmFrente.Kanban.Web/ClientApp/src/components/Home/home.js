import React, { useState, useEffect } from "react";
import Content from "../Interface/Content";
import Paragrafo from "../Interface/Paragrafo";
import Botao from "../Interface/Botao";
import Pipe from "../Interface/Pipe";
import "./home.css";

export default function Home({ history }) {
  const [gamesActivities, setGamesActivities] = useState([]);
  const token = localStorage.getItem("token");

  if (!token) history.push("/login");

  const loadGamesActivities = async () => {
    const response = await fetch("/api/gamesActivities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
    });

    const responseContent = await response.json();

    if (!response.ok) {
      window.alert(["Não foi possivel buscar os games", responseContent]);
      return;
    }

    setGamesActivities(responseContent);
  };

  const onSair = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  useEffect(() => {
    async function fetchData() {
      await loadGamesActivities();
    }

    fetchData();
  }, []);

  return (
    <Content width="800px">
      <Paragrafo>
        Bem vindo ao <strong>Sunday-Games.com</strong>
      </Paragrafo>
      <Paragrafo>
        Esse é seu canvas para organizar seus games em desenvolviment
      </Paragrafo>
      <Paragrafo>
        Crie novos desenvolvimentos e mantenha elas atualizadas
      </Paragrafo>
      <div className="canvas">
        <Pipe gameActivities={gamesActivities} status={0} />
        <Pipe gameActivities={gamesActivities} status={1} />
        <Pipe gameActivities={gamesActivities} status={2} />
      </div>
      <Botao text="Adicionar games" submit />
      <Botao text="Sair" type="secondary" onClick={onSair} />
    </Content>
  );
}
