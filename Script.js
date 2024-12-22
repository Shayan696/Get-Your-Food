// Sample menu data
const menuItems = [
    {
        id: 1,
        name: 'Burger',
        price: 9.99,
        image: 'burger.webp',
        description: 'Juicy beef burger with fresh vegetables'
    },
    {
        id: 2,
        name: 'Pizza',
        price: 12.99,
        image: 'pizza.webp',
        description: 'Classic Margherita pizza with fresh basil'
    },
    {
        id: 3,
        name: 'Pasta',
        price: 8.99,
        image: 'pasta.webp',
        description: 'Spaghetti with homemade tomato sauce'
    }
];

let cart = [];

// Populate menu items
function displayMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = menuItems.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price}</p>
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    cart.push(item);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle cart
let cartVisible = false;
function toggleCart() {
    const cart = document.querySelector('.cart');
    cartVisible = !cartVisible;
    cart.style.right = cartVisible ? '0' : '-300px';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your order!');
    cart = [];
    updateCart();
}

// Initialize the page
displayMenuItems();