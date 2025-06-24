function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
