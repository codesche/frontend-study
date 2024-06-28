import React, { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";

function WordContainer() {

    const styles = {
        wrapper: {
            padding: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    }

    // 단어들을 가지는 배열을 관리
    const [words, setWords] = useState(['AAA', 'BBB', 'CCC'])

    const addWord = (word) => {
        setWords([...words, word])
    }

    const removeWord = (word) => {
        // 새로운 배열 생성
        const filteredWords = words.filter(w => w !== word)
        setWords([...filteredWords])
    }

    return (
        <div style={styles.wrapper}>
            <WordInput addWord={addWord}></WordInput>
            <WordList words={words} removeWord={removeWord}></WordList>
        </div>
    )

}

export default WordContainer