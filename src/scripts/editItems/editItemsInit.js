import { editTasks, editColumns } from "./editItems";
import { tasks, columns } from "..";

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

export const firstPartOfInitEditPanel = () => {
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

const secondPartOfInitEditPanel = () => {
  const editTasksInputs = document.querySelectorAll(
    "textarea.editTaskPanel__textarea"
  );
  const editTasksButtons = document.querySelectorAll(
    ".editTaskPanel__button.editTask"
  );

  const editColumnInputs = document.querySelectorAll(
    "textarea.editColumnTitlePanel__input"
  );
  const editColumnButtons = document.querySelectorAll(
    ".column  .editColumnTitlePanel__button.ediTitle"
  );

  editTasks(editTasksInputs, editTasksButtons, tasks);
  editColumns(editColumnInputs, editColumnButtons, columns);
};

export const initEditItems = () => {
  firstPartOfInitEditPanel();
  secondPartOfInitEditPanel();
};
