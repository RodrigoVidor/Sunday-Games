import React, { useState, useEffect } from "react";
import Content from "../Interface/Content";
import Paragrafo from "../Interface/Paragrafo";
import Botao from "../Interface/Botao";
import Pipe from "../Interface/Pipe";
import "./home.css";
import HttpRequest from "../../utils/HttpRequest";

export default function Home({ history }) {
  const [gamesActivities, setGamesActivities] = useState([]);
  const token = localStorage.getItem("token");

  if (!token) history.push("/login");

  const loadGamesActivities = async () => {
    const response = await new HttpRequest("gamesActivities", "GET")
      .setToken(token)
      .send();

    if (!response.ok) {
      window.alert(["Não foi possivel buscar os games", response.errorMessage]);
      return;
    }

    setGamesActivities(response.data);
  };

  const addGameActivity = async () => {
    const gameActivity = {
      title: "Novo Game",
      status: 0,
    };

    const response = await new HttpRequest("gamesActivities", "POST")
      .setBody(gameActivity)
      .setToken(token)
      .send();

    if (!response.ok) {
      window.alert(["Não foi possivel inserir o game", response.errorMessage]);
      return;
    }

    setGamesActivities([...gamesActivities, response.data]);
  };

  const updateGameActivity = async (gameActivity) => {
    const response = await new HttpRequest("gamesActivities", "PUT")
      .setToken(token)
      .setBody(gameActivity)
      .send();

    if (!response.ok) {
      window.alert([
        "Não foi possivel atualizar o game",
        response.errorMessage,
      ]);
      await loadGamesActivities();
      return;
    }
  };

  const updateGameActivityStatus = async (gameActivityId, status) => {

    const action = status === 0 ? "todo" : status === 1 ? "doing" : "done";

    console.log(`gamesActivities/${gameActivityId}/${action}`);
    const response = await new HttpRequest(
      `gamesActivities/${gameActivityId}/${action}`, "PUT")
      .setToken(token)
      .send();

    if (!response.ok) {
      window.alert([
        "Não foi possivel atualizar o status do game",
        response.errorMessage,
      ]);
      return;
    }

    gamesActivities.find(a => a.id === gameActivityId).status = status;
    setGamesActivities([...gamesActivities]);
  };

  const deleteGameActivity = async (gameActivity) => {
    console.log(`gamesActivities/${gameActivity.id}`);
    const response = await new HttpRequest(
      `gamesActivities/${gameActivity.id}`,
      "DELETE"
    )
      .setToken(token)
      .setBody(gameActivity)
      .send();

    if (!response.ok) {
      window.alert(["Não foi possivel excluir o game", response.errorMessage]);
      return;
    }

    setGamesActivities(gamesActivities.filter((a) => a.id !== gameActivity.id));
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
        {[0, 1, 2].map((status, index) => {
          return (
            <Pipe
              key={index}
              gameActivities={gamesActivities}
              status={status}
              onDelete={deleteGameActivity}
              onUpdate={updateGameActivity}
              onGameActivityDrops={(gameActivityId) =>
                updateGameActivityStatus(gameActivityId, status)
              }
            />
          );
        })}
      </div>
      <Botao
        className="btn btn-primary"
        text="Adicionar games"
        onClick={addGameActivity}
      />
      <Botao
        className="btn btn-secondary"
        text="Sair"
        type="secondary"
        onClick={onSair}
      />
    </Content>
  );
}
