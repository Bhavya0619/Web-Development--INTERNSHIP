let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    let input = document.getElementById("taskInput");
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    if (!list) return;
    list.innerHTML = "";
    tasks.forEach((task, i) => {
        let li = document.createElement("li");
        li.innerText = task;
        li.onclick = () => {
            tasks.splice(i, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        };
        list.appendChild(li);
    });
}
showTasks();

let products = [
    { name: "Portfolio Website", category: "web", price: 500, rating: 4.5 },
    { name: "Mobile App", category: "app", price: 800, rating: 4.8 },
    { name: "Landing Page", category: "web", price: 300, rating: 4.2 }
];

function displayProducts(items) {
    let div = document.getElementById("products");
    if (!div) return;
    div.innerHTML = "";
    items.forEach(p => {
        div.innerHTML += `
            <div class="card">
                <h4>${p.name}</h4>
                <p>₹${p.price}</p>
                <p>⭐ ${p.rating}</p>
            </div>`;
    });
}

function filterProducts() {
    let val = document.getElementById("categoryFilter").value;
    let filtered = val === "all" ? products : products.filter(p => p.category === val);
    displayProducts(filtered);
}

function sortProducts(type) {
    let sorted = [...products];
    if (type === "price") sorted.sort((a,b) => a.price - b.price);
    else sorted.sort((a,b) => b.rating - a.rating);
    displayProducts(sorted);
}

displayProducts(products);
