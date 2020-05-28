import { newTasks } from "../tasks";

export let dragedTask = null;

export const dragTask = (tasks) => {
  [...tasks].forEach((task) => {
    task.addEventListener("dragstart", function (e) {
      dragedTask = this;
      this.classList.add("dragstart");
      e.stopPropagation();
    });
    task.addEventListener("dragend", function (e) {
      this.classList.remove("dragstart");
      dragedTask = null;
      document
        .querySelectorAll(".column")
        .forEach((column) => column.classList.remove("dragover"));
      e.stopPropagation();
    });
    task.addEventListener("dragenter", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (this === dragedTask || !dragedTask) return;
      this.classList.add("dragover");
    });
    task.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (this === dragedTask || !dragedTask) return;
    });
    task.addEventListener("dragleave", function (e) {
      e.stopPropagation();
      if (this === dragedTask || !dragedTask) return;
      this.classList.remove("dragover");
    });
    task.addEventListener("drop", function (e) {
      e.stopPropagation();

      if (this === dragedTask || !dragedTask) return;
      this.classList.remove("dragover");

      if (this.parentElement === dragedTask.parentElement) {
        const taskList = [...this.parentElement.querySelectorAll(".task")];
        const indexA = taskList.indexOf(this);
        const indexB = taskList.indexOf(dragedTask);

        indexA < indexB
          ? this.parentElement.insertBefore(dragedTask, this)
          : this.parentElement.insertBefore(
              dragedTask,
              this.nextElementSibling
            );
      } else {
        this.parentElement.insertBefore(dragedTask, this);
      }

      refreshTasks();
    });
  });
};

export function refreshTasks() {
  const oldTasks = newTasks.tasks.sort((a, b) => +a.columnId - +b.columnId);

  newTasks.tasks = [...document.querySelectorAll(".column__task")].map(
    (task) => ({
      id: task.id,
      title: task.querySelector(".task__title").innerHTML,
      columnId: task.closest(".column").id,
      fireBaseId: task.dataset.firebaseid,
    })
  );

  newTasks.tasks = newTasks.tasks.map((task, i) => {
    const { fireBaseId, ...other } = task;

    fetch(
      `https://trello-82cb9.firebaseio.com/tasks/${oldTasks[i].fireBaseId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...other }),
      }
    );
    return { ...task, fireBaseId: oldTasks[i].fireBaseId };
  });
}
