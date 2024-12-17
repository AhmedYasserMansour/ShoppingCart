import React from 'react';

const Cart = props => {
    const style = !props.product.isInCart ? {opacity:0.5, cursor:"pointer"} : {cursor : "pointer"}
    return ( 
    <>
    <i
    style={style} 
    onClick={()=> props.onClick(props.product)}
     className="fa-solid fa-cart-plus"></i>
    </>
     );
}
 export default Cart;