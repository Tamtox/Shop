import './Styles/ShopItem.scss'
function ShopItem  ({image,title,price,addToCart,toggleDetailed}) {
    return (
        <div className='ShopItem' >
            <img className='ShopImage' src={image} alt=""/>
            <div className='ShopTitle'>{title}</div>
            <div className='ShopPrice'>{price}</div>
            <button className='AddToCart button' onClick={addToCart}>Add to Cart</button>
            <button className='Detailed button' onClick={toggleDetailed}>Details</button>
        </div>
    )
}
export default ShopItem