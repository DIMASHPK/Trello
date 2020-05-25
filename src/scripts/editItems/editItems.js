export const editItems = (inputs, editButtons, arrayOfItems, callback) => {
  editButtons.forEach((button, i) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset: { id },
        },
      }) => {
        if(inputs[i].value.length < 1){
          alert('Поле не должно быть пустым')
          return
        }
        arrayOfItems = arrayOfItems.map((item) =>
          item.id == id ? { ...item, title: inputs[i].value } : item
        );
        callback(id, inputs[i]);
      }
    );
  });
};

export const editTasks = (inputs, editButtons, arrayOfItems) => {
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

export const editColumns = (inputs, editButtons, arrayOfItems) => {
  const callback = (id, input) => {
    const content = document.querySelector(`div.column[id="${id}"] h2`);
    const titleColumnWrapper = document.querySelector(
      `div.column[id="${id}"] .column__titleWrap`
    );
    const editPanel = document.querySelector(
      `div.column[id="${id}"] .column__editColumnTitlePanelWrapper `
    );

    content.innerHTML = input.value;
    titleColumnWrapper.classList.remove("hiddenTitle");
    editPanel.classList.remove("openInputPanel");
  };
  editItems(inputs, editButtons, arrayOfItems, callback);
};
