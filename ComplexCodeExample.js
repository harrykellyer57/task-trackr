/* 
   Filename: ComplexCodeExample.js
   Description: This code demonstrates a complex JavaScript application that simulates a basic e-commerce website.
*/

// Product Class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Cart Class
class Cart {
  constructor() {
    this.products = [];
  }
  
  addProduct(product) {
    this.products.push(product);
  }
  
  removeProduct(productName) {
    const removedProducts = this.products.filter(product => product.name === productName);
    this.products = this.products.filter(product => product.name !== productName);
    
    return removedProducts;
  }
  
  calculateSubtotal() {
    let subtotal = 0;
    for (const product of this.products) {
      subtotal += product.calculateTotal();
    }
    return subtotal;
  }
  
  calculateTax(rate) {
    return this.calculateSubtotal() * rate;
  }
  
  calculateTotal() {
    return this.calculateSubtotal() + this.calculateTax(0.15);
  }
}

// Customer Class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  sendConfirmationEmail(order) {
    console.log(`Email sent to ${this.email} with order details: ${JSON.stringify(order)}`);
  }
}

// Order Class
class Order {
  constructor(customer, cart) {
    this.customer = customer;
    this.cart = cart;
  }
  
  placeOrder() {
    console.log("Order placed successfully.");
    this.customer.sendConfirmationEmail(this);
  }
}

// Test code
const product1 = new Product("Shirt", 29.99, 2);
const product2 = new Product("Shoes", 59.99, 1);
const product3 = new Product("Hat", 14.99, 3);

const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log(`Subtotal: $${cart.calculateSubtotal().toFixed(2)}`);
console.log(`Tax: $${cart.calculateTax(0.15).toFixed(2)}`);
console.log(`Total: $${cart.calculateTotal().toFixed(2)}`);

const customer = new Customer("John Doe", "john.doe@example.com");
const order = new Order(customer, cart);
order.placeOrder();
