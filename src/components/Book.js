import React from "react";

function Book(props) {
    return (
        <div>
            <div>책 정보 출력</div>
            <ul>
                <li>책이름 : {props.bookName}</li>
                <li>책 페이지 : {props.bookPage}</li>
            </ul>
        </div>
    )
}

export default Book;
