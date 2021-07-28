import React from "react";


export default function GameActivity({gameActivity}) {

    return (
        <div className={"gameActivity"}>
            <span>{gameActivity.title}</span>
        </div>
    )
}