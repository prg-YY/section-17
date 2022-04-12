// //importting module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';
// console.log('importting module');

// // addToCart('bread', 5);
// // console.log(price, quantity);

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('apple', 5);

console.log(cart);

// console.log('start fetching');
// const res = await fetch('http://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async () => {
//   const res = await fetch('http://jsonplaceholder.typicode.com/posts');

//   const data = await res.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// lastPost.then(lastPost => {
//   console.log(lastPost);
// });

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart is ${shippingCost}`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     shippingCost,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('piiza', 5);
// shoppingCart2.addToCart('goshnan', 15);
// console.log(shoppingCart2);

//this will not work in browser , but will work in Node.js
//Export
// export.addToCart = function (product, quantity) {
// 	     cart.push({ product, quantity });
// 	     console.log(`${quantity} ${product} added to cart is ${shippingCost}`);
// 	   };

// 	   //Import
// 	   const {addToCart} = require('./shoppingCart/js')

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'pizza', quantity: 2 },
    { product: 'goshnan', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
