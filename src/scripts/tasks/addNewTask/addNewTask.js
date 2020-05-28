import { callBackFunction } from "./callback";
import { newTasks } from "../tasks";
import { tasksMainApiUrl } from "../../api/api";

export const addNewTask = (renderFunc, addTaskButtons, addTaskInput) => {
  const inputs = addTaskInput || document.querySelectorAll(".addTask__input");
  const buttons = addTaskButtons || document.querySelectorAll(".addTask");

  [...buttons].forEach((button, i) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset: { id },
        },
      }) => {
        if (inputs[i].value.length < 1) {
          alert("Поле для ввода не должно быть пустым");
          return;
        }

        const newTaskId = new Date().getTime();

        button.disabled = true;
        const newElem = {
          id: `${newTaskId}`,
          title: inputs[i].value,
          columnId: id,
        };

        fetch(tasksMainApiUrl, {
          method: "POST",
          body: JSON.stringify(newElem),
        })
          .then((res) => res.json())
          .then((res) => {
            newTasks.tasks = [
              ...newTasks.tasks,
              { ...newElem, fireBaseId: res.name },
            ];

            button.closest('[draggable="false"]') &&
              button
                .closest('[draggable="false"]')
                .setAttribute("draggable", "true");
            renderFunc({ ...newElem, fireBaseId: res.name });
            inputs[i].value = "";
            callBackFunction(newTaskId, id);
            button.disabled = false;
          });
      }
    );
  });
};
