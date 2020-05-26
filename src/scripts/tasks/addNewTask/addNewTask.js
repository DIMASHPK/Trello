import { callBackFunction } from "./callback";
import { newTasks } from "../tasks";

export const addNewTask = (addingButtons, inputs, renderFunc) => {
  addingButtons.forEach((button, i) => {
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
        let newElem = {
          id: newTasks.tasks.length + 1,
          title: inputs[i].value,
          columnId: id,
        };

        newTasks.tasks = [...newTasks.tasks, newElem];
        renderFunc(newElem);
        inputs[i].value = "";
        callBackFunction(newTasks.tasks, id);
      }
    );
  });
};
