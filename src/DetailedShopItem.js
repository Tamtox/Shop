import './Styles/DetailedShopItem.scss'
function DetailedShopItem  ({image,title,description,price,quantity,addToCart,toggleDetailed}) {
    return (
        <div className='DetailedShopItem' >
            <img className='DetailedShopImage' src={image} alt=""/>
            <div className='DetailedShopTitle'>{title}</div>
            <div className='DetailedShopDescription'>{description}</div>
            <div className='DetailedShopPrice'>Price:{price}</div>
            <div className='DetailedShopQuantity'>Stock:{quantity}</div>
            <button className='AddToCart button' onClick={addToCart}>Add to Cart</button>
            <button className='ToggleDetailed button' onClick={toggleDetailed}>Go Back</button>
        </div>
    )
}
export default DetailedShopItem