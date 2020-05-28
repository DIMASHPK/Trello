import { newTasks } from "../tasks";

export const editItems = (inputs, editButtons) => {
  editButtons.forEach((button, i) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset: { id },
        },
      }) => {
        if (inputs[i].value.length < 1) {
          alert("Поле не должно быть пустым");
          return;
        }

        newTasks.tasks = newTasks.tasks.map((item) => {
          const { fireBaseId, ...other } = item;

          if (item.id == id) {
            fetch(
              `https://trello-82cb9.firebaseio.com/tasks/${fireBaseId}.json`,
              {
                method: "PATCH",
                body: JSON.stringify({ ...other, title: inputs[i].value }),
              }
            );
            return { ...item, title: inputs[i].value };
          }
          return item;
        });

        const content = document.querySelector(`div.task[id="${id}"] p`);
        const taskWrapper = document.querySelector(
          `div.task[id="${id}"] .task__wrapper`
        );
        const editPanel = document.querySelector(
          `div.task[id="${id}"] .column__editTaskPanelWrapper`
        );
        content.innerHTML = inputs[i].value;

        taskWrapper.closest('[draggable="false"]') &&
          taskWrapper
            .closest('[draggable="false"]')
            .setAttribute("draggable", "true");
        taskWrapper.classList.remove("hiddenTitle");
        editPanel.classList.remove("openInputPanel");
      }
    );
  });
};

export const editTask = () => {
  const editTasksInputs = document.querySelectorAll(
    "textarea.editTaskPanel__textarea"
  );
  const editTasksButtons = document.querySelectorAll(
    ".editTaskPanel__button.editTask"
  );

  editItems(editTasksInputs, editTasksButtons);
};
