let tasks = [];
let id = 1;

const addButton = document.querySelector("#add_button");
const deleteButton = document.getElementById("remove_task");
const ul = document.getElementById("ul_list_task");

function renderTask(task) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "input_checkbox" + task.id);

  const label = document.createElement("label");
  label.setAttribute("for", "input_checkbox" + task.id);

  const span = document.createElement("span");
  span.innerHTML = task.title;
  label.appendChild(span);

  li.appendChild(input);
  li.appendChild(label);
  li.addEventListener("click", (event) => {
    handleCheckTask(event, task);
  });
  ul.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("write_input_task");
  const task = {
    id,
    title: input.value,
    status: false,
  };
  tasks.push(task);
  id += 1;
  input.value = "";
  renderTask(task);
}

function handleCheckTask(event, task) {
  const input = event.currentTarget.querySelector("input");
  const label = event.currentTarget.querySelector("label");
  console.log(label.getAttribute("for"));

  const isChecked = input.getAttribute("checked");

  if (isChecked) {
    input.removeAttribute("checked");
    label.classList.remove("is-completed");
    tasks = tasks.map((item) =>
      item.id === task.id ? { ...item, status: false } : item
    );
  } else {
    input.setAttribute("checked", true);
    label.classList.add("is-completed");
    tasks = tasks.map((item) =>
      item.id === task.id ? { ...item, status: true } : item
    );
  }
  console.log(isChecked);
}

function handleDelete(event) {
  event.preventDefault();
  const list = document.querySelectorAll("li");
  list.forEach((element) => {
    const isChecked = element.childNodes[0].getAttribute("checked");
    isChecked ? element.remove() : null;
  });
}

addButton.addEventListener("click", (event) => {
  handleSubmit(event);
});

deleteButton.addEventListener("click", (event) => {
  handleDelete(event);
});
