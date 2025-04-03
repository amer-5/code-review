const items = [];
const tasks = [];

const itemInput = document.getElementById("itemInput");
const taskInput = document.getElementById("taskInput");

const shoppingList = document.getElementById("shoppingList");
const taskList = document.getElementById("taskList");

function addItem() {
  const name = itemInput.value.trim();
  if (!name) return alert("Upisite item name");

  const item = { name, bought: false };
  items.push(item);

  itemInput.value = "";
  renderItems();
}

function renderItems() {
  shoppingList.innerHTML = "";

  items.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";

    if (item?.bought) itemElement.classList.add("bought");

    itemElement.innerHTML = `<span>${item?.name} - 
      ${item?.bought ? "bought" : "pending"}</span>
      <button onclick='toggleBought(${index})'>Toggle Bought</button>
      <button onclick='deleteItem(${index})'>Delete</button>`;

    shoppingList.appendChild(itemElement);
  });
}

function toggleBought(index) {
  items[index].bought = !items[index].bought;
  renderItems();
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Upisi text");

  const task = { text, completed: false };
  tasks.push(task);

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    if (task?.completed) taskElement.classList.add("completed");

    taskElement.innerHTML = `<span>${task?.text} - 
      ${task?.completed ? "done" : "pending"}</span>
      <button onclick='toggleCompleted(${index})'>Complete</button>
      <button onclick='deleteTask(${index})'>Delete</button>`;

    taskList.appendChild(taskElement);
  });
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  renderTasks();
});
