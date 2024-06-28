import React from "react";


function UserImg1(props) {
    return (
        <img className="userImg"
            src={props.user.imgUrl}
            alt={props.user.userName}
        />
    )
}

function UserInfo1(props) {
    return (
        <div className="userinfo">
            <UserImg1 user={props.user}/>
            <div className="userinfoname">
                {props.user.userName}</div>
        </div>
    )
}


function Comment1(props){
    return (
        <div className="comment">
            <UserInfo1 user={props.user} />
            {/* reply Content */}
            <div className="commentContent"> {props.content} </div>
            {/* reply replydate */}
            <div className="replydate"> {props.replydate} </div>
        </div>
    )
}

export default Comment1