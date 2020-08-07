const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

const LOCAL_STORAGE_LIST_KEY = "lists";
let lists = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Work",
  },
];

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newListName = newListInput.value;
  if (newListName == null || newListName == "") return;
  const list = createList(newListName);
  newListInput.value = null;
  lists.push(list);
  render();
});

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function render() {
  clearElement(listsContainer);
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
