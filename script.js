// * prebacen u const
const items = [];
const tasks = [];

// * premjesteno u global scope kao const
const itemInput = document.getElementById("itemInput");
const taskInput = document.getElementById("taskInput");

const shoppingList = document.getElementById("shoppingList"); // * napraviti konstantu za shoppingList element
const taskList = document.getElementById("taskList");

function addItem() {
  let name = itemInput.value.trim();
  // * objekat za item
  const item = { name, bought: false };

  // * name trimovan i provjeren
  name ? items.push(item) : alert("Upisite item name"); // * u array se pusha novi objekat

  itemInput.value = "";
  renderItems();
}

function renderItems() {
  shoppingList.innerHTML = ""; // koristi se varijabla za listu
  for (let i = 0; i < items.length; i++) {
    const itemElement = document.createElement("div"); // prepravljeno u const
    itemElement.className = "item";

    // * ne provjerava se da li je vrijednost booleana jednaka true, posto if statement se izvrsava ako je vrijednost true
    if (items[i]?.bought) itemElement.classList.add("bought");

    // * formatirano
    itemElement.innerHTML = `<span>${items[i]?.name} - 
      ${tasks[i]?.bought ? "bought" : "pending"}</span>
      <button onclick='toggleBought(${i})'>Toggle Bought</button>
      <button onclick='deleteItem(${i})'>Delete</button>`;

    // * koristi se varijabla za shoppingList
    shoppingList.appendChild(itemElement);
  }
}

function toggleBought(index) {
  items[index].bought = !items[index].bought;
  renderItems();
}

function deleteItem(index) {
  items.splice(index);
  renderItems();
}

function addTask() {
  let text = taskInput.value.trim(); // * preimenovano u texti trimovano
  const task = { text, completed: false };

  // * provjeravamo samo da li postoji text nakon trimovanja
  text ? tasks.push(task) : alert("Upisite text"); // * u array pushamo novi objekat

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    // * koristiti let za for loop
    let taskElement = document.createElement("div");
    taskElement.className = "task";

    // * if statement se izvrsava ako je ono u zagradama true, ako je task completed biti ce true
    if (tasks[i]?.completed) taskElement.classList.add("completed");

    // * formatirano
    taskElement.innerHTML = `<span>${tasks[i]?.text} - 
      ${tasks[i]?.completed ? "done" : "pending"}</span>
      <button onclick='toggleCompleted(${i})'>Complete</button>
      <button onclick='deleteTask(${i})'>Delete</button>`;

    taskList.appendChild(taskElement);
  }
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index);
  renderTasks();
}

// * window.onload zamjenjen sa DOMContentLoaded event listenerom
document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  renderTasks();
});
