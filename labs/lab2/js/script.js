// Load items from sessionStorage if available, otherwise use default list
let items = JSON.parse(sessionStorage.getItem("items")) || [
    { name: "Guitar", type: "Instrument", price: 500, quantity: 7, description: "A durable acoustic guitar with rich sound and smooth playability." },
    { name: "Laptop", type: "Electronics", price: 1200, quantity: 5, description: "Lightweight laptop with fast performance and long battery life." },
    { name: "Office Chair", type: "Furniture", price: 250, quantity: 10, description: "Ergonomic chair designed for comfort and support." },
    { name: "Coffee Maker", type: "Appliance", price: 80, quantity: 12, description: "Brews rich, flavorful coffee with one-touch operation." },
    { name: "Running Shoes", type: "Footwear", price: 110, quantity: 15, description: "Comfortable shoes built for speed and durability." },
    { name: "Backpack", type: "Accessories", price: 60, quantity: 20, description: "Spacious, weather-resistant backpack for everyday use." },
    { name: "Smartphone", type: "Electronics", price: 999, quantity: 8, description: "High-resolution display with powerful camera and fast processor." },
    { name: "Desk Lamp", type: "Home Decor", price: 45, quantity: 18, description: "Adjustable LED lamp with warm and cool light modes." },
    { name: "Water Bottle", type: "Accessories", price: 25, quantity: 25, description: "Stainless steel bottle that keeps drinks hot or cold for hours." },
    { name: "Bluetooth Speaker", type: "Electronics", price: 90, quantity: 9, description: "Compact speaker with deep bass and long battery life." }
];

// Save items to sessionStorage
function saveItems() {
    sessionStorage.setItem("items", JSON.stringify(items));
}

// Displays all items on page load
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
    if (currentPage.includes("index.html")) {
        listItems();
    }
});

function listItems() {
    const container = document.getElementById('items-display');
    container.innerHTML = ""; // Clear existing cards
    items.forEach(item => displayCard(item));
}

function searchItems(event) {
    event.preventDefault();
    const input = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!input) {
        alert("Input cannot be blank!");
        listItems();
        return;
    }

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(input) ||
        item.type.toLowerCase().includes(input)
    );

    const container = document.getElementById('items-display');
    container.innerHTML = ""; // Clear display

    if (filteredItems.length === 0) {
        container.innerHTML = "<p>No items found.</p>";
    } else {
        filteredItems.forEach(item => displayCard(item));
    }
}

// getItem(itemName) should return an item object if found in the inventory. - idk when i need to use this.......

function getItem(itemName) {
    return items.find(item => item.name.toLowerCase() === itemName.toLowerCase());
}

function displayCard(item) {
    const container = document.getElementById('items-display');
    let card = `
        <div class="card mb-3">
            <div class="card-body">
                <img src="photos/img1.jpg" alt="${item.name} Image" class="img-fluid mb-2">
                <h5 class="item-name">${item.name}</h5>
                <p class="item-type">Type: ${item.type}</p>
                <p class="item-price">Price: $${item.price}</p>
                <p class="item-quantity">Amount Owned: ${item.quantity}</p>
                <p class="item-description">${item.description}</p>
                <button type="button" class="btn btn-danger" onclick="removeItem('${item.name}')">Remove</button>
            </div>
        </div>
    `;
    container.innerHTML += card;
}

function addItem() {
    const newItem = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        price: parseFloat(document.getElementById("price").value),
        quantity: parseInt(document.getElementById("quantity").value),
        description: document.getElementById("description").value
    };

    if (!newItem.name || !newItem.type || isNaN(newItem.price) || isNaN(newItem.quantity)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    items.push(newItem);
    saveItems();

    alert("Item added successfully.");

    document.getElementById("itemForm").reset();
}

function removeItem(itemName) {
    items = items.filter(item => item.name !== itemName);
    saveItems();

    alert("Item removed successfully.");

    listItems();
}

function calculateTotalValue() {
    // should calculate the total value of the entire inventory and display it on the page.
}

function applyDiscount(discountPercentage){
    // should apply a discount to all items in the inventory and update the displayed prices on the page.
}






