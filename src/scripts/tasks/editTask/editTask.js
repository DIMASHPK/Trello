import { editItems } from "../../helpers/editItems";

export const editTask = (inputs, editButtons, arrayOfItems) => {
  const callback = (id, input) => {
    const content = document.querySelector(`div.task[id="${id}"] p`);
    const taskWrapper = document.querySelector(
      `div.task[id="${id}"] .task__wrapper`
    );
    const editPanel = document.querySelector(
      `div.task[id="${id}"] .column__editTaskPanelWrapper`
    );
    content.innerHTML = input.value;
    taskWrapper.classList.remove("hiddenTitle");
    editPanel.classList.remove("openInputPanel");
  };
  editItems(inputs, editButtons, arrayOfItems, callback);
};
