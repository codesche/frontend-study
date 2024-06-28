import React from "react";

function MyButton(props) {

    const handlerDelete = (id, event) => {
        alert('안녕하세요')
        console.log(id, event.target)
    }

    return (
        <button onClick={(event) => handlerDelete(1, event)}>
            삭제하기
        </button>
    )
}

export default MyButton