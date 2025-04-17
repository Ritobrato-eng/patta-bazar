// script.js

// Sample Products
const products = [
    {
      id: 1,
      name: "Radha-Krishna Scroll",
      price: 1500,
      img: "https://i.pinimg.com/originals/02/6f/50/026f504ba17e8442ea74241d13d68c8d.jpg",
    },
    {
      id: 2,
      name: "Village Life Painting",
      price: 1200,
      img: "https://d2vbj8g7upsspg.cloudfront.net/filters:format(webp)/30-stades/media/post_attachments/Wwvy1xg2iBmzNxzUDOOv.jpg",
    },
    {
      id: 3,
      name: "Tree of Life",
      price: 1800,
      img: "https://itokri.com/cdn/shop/files/aayaasssspalcementpatchitracopy_3219d1a2-66b3-467d-aa54-e2eaf2f245cb.jpg?v=1711278698.jpg",
    },
  ];
  
  // Render products
  const productList = document.getElementById("product-list");
  
  if (productList) {
    products.forEach((item) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  // Add to cart function
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existing = cart.find(p => p.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }
  // Load Cart Page
const cartContainer = document.getElementById("cart-items");

if (cartContainer) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 😢</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      div.innerHTML = `
        <div>
          <h3>${item.name}</h3>
          <p>Quantity: ${item.qty}</p>
          <p>Price: ₹${item.price} × ${item.qty} = ₹${itemTotal}</p>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      `;

      cartContainer.appendChild(div);
    });
  }

  document.getElementById("total-amount").textContent = total;
}

// Remove Item from Cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Checkout
function checkout() {
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
}

  
