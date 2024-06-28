import React from "react";

function Clock() {
    return (
        <div>
            <h1>Clock</h1>
            <h3>현재시간 : {new Date().toLocaleTimeString()}</h3>
        </div>
    )
}

export default Clock;