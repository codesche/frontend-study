import React from "react";

function WordList({words, removeWord}) {
    return (
        <div style={{ border: '3px solid #333', padding: 10, width: 200 }}>
            <ul>
                {
                    words.map((word, index) => {
                        return <li key={index}>
                            {word}
                            <button style={{ fontSize: 12, marginLeft: 5 }}
                                onClick={() => removeWord(word)}
                            >삭제</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default WordList