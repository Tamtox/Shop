import axios from "axios";
import React from "react";
import CartItem from './CartItem';
import ShopItem from './ShopItem';
import DetailedShopItem from './DetailedShopItem';
import './Styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      shopItems:[],
      searchItems:[],
      cartItems:[],
      detailedItem:0,
      input:'',
      toggledCart:false,
      detailed:false
    }
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
          const shopItems = res.data;
          for(let item of shopItems) {
            let quantity = Math.floor(Math.random() * 99);
            item.quantity = quantity;
            delete item.category
          }
          this.setState({
            shopItems
          });
        })
  }
  addToCart = (index) => {
    if(this.state.shopItems[index].quantity>0) {
      const newCart = [...this.state.cartItems];
      const productsIncCart = newCart.map(item=>{
        return item.id
      })
      if(productsIncCart.includes(this.state.shopItems[index].id) === false) {
        const newShop = [...this.state.shopItems];
        newShop[index].quantity-=1;
        const newCartItem = Object.assign({},this.state.shopItems[index]);
        newCartItem.quantity=1;
        newCart.push(newCartItem);
        this.setState({
          shopItems:newShop,
          cartItems:newCart
        })
      }
      else{
        alert("Already In Cart")
      }
    }
    else{
      alert("Out Of Stock")
    }
  }
  removeFromCart = (index) => {
    const newCart = [...this.state.cartItems];
    const newShop = [...this.state.shopItems];
    let [itemID,itemCount] = [newCart[index].id,newCart[index].quantity];
    newShop.forEach((item,index)=>{
      if(item.id === itemID) {
        newShop[index].quantity+=itemCount
      }
    })
    newCart.splice(index,1);
    this.setState({
      shopItems:newShop,
      cartItems:newCart
    })
  }
  plusOne = (index) => {
    const newShop = [...this.state.shopItems];
    const newCart = [...this.state.cartItems];
    let [cartID,itemIndex] = [newCart[index].id,0]
    newShop.forEach((item,shopIndex)=>{
      if(item.id === cartID) {
        itemIndex = shopIndex;
      }
    })
    if(newShop[itemIndex].quantity>0) {
      newShop[itemIndex].quantity-=1
      newCart[index].quantity+=1;
      this.setState({
        shopItems:newShop,
        cartItems:newCart
      })
    }
    else{
      alert("Out Of Stock")
    }
  }
  minusOne = (index) => {
    const newShop = [...this.state.shopItems];
    const newCart = [...this.state.cartItems];
    let [cartID,itemIndex,itemCount] = [newCart[index].id,0,newCart[index].quantity]
    newShop.forEach((item,shopIndex)=>{
      if(item.id === cartID) {
        itemIndex = shopIndex;
      }
    })
    if(itemCount>1) {
      newShop[itemIndex].quantity+=1
      newCart[index].quantity-=1;
      this.setState({
        shopItems:newShop,
        cartItems:newCart
      })
    }
    else{
      this.removeFromCart(index)
    }
  }
  toggleCart = () =>{
    this.setState({
      toggled:!this.state.toggled
    })
  }
  toggleDetailed = (index) =>{
    if(index === null) {
      this.setState({
        detailed:!this.state.detailed
      })
    }
    else {
      this.setState({
        detailedItem:index,
        detailed:!this.state.detailed
      })
    }
  }
  search = (event) => {
    this.setState({
      input:event.target.value,
    })
    const filtered = [...this.state.shopItems].filter(item=>{
      let prodName = item.title.toLowerCase();
      if(prodName.includes(this.state.input) || item.title.includes(this.state.input)) {
        return item
      }
    })
    this.setState({
      searchItems:filtered
    })
  }
  render() {
    let cart = null;
    let total = null;
    if(this.state.cartItems.length>0) {
      total=0;
      this.state.cartItems.forEach((item)=>{
        total+= (parseFloat(item.quantity)*parseFloat(item.price))
      })
      total = "Total: $" + total.toFixed(2)
    }
    if(this.state.toggled === true) {
      cart = (
        <div className='Cart'>
          <div className="CartItems">
            {this.state.cartItems.map((item,index) => {
              let subtotal = (parseFloat(item.quantity)*parseFloat(item.price))
              subtotal = subtotal.toFixed(2)
              return <CartItem key={index} title={item.title} image={item.image} price={'$' + item.price} quantity={item.quantity} subtotal={"$"+subtotal} plusOne={()=>this.plusOne(index)} minusOne={()=>this.minusOne(index)} removeFromCart={()=>this.removeFromCart(index)} />
            })}
          </div>
          <div className='Checkout'>{total}</div>
        </div>)
    }
    let shop = null;
    if(this.state.detailed === true) {
      let item = this.state.shopItems[this.state.detailedItem]
      shop = (
        <DetailedShopItem  image={item.image} title={item.title} description={item.description} price={'$' + item.price} quantity={item.quantity} addToCart={()=>this.addToCart(this.state.detailedItem)} toggleDetailed={()=>this.toggleDetailed(null)}/>
      )
    }
    else {
      if(this.state.input.length === 0) { 
        shop = (
          <div className='Shop'>
          {this.state.shopItems.map((item,index) => {
            return <ShopItem key={index} image={item.image} title={item.title} price={'$' + item.price} addToCart={()=>this.addToCart(index)} toggleDetailed={()=>this.toggleDetailed(index)}/>
          })}
        </div>)
      }
      else{
        shop = (
          <div className='Shop'>
          {this.state.searchItems.map((item,index) => {
            return <ShopItem key={index} image={item.image} title={item.title} price={'$' + item.price} addToCart={()=>this.addToCart(index)} toggleDetailed={()=>this.toggleDetailed(index)}/>
          })}
        </div>)
      }
    }
    return(
      <div className="App">
        <div className='Inputs'>
          <input type="text" className="Search" value={this.state.input} onChange={this.search}/>
          <button className="ToggleCart button" onClick={this.toggleCart}><FontAwesomeIcon icon={faShoppingCartyarn } /></button>
        </div>
        {shop}
        {cart}
      </div>
    )
  }
}

export default App;
console.log(name);
var name = 'Dan'