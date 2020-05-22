import { tasks, columns } from "..";

const removeFunc = (dataset, removeNode, removeItems) => {
  let confirmQuestion = confirm("You want remove this item");
  confirmQuestion &&
    (removeItems = removeItems.filter(({ id }) => {
      removeNode.remove();
      return id != dataset.id;
    }));
};

export const removeTask = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset,
          parentNode: {
            parentNode: { parentNode },
          },
        },
      }) => removeFunc(dataset, parentNode, items)
    );
  });
};

export const removeColumn = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset,
          parentNode: {
            parentNode: {
              parentNode: { parentNode },
            },
          },
        },
      }) => removeFunc(dataset, parentNode, items)
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
