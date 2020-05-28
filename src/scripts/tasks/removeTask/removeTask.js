import { newTasks } from "../tasks";
import { tasksApi } from "../../api/api";

export const removeTask = (removeButton) => {
  removeButton.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
      let confirmQuestion = confirm("You want remove this item");
      if (confirmQuestion) {
        button.disabled = true;

        newTasks.tasks = newTasks.tasks.filter(({ id, fireBaseId }) => {
          target.closest(".task").remove();
          id == target.dataset.id &&
            fetch(tasksApi(fireBaseId), {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then(() => (button.disabled = false));
          return id != target.dataset.id;
        });
      }
    });
  });
};
