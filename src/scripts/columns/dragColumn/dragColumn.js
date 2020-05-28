import { dragedTask, refreshTasks } from "../../tasks/dragTask/dragTask";
import { newColumns } from "../columns";
let dragedColumn = null;
let dropedColumn = null;

export const dragColumn = (columns) => {
  [...columns].forEach((column) => {
    const tasks = document.querySelectorAll(".task");

    column.addEventListener("dragstart", function (e) {
      dragedColumn = this;
      this.classList.add("dragstart");

      tasks.forEach((task) => task.removeAttribute("draggable"));
    });

    column.addEventListener("dragend", function () {
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
        refreshTasks();
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

        refreshColumns();
      }

      columns.forEach((column) => column.classList.remove("dragover"));
    });
  });
};

function refreshColumns() {
  const oldColumns = newColumns.columns;

  newColumns.columns = [
    ...document.querySelectorAll(".column[draggable='true']"),
  ].map((column) => ({
    id: column.id,
    title: column.querySelector(".column__title").innerHTML,
    fireBaseId: column.dataset.firebaseid,
  }));

  newColumns.columns = newColumns.columns.map((column, i) => {
    const { fireBaseId, ...other } = column;

    fetch(
      `https://trello-82cb9.firebaseio.com/columns/${oldColumns[i].fireBaseId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...other }),
      }
    );
    return { ...column, fireBaseId: oldColumns[i].fireBaseId };
  });
}
