import { useState } from "react";
import React from "react";

function WordInput({addWord}) {

    // 단어들을 가지는 배열을 관리
    const [text, setText] = useState('')

    const changeText = (event) => {
        setText(event.target.value)
    }

    const ClickAdd = () => {
        addWord(text)
        setText('')
    }

    return (
        <div style={{border: '3px solid #333', padding: 10, width: 200}}>
            <input
                type="text"
                value={text}
                onChange={e => changeText(e)}
            />
            <button onClick={ClickAdd}>단어 추가</button>
        </div>   
    )
}

export default WordInput