import { tasks, columns } from "..";
import { renderTasks } from "../renderItems/renderTasks";
import { renderColumns } from "../renderItems/renderColumns";
import { addNewColumn } from "./addingColumns/addingColumns";
import { addNewTask } from "./addingTasks/addingTasks";

export const addItems = (
  addingButtons,
  inputs,
  arrayOfItems,
  renderFunc,
  callBackFunction = () => {}
) => {
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
        let obj = id
          ? {
              id: arrayOfItems.length + 1,
              title: inputs[i].value,
              columnId: id,
            }
          : { id: arrayOfItems.length + 1, title: inputs[i].value };
        arrayOfItems = [...arrayOfItems, obj];
        renderFunc(obj);
        inputs[i].value = "";
        callBackFunction(arrayOfItems, id);
      }
    );
  });
};

export const addItemsInit = () => {
  const addColumnButton = document.querySelectorAll(
    ".newColumn__inputPanelWrap .addColumn"
  );
  const newColumnInput = document.querySelectorAll(
    ".newColumn__inputPanelWrap .newColumn__input"
  );

  const addTaskButton = document.querySelectorAll(".addTask");
  const addTaskInput = document.querySelectorAll(".addTask__input");

  addNewColumn(addColumnButton, newColumnInput, columns, renderColumns);
  addNewTask(addTaskButton, addTaskInput, tasks, renderTasks);
};
