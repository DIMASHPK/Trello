let dragedTask = null;
let dragedColumn = null;
let dropedColumn = null;

export const dragColumns = (columns) => {
  [...columns].forEach((column) => {
    const tasks = document.querySelectorAll(".task")
    
    column.addEventListener("dragstart", function (e) {
      dragedColumn = this;
      this.classList.add("dragstart");
      tasks.forEach((task) => task.removeAttribute("draggable"));
    });

    column.addEventListener("dragend", function () {
      dragedColumn.classList.remove("dragstart");
      dragedColumn = null;
      columns.forEach((column) => column.classList.remove("dragover"));
      tasks.forEach((task) => task.setAttribute("draggable", "true"));
    });

    column.addEventListener("dragover", function (e) {
      e.preventDefault();
      if (
        dragedColumn === this ||
        (!dragedColumn &&
          this.querySelector(".column__taskWrapper").children.length > 1)
      ) {
        dropedColumn && dropedColumn.classList.remove("dragover");
        dropedColumn = null;
        return;
      }
      dropedColumn = this;

      columns.forEach((column) => column.classList.remove("dragover"));
      this.classList.add("dragover");
    });

    column.addEventListener("drop", function () {
      if (dragedColumn === this) return;

      if (dragedTask) {
        column.querySelector(".column__taskWrapper").append(dragedTask);
      } else if (dragedColumn) {
        const columns = [...document.querySelectorAll(".column[draggable='true']") ]; 
        const indexA = columns.indexOf(this);
        const indexB = columns.indexOf(dragedColumn);

        indexA > indexB
          ? document
              .querySelector(".mainWrapper")
              .insertBefore(dragedColumn, this.nextElementSibling)
          : document
              .querySelector(".mainWrapper")
              .insertBefore(dragedColumn, this);
      }
      columns.forEach((column) => column.classList.remove("dragover"));
    });
  });
};

export const dragTasks = (tasks) => {
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
