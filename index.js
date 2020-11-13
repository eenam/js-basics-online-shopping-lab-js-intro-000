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
  }
  let startSentence = "In your cart, you have"
  for (let i = 0; i < cart.length; i++) {
    let itemName = i
    let itemPrice = cart[i]
    return `In your cart, you have ${itemName} at ${itemPrice}, ${itemName} at ${itemPrice}, and ${itemName} at ${itemPrice}.`
    }
  if (cart.length === 1) {
    return `In your cart, you have ${itemName} at ${itemPrice}.`
} else if (cart.length === 2) {
    return `In your cart, you have ${itemName} at ${itemPrice}, and ${itemName} at ${itemPrice}.`
} else {

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
