import React from "react";
import Player from "./Player";

// 배열 생성
let team = [
    {name:'손흥민', no : '7'},
    {name:'이강인', no : '19'},
    {name:'김민재', no : '3'}
]

function Team(props) {

    return (
        <div>
            {/* <Player playerName='손흥민1' playerNumber='71'></Player>
            <Player playerName='손흥민2' playerNumber='72'></Player>
            <Player playerName='손흥민3' playerNumber='73'></Player> */}
            {
                team.map((player) => {
                    return (
                        <Player playerName={player.name} playerNumber={player.no}></Player>
                    )
                })
            }

        </div>
    )

}

export default Team;