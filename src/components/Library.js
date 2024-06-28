import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book bookName='논어' bookPage='400'></Book>
            <Book bookName='맹자' bookPage='300'></Book>
            <Book bookName='대학' bookPage='200'></Book>
        </div>
    )
}

export default Library;