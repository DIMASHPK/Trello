import { newColumns } from "../columns";
import { columnsApi, tasksApi } from "../../api/api";

export const removeColumn = (removeButton) => {
  removeButton.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
      let confirmQuestion = confirm("You want remove this item");
      if (confirmQuestion) {
        button.disabled = true;

        newColumns.columns = newColumns.columns.filter(({ id, fireBaseId }) => {
          id == target.dataset.id &&
            fetch(columnsApi(fireBaseId), {
              method: "DELETE",
            }).then((res) =>
              res.json().then(() => {
                target.closest(".column").remove();
                button.disabled = false;
              })
            );

          target
            .closest(".column")
            .querySelectorAll(".task")
            .forEach((task) =>
              fetch(tasksApi(task.dataset.firebaseid), {
                method: "DELETE",
              }).then((res) => res.json())
            );

          return id != target.dataset.id;
        });
      }
    });
  });
};
