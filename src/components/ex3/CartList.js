import React from "react";

function CartList({cart, deleteMenu}) {
    
    return (
        <div style={{ border: '3px solid #333', padding: 10, width: 200 }}>
            <ul>
                {
                    cart.map((menu, index) => {
                        return <li key={index}>
                            {menu.name}
                            <button style={{ fontSize: 12, marginLeft: 5 }}
                                onClick={() => deleteMenu(menu.mno)}
                            >삭제</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default CartList