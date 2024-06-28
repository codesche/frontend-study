import React from "react";

function Display({ arr, changeMenu }) {
    
    return (
        <div style={{ border: '3px solid #333', padding: 10, width: 200 }}>
            <ul>
                {
                    arr.map(menu => {
                        // 반복해야 하는 항목에는 키가 있어야 한다
                        return <li key={menu.mno} onClick={() => changeMenu(menu.mno)}> {menu.name} </li>
                    })
                }
            </ul>
        </div>
    )
    
}

export default Display