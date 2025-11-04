const products = [
  { name: "Sneakers", price: "₹2999", img: "images/product1.jpg" },
  { name: "Headphones", price: "₹1999", img: "images/product2.jpg" },
  { name: "Smart Watch", price: "₹3499", img: "images/product3.jpg" },
];

const container = document.getElementById("products");

products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product");
  card.innerHTML = `
    <img src="${p.img}" width="100%">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(card);
});
// Smooth scroll when clicking "Shop Now"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});