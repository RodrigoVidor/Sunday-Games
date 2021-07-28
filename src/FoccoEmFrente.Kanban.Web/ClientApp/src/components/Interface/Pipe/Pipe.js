import React from "react";
import GameActivity from "../GameActivity";
import '../../Home/home.css'


export default function Pipe({gameActivities, status}) {

    const gameActivitieList =
        gameActivities && gameActivities.filter((a) => a.status === status);


    const title = status === 0 ? "Aguardando" :
    status === 1 ? "Em andamento" :
    "Concluido";

    return (
        <div className={`pipe pipe-${status}`}>
            <span className="pipe-title">{title} / {gameActivitieList.length}</span>
            {gameActivitieList.map((gameActivity, index) => {
                return <GameActivity gameActivity={gameActivity} key={index} />;
            })}
        </div>
    )
}