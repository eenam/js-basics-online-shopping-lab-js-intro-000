var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemObj = {itemName: itemName, itemPrice: Math.floor(Math.random() * 100) + 1}
  cart.push(itemObj);
  return (`${itemName} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let startSentence = "In your cart, you have"
    for (let i = 0; i < cart.length; i++) {
    let itemName = i + 1
    let itemPrice = cart[i]
    startSentence += `${i} at ${itemPrice}, ${i} at ${itemPrice}, and ${i} at ${itemPrice}.`
  }


    }
  if (cart.length === 1) {
    return startSentence += `${i} at ${itemPrice}.`
  } else if (cart.length === 2) {
    return startSentence += `${i} at ${itemPrice}, and ${i} at ${itemPrice}. `
}
}





function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
