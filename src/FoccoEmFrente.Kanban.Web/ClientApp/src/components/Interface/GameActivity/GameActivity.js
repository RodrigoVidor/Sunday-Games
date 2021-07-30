import React, { useState } from "react";
import "../../Home/home.css";

export default function GameActivity({ gameActivity, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(gameActivity.title);

  const setGameActivityTitle = (value) => {
    setTitle(value);
  };

  const onBlurTitle = () => {
    setEditing(false);
    gameActivity.title = title;

    if (onUpdate) onUpdate(gameActivity);
  };

  const onEnterEditMode = () => {
    setEditing(true);
  };

  const onDeleteGameActivity = () => {
    if (onDelete) onDelete(gameActivity);
  };

  const onDragGameActivity = (event) => {
    event.dataTransfer.setData("gameActivityId", gameActivity.id);
  };

  const onDropGameActivity = (event) => {
    const gameActivityId = event.dataTransfer.getData("gameActivityId");
  };

  return (
    <div
      draggable={!editing}
      className={"gameActivity"}
      onDragStart={onDragGameActivity}
      onDrop={onDropGameActivity}
    >
      <button className="btn-del-game" onClick={onDeleteGameActivity}>
        X
      </button>
      {editing ? (
        <input
          value={title}
          onBlur={onBlurTitle}
          autoFocus
          onChange={(event) => setGameActivityTitle(event.target.value)}
        />
      ) : (
        <span onDoubleClick={onEnterEditMode}>{gameActivity.title}</span>
      )}
    </div>
  );
}
