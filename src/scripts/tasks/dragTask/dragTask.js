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
    });
  });
};
