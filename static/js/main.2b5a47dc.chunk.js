(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{49:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var s=a(4),i=a.n(s),c=a(19),n=a.n(c),r=a(20),l=a(3),o=a(21),d=a(22),u=a(27),m=a(26),h=a(23),j=a.n(h),p=(a(49),a(0));var b=function(t){var e=t.title,a=t.image,s=t.price,i=t.quantity,c=t.subtotal,n=t.plusOne,r=t.minusOne,l=t.removeFromCart;return Object(p.jsxs)("div",{className:"CartItem",children:[Object(p.jsx)("div",{className:"CartTitle",children:e}),Object(p.jsx)("img",{className:"CartImage",src:a,alt:"",srcset:""}),Object(p.jsxs)("div",{className:"CartPrice",children:["Price:",s]}),Object(p.jsx)("div",{className:"CartQuantity",children:i}),Object(p.jsx)("div",{className:"Subtotal",children:c}),Object(p.jsx)("button",{className:"MinusOne button",onClick:r,children:"-"}),Object(p.jsx)("button",{className:"PlusOne button",onClick:n,children:"+"}),Object(p.jsx)("button",{className:"Remove button",onClick:l,children:"Remove"})]})};a(51);var O=function(t){var e=t.image,a=t.title,s=t.price,i=t.addToCart,c=t.toggleDetailed;return Object(p.jsxs)("div",{className:"ShopItem",children:[Object(p.jsx)("img",{className:"ShopImage",src:e,alt:""}),Object(p.jsx)("div",{className:"ShopTitle",children:a}),Object(p.jsx)("div",{className:"ShopPrice",children:s}),Object(p.jsx)("button",{className:"AddToCart button",onClick:i,children:"Add to Cart"}),Object(p.jsx)("button",{className:"Detailed button",onClick:c,children:"Details"})]})};a(52);var g=function(t){var e=t.image,a=t.title,s=t.description,i=t.price,c=t.quantity,n=t.addToCart,r=t.toggleDetailed;return Object(p.jsxs)("div",{className:"DetailedShopItem",children:[Object(p.jsx)("img",{className:"DetailedShopImage",src:e,alt:""}),Object(p.jsx)("div",{className:"DetailedShopTitle",children:a}),Object(p.jsx)("div",{className:"DetailedShopDescription",children:s}),Object(p.jsxs)("div",{className:"DetailedShopPrice",children:["Price:",i]}),Object(p.jsxs)("div",{className:"DetailedShopQuantity",children:["Stock:",c]}),Object(p.jsx)("button",{className:"AddToCart button",onClick:n,children:"Add to Cart"}),Object(p.jsx)("button",{className:"ToggleDetailed button",onClick:r,children:"Go Back"})]})},f=(a(53),a(24)),v=a(25),I=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).addToCart=function(t){if(s.state.shopItems[t].quantity>0){var e=Object(l.a)(s.state.cartItems);if(!1===e.map((function(t){return t.id})).includes(s.state.shopItems[t].id)){var a=Object(l.a)(s.state.shopItems);a[t].quantity-=1;var i=Object.assign({},s.state.shopItems[t]);i.quantity=1,e.push(i),s.setState({shopItems:a,cartItems:e})}else alert("Already In Cart")}else alert("Out Of Stock")},s.removeFromCart=function(t){var e=Object(l.a)(s.state.cartItems),a=Object(l.a)(s.state.shopItems),i=[e[t].id,e[t].quantity],c=i[0],n=i[1];a.forEach((function(t,e){t.id===c&&(a[e].quantity+=n)})),e.splice(t,1),s.setState({shopItems:a,cartItems:e})},s.plusOne=function(t){var e=Object(l.a)(s.state.shopItems),a=Object(l.a)(s.state.cartItems),i=[a[t].id,0],c=i[0],n=i[1];e.forEach((function(t,e){t.id===c&&(n=e)})),e[n].quantity>0?(e[n].quantity-=1,a[t].quantity+=1,s.setState({shopItems:e,cartItems:a})):alert("Out Of Stock")},s.minusOne=function(t){var e=Object(l.a)(s.state.shopItems),a=Object(l.a)(s.state.cartItems),i=[a[t].id,0,a[t].quantity],c=i[0],n=i[1],r=i[2];e.forEach((function(t,e){t.id===c&&(n=e)})),r>1?(e[n].quantity+=1,a[t].quantity-=1,s.setState({shopItems:e,cartItems:a})):s.removeFromCart(t)},s.toggleCart=function(){s.setState({toggled:!s.state.toggled})},s.toggleDetailed=function(t){null===t?s.setState({detailed:!s.state.detailed}):s.setState({detailedItem:t,detailed:!s.state.detailed})},s.search=function(t){s.setState({input:t.target.value});var e=Object(l.a)(s.state.shopItems).filter((function(t){if(t.title.toLowerCase().includes(s.state.input)||t.title.includes(s.state.input))return t}));s.setState({searchItems:e})},s.state={shopItems:[],searchItems:[],cartItems:[],detailedItem:0,input:"",toggledCart:!1,detailed:!1},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://fakestoreapi.herokuapp.com/products").then((function(e){var a,s=e.data,i=Object(r.a)(s);try{for(i.s();!(a=i.n()).done;){var c=a.value;c.image=c.image.replace("https://fakestoreapi.com/","https://fakestoreapi.herokuapp.com/");var n=Math.floor(99*Math.random());c.quantity=n,delete c.category}}catch(l){i.e(l)}finally{i.f()}t.setState({shopItems:s})}))}},{key:"render",value:function(){var t=this,e=null,a=null;this.state.cartItems.length>0&&(a=0,this.state.cartItems.forEach((function(t){a+=parseFloat(t.quantity)*parseFloat(t.price)})),a="Total: $"+a.toFixed(2)),!0===this.state.toggled&&(e=Object(p.jsxs)("div",{className:"Cart",children:[Object(p.jsx)("div",{className:"CartItems",children:this.state.cartItems.map((function(e,a){var s=parseFloat(e.quantity)*parseFloat(e.price);return s=s.toFixed(2),Object(p.jsx)(b,{title:e.title,image:e.image,price:"$"+e.price,quantity:e.quantity,subtotal:"$"+s,plusOne:function(){return t.plusOne(a)},minusOne:function(){return t.minusOne(a)},removeFromCart:function(){return t.removeFromCart(a)}},a)}))}),Object(p.jsx)("div",{className:"Checkout",children:a})]}));var s=null;if(!0===this.state.detailed){var i=this.state.shopItems[this.state.detailedItem];s=Object(p.jsx)(g,{image:i.image,title:i.title,description:i.description,price:"$"+i.price,quantity:i.quantity,addToCart:function(){return t.addToCart(t.state.detailedItem)},toggleDetailed:function(){return t.toggleDetailed(null)}})}else s=0===this.state.input.length?Object(p.jsx)("div",{className:"Shop",children:this.state.shopItems.map((function(e,a){return Object(p.jsx)(O,{image:e.image,title:e.title,price:"$"+e.price,addToCart:function(){return t.addToCart(a)},toggleDetailed:function(){return t.toggleDetailed(a)}},a)}))}):Object(p.jsx)("div",{className:"Shop",children:this.state.searchItems.map((function(e,a){return Object(p.jsx)(O,{image:e.image,title:e.title,price:"$"+e.price,addToCart:function(){return t.addToCart(a)},toggleDetailed:function(){return t.toggleDetailed(a)}},a)}))});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"Inputs",children:[Object(p.jsx)("input",{type:"text",className:"Search",value:this.state.input,onChange:this.search}),Object(p.jsxs)("button",{className:"ToggleCart button",onClick:this.toggleCart,children:[Object(p.jsx)(f.a,{icon:v.a}),this.state.cartItems.length>=1?this.state.cartItems.length:null]})]}),s,e]})}}]),a}(i.a.Component);n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2b5a47dc.chunk.js.map