// Default inventory items
const basicItems = [
    { name: "Guitar", type: "Instrument", price: 500, quantity: 7, description: "A durable acoustic guitar with rich sound and smooth playability." },
    { name: "Laptop", type: "Electronics", price: 1200, quantity: 5, description: "Lightweight laptop with fast performance and long battery life." },
    { name: "Office Chair", type: "Furniture", price: 250, quantity: 10, description: "Ergonomic chair designed for comfort and support." },
    { name: "Coffee Maker", type: "Appliance", price: 80, quantity: 12, description: "Brews rich, flavorful coffee with one-touch operation." },
    { name: "Running Shoes", type: "Footwear", price: 110, quantity: 15, description: "Comfortable shoes built for speed and durability." },
    { name: "Backpack", type: "Accessories", price: 60, quantity: 20, description: "Spacious, weather-resistant backpack for everyday use." },
    { name: "Smartphone", type: "Electronics", price: 999, quantity: 8, description: "High-resolution display with powerful camera and fast processor." },
    { name: "Desk Lamp", type: "Home Decor", price: 45, quantity: 18, description: "Adjustable LED lamp with warm and cool light modes." },
    { name: "Water Bottle", type: "Accessories", price: 25, quantity: 25, description: "Stainless steel bottle that keeps drinks hot or cold for hours." },
    { name: "Bluetooth Speaker", type: "Electronics", price: 90, quantity: 9, description: "Compact speaker with deep bass and long battery life." },
    { name: "Harmonica", type: "Instrument", price: 35, quantity: 14, description: "Portable harmonica with rich tones, perfect for beginners and professionals." },
    { name: "Magic Wand", type: "Magical Item", price: 120, quantity: 6, description: "A finely crafted wand for casting spells with precision." }
];

// Load inventory from sessionStorage or default list
let items = JSON.parse(sessionStorage.getItem("items")) || basicItems;

// Save current inventory to sessionStorage
function saveItems() {
    sessionStorage.setItem("items", JSON.stringify(items));
}

// Display all items on page load if on index.html
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('items-display');
    if (container) {
        listItems();
    }
});

// Display all items
function listItems() {
    const container = document.getElementById('items-display');
    container.innerHTML = ""; // Clear previous items
    items.forEach(item => displayCard(item));
}

// Search items by name or type
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

// Find a single item by name
function getItem(itemName) {
    return items.find(item => item.name.toLowerCase() === itemName.toLowerCase());
}

// Create HTML card for an item
function displayCard(item) {
    const container = document.getElementById('items-display');
    let card = `
        <div class="card" style="min-width: 250px;">
            <div class="card-body">
                <h5 class="card-title item-name">${item.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted item-type">Type: ${item.type}</h6>
                <p class="card-text item-price"><strong>Price:</strong> $${item.price}</p>
                <p class="card-text item-quantity"><strong>Amount Owned:</strong> ${item.quantity}</p>
                <p class="card-text item-description">${item.description}</p>
                <button type="button" class="btn btn-danger btn-sm mt-2" onclick="removeItem('${item.name}')">Remove</button>
            </div>
        </div>
    `;
    container.innerHTML += card;
}

// Add a new item
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

// Remove an item by name
function removeItem(itemName) {
    const item = getItem(itemName);
    if (!item) {
        alert(`Item "${itemName}" not found.`);
        return;
    }

    items = items.filter(i => i !== item);
    saveItems();
    listItems();
    alert(`Item "${itemName}" removed successfully.`);
}

// Display total inventory value
function displayTotalValue(totalValue) {
    document.getElementById("placeholder-display").innerHTML = `
        <div id="total-display">
            <h1>Total Inventory Cost: $${totalValue}</h1>
        </div>
    `;
}

// Calculate total inventory value
function calculateTotalValue() {
    let total = 0;
    items.forEach(item => total += item.price * item.quantity);
    total = Math.round(total * 100) / 100; // Round to 2 decimals
    console.log("Total Cost Of All Items In Inventory: $" + total);
    displayTotalValue(total);
}

// Display discount form
function displayDiscount(){
    document.getElementById("placeholder-display").innerHTML = `
        <div id="discount-display">
            <h1>Apply A Discount</h1>
            <form id="discountForm" onsubmit="handleDiscountSubmit(event)">
                <input type="number" class="form-control" id="discountInput" placeholder="Enter discount %" min="0" max="100" required>
                <button type="submit" class="btn btn-dark">Apply Discount</button>
            </form>
        </div>
    `;
}

// Handle discount submission
function handleDiscountSubmit(event) {
    event.preventDefault();
    const discountValue = parseFloat(document.getElementById('discountInput').value);
    if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
        alert("Please enter a valid percentage between 0 and 100.");
        return;
    }
    applyDiscount(discountValue);
}

// Apply discount to all items
function applyDiscount(discountPercentage){
    console.log("Applying: "+discountPercentage+"% Discount.");
    alert("Applied: "+discountPercentage+"% Discount.");
    document.getElementById("placeholder-display").innerHTML = ``;

    items.forEach(item => {
        item.price = Math.round(item.price * (1 - discountPercentage / 100) * 100) / 100;
        console.log(item);
    });

    saveItems();
    listItems();
}

// Reset items to default
function resetItems() {
    sessionStorage.setItem("items", JSON.stringify(basicItems));
    items = JSON.parse(sessionStorage.getItem("items"));
    listItems();
    alert("All Items Reset To Default. Any Custom Items or Discounts Have Been Removed.");
}

//Function to reset the page (reload)
function resetPage(){
    listItems();
}