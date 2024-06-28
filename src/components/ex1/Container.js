
import React, { useState } from "react";
import Display from "./Display";
import Detail from "./Detail";

function Container(props) {
    
    // 하위 컴포넌트의 데이터를 관리, 관련된 핸들러 정의
    // 하위 컴포넌트로 필요한 속성 전달

    const styles = {
        wrapper: {
            padding: 15,
            Display: 'flex',
            flexDirection: 'row', 
            jstifyContent: 'space-around'
        }
    }

    const menus = [
        {mno: 1, name: '상품1', price: 3000},
        {mno: 2, name: '상품2', price: 4000},
        {mno: 3, name: '상품3', price: 5000},
        {mno: 4, name: '상품4', price: 6000},
        {mno: 5, name: '상품5', price: 7000}
    ]

    // 
    const [selectedMenu, setSelectedMenu] = useState()

    const changeMenu = (mno) => {
        const menu = menus.find(m => m.mno === mno)
        setSelectedMenu(menu)
    }
    
    return (
        <div styles={styles.wrapper}>
            <Display arr={menus} changeMenu={changeMenu}></Display>
            <Detail menu={selectedMenu}></Detail>
        </div>
    )
}

export default Container
