import { tasks, columns } from "..";

const removeFunc = ({target}, removeItems, selector) => {
  let confirmQuestion = confirm("You want remove this item");
  confirmQuestion &&
    (removeItems = removeItems.filter(({ id }) => {
      target.closest(`${selector}`).remove();
      return id != target.dataset.id;
    }));
};

export const removeTask = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener(
      "click",
      (e) => removeFunc(e, items, '.task')
    );
  });
};

export const removeColumn = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener(
      "click",
      (e) => removeFunc(e, items, '.column')
    );
  });
};

export const removeItems = () => {
  const columnRemoveButtons = document.querySelectorAll(
    ".column__interactionPanel .removeButton"
  );
  const taskRemoveButtons = document.querySelectorAll(
    ".task__interactionPanel .removeButton"
  );

  removeTask(taskRemoveButtons, tasks);
  removeColumn(columnRemoveButtons, columns);
};
