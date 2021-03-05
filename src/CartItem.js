import './Styles/CartItem.scss'
function CartItem({title,image,price,quantity,subtotal,plusOne,minusOne,removeFromCart}) {
    return (
        <div className="CartItem" >
            <div className='CartTitle'>{title}</div>
            <img className='CartImage' src={image} alt="" srcset=""/>
            <div className='CartPrice'>Price:{price}</div>
            <div className='CartQuantity'>{quantity}</div>
            <div className='Subtotal'>{subtotal}</div>
            <button className='MinusOne button' onClick={minusOne}>-</button>
            <button className='PlusOne button' onClick={plusOne}>+</button>
            <button className='Remove button' onClick={removeFromCart}>Remove</button>
        </div>
    )
    }
export default CartItem 