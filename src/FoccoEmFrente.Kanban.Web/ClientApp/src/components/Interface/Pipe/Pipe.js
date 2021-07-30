import React from "react";
import GameActivity from "../GameActivity";
import "../../Home/home.css";

export default function Pipe({
  gameActivities,
  status,
  onDelete,
  onUpdate,
  onGameActivityDrops,
}) {
  const gameActivitieList =
    gameActivities && gameActivities.filter((a) => a.status === status);

  const title =
    status === 0 ? "Aguardando" : status === 1 ? "Em andamento" : "Concluido";

  const onDeleteGameActivity = (gameActivity) => {
    if (onDelete) onDelete(gameActivity);
  };

  const onUpdateGameActivity = (gameActivity) => {
    if (onUpdate) onUpdate(gameActivity);
  };

  const onDragGameActivityOver = (event) => {
    event.preventDefault();
  };

  const onDropGameActivity = (event) => {
    const gameActivityId = event.dataTransfer.getData("gameActivityId");

    if (gameActivityId && onGameActivityDrops)
      onGameActivityDrops(gameActivityId);
  };

  return (
    <div
      className={`pipe pipe-${status}`}
      onDragOver={onDragGameActivityOver}
      onDrop={onDropGameActivity}
    >
      <span className="pipe-title">
        {title} / {gameActivitieList.length}
      </span>
      {gameActivitieList.map((gameActivity, index) => {
        return (
          <GameActivity
            gameActivity={gameActivity}
            key={index}
            onDelete={onDeleteGameActivity}
            onUpdate={onUpdateGameActivity}
          />
        );
      })}
    </div>
  );
}
