const resizeItems = (input) => {
  input.addEventListener("input", ({ target: { style, scrollHeight } }) => {
    style.height = scrollHeight + "px";
  });
  input.style.height = 1 + "px";
  input.style.height = input.scrollHeight + "px";
};

const editItems = (inputs, items) => {
  inputs.forEach((input, i) => {
    input.value = items[i].innerHTML;
    resizeItems(input);
  });
};

export const contentAndResizeOfEditItem = () => {
  const columnsTitle = document.querySelectorAll(".column h2");
  const columnsInputs = document.querySelectorAll(
    "textarea.editColumnTitlePanel__input"
  );
  const tasksContent = document.querySelectorAll(
    ".column .column__taskWrapper p"
  );
  const tasksInputs = document.querySelectorAll(
    ".editTaskPanel__wrapper textarea"
  );

  editItems(columnsInputs, columnsTitle);
  editItems(tasksInputs, tasksContent);
};
