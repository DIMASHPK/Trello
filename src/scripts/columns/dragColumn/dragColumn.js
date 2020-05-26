import { dragedTask } from "../../tasks/dragTask/dragTask";
let dragedColumn = null;
let dropedColumn = null;

export const dragColumn = (columns) => {
  [...columns].forEach((column) => {
    const tasks = document.querySelectorAll(".task");

    column.addEventListener("dragstart", function (e) {
      dragedColumn = this;
      this.classList.add("dragstart");
      console.log(dragedColumn);
      tasks.forEach((task) => task.removeAttribute("draggable"));
    });

    column.addEventListener("dragend", function () {
      console.log(dragedColumn);
      dragedColumn.classList.remove("dragstart");
      dragedColumn = null;
      document
        .querySelectorAll(".column")
        .forEach((column) => column.classList.remove("dragover"));
      tasks.forEach((task) => task.setAttribute("draggable", "true"));
    });

    column.addEventListener("dragover", function (e) {
      e.preventDefault();
      if (
        dragedColumn === this ||
        (!dragedColumn &&
          this.querySelector(".column__taskWrapper").children.length > 0)
      ) {
        dropedColumn && dropedColumn.classList.remove("dragover");
        dropedColumn = null;
        return;
      }
      dropedColumn = this;

      document
        .querySelectorAll(".column")
        .forEach((column) => column.classList.remove("dragover"));
      this.classList.add("dragover");
    });

    column.addEventListener("drop", function () {
      if (dragedColumn === this) return;

      if (dragedTask) {
        column.querySelector(".column__taskWrapper").append(dragedTask);
      } else if (dragedColumn) {
        const columns = [
          ...document.querySelectorAll(".column[draggable='true']"),
        ];
        const indexA = columns.indexOf(this);
        const indexB = columns.indexOf(dragedColumn);

        if (indexA > indexB) {
          document
            .querySelector(".mainWrapper")
            .insertBefore(dragedColumn, this.nextElementSibling);
        } else {
          document
            .querySelector(".mainWrapper")
            .insertBefore(dragedColumn, this);
        }
      }

      columns.forEach((column) => column.classList.remove("dragover"));
    });
  });
};
