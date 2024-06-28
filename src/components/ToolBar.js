import React from "react";

function Toolbar({isLogin, onClickLoginHandle, onClickLogoutHandle}) {
    // {a, b, c}
    // const {isLogin, onClickHandle, onClickLogout} = props

    return (
        <div style={{ padding: 5, borderBottom: '1px solid gray' }}>
            {isLogin && <h3>환영합니다.</h3>}

            {
                isLogin ?
                    <button onClick={onClickLogoutHandle}>로그아웃</button>
                    :
                    <button onClick={onClickLoginHandle}>로그인</button>
            }

        </div>
    )
}

export default Toolbar