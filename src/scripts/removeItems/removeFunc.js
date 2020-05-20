const removeFunc = (
  {
    target: {
      dataset,
      parentNode: { parentNode },
    },
  },
  removeItems
) => {
  let confirmQuestion = confirm("You want remove this item");
  confirmQuestion &&
    (removeItems = removeItems.filter(({ id }) => {
      parentNode.remove();
      return id != dataset.id;
    }));
};

export const removeItem = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => removeFunc(event, items));
  });
};
