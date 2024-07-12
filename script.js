document.getElementById("task-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("task");
  const assigneeInput = document.getElementById("assignee");
  const task = taskInput.value;
  const assignee = assigneeInput.value;

  addTask(task, assignee);

  taskInput.value = "";
  assigneeInput.value = "";
});

function addTask(task, assignee) {
  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.innerHTML = `
        ${task} - <strong>${assignee}</strong>
        <button class="remove-task">Remove</button>
    `;

  taskList.appendChild(li);

  li.querySelector(".remove-task").addEventListener("click", function () {
    taskList.removeChild(li);
  });
}
