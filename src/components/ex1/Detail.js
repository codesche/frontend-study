import React from "react";

function Detail({menu}) {

    if (!menu) {
        return (
            <div>선택된 상품이 없습니다.</div>
        )
    }

    return (
        <div style={{border : '3px solid #333', padding: 10, width: 200}}>
            <h3>{menu.mno}</h3>
            <p>{menu.name}</p>
            <p>{menu.price}</p>
        </div>
    )
}

export default Detail