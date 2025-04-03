var items = []; // ! prebaciti u varijable u konstante const
var tasks = [];

function addItem() {
  let input = document.getElementById("itemInput"); // ! const itemInput i deklarisati u global scopeu
  let item = input.value; // * preimenovati u itemName ili slicno kako bi ime item sacuvali za objekat
  // ! napraviti objekat za item

  /*
  ! koristiti !== umjesto !=
  * trimovati itemName i provjeriti onda da li je prazan string
  * ako je item " " korisnik ce moc dodati u array
  */
  if (item != "") items.push({ name: item, bought: false }); // * u array se pusha novi objekat

  input.value = "";
  renderItems();
}

function renderItems() {
  document.getElementById("shoppingList").innerHTML = ""; // * napraviti konstantu za shoppingList element
  /*
  * koristiti let u for loopu ili koristiti forEach
  ! koristiti operator < umjesto <= 
  */
  for (var i = 0; i <= items.length; i++) {
    let itemElement = document.createElement("div"); // ! const
    itemElement.className = "item";

    /* 
    ! koristiti === umjesto ==
    * nije potrebno provjeravati da li je jednak vrijednosti true
    */
    if (items[i].bought == true) {
      itemElement.classList.add("bought");
    }

    // * koristi backtickse za formatiranje teksta
    itemElement.innerHTML =
      "<span>" +
      items[i].name +
      "</span><button onclick='toggleBought(" +
      i +
      ")'>Toggle Bought</button><button onclick='deleteItem(" +
      i +
      ")'>Delete</button>";

    // * koristiti varijablu od elementa za shoppingList - linija 20
    document.getElementById("shoppingList").appendChild(itemElement);
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
  let input = document.getElementById("taskInput"); // ! const taskInput i deklarisati u global scopeu
  let task = input.value; // * preimenovati u taskText ili slicno kako bismo ime task sacuvali za objekat
  // ! napraviti objekat za task

  /*
  ! koristiti !== umjesto !=
  * trimovati taskText i provjeriti onda da li je prazan string
  */
  if (task != "") tasks.push({ name: task, completed: false }); // * u array pushamo novi objekat

  input.value = "";
  renderTasks();
}

function renderTasks() {
  document.getElementById("taskList").innerHTML = ""; // * napraviti konstantu za taskList element
  /*
  * koristiti let u for loopu ili koristi forEach
  ! koristiti operator < umjesto <= 
  */
  for (var i = 0; i <= tasks.length; i++) {
    let taskElement = document.createElement("div");
    taskElement.className = "task";

    /* 
    ! koristiti === umjesto ==
    * nije potrebno provjeravati da li je jednak vrijednosti true
    */
    if (tasks[i].completed == true) {
      taskElement.classList.add("completed");
    }

    // * formatirati string sa backticksima
    taskElement.innerHTML =
      "<span>" +
      tasks[i].name +
      "</span><button onclick='toggleCompleted(" +
      i +
      ")'>Complete</button><button onclick='deleteTask(" +
      i +
      ")'>Delete</button>";

    // * koristiti varijablu od taskList - 74
    document.getElementById("taskList").appendChild(taskElement);
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

window.onload = function () {
  renderItems();
  renderTasks();
};
