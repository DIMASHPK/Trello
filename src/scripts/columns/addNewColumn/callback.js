import { removeColumn } from "../removeColumn/removeColumn";
import { openAddingPanel } from "../../helpers/openAddingPanel";
import { newTasks } from "../../tasks/tasks";
import { addNewTask } from "../../tasks/addNewTask/addNewTask";
import { renderTasks } from "../../tasks/renderTask/renderTask";
import { editColumn } from "../editColumn/editColumn";
import { dragColumn } from "../dragColumn/dragColumn";

const closePanelAfterAdding = () => {
  const openNewColumnInputPanel = document.querySelector(".newColumn h2");
  const newColumnInputPanel = document.querySelector(
    ".newColumn__inputPanelWrap"
  );

  openNewColumnInputPanel.classList.remove("hiddenTitle");
  newColumnInputPanel.classList.remove("openInputPanel");
};

const removeNewColumn = (columns) => {
  const lastColumnRemovButton = document.querySelectorAll(
    `.column__interactionPanel button[data-id="${columns.length}"]`
  );

  removeColumn(lastColumnRemovButton, columns);
};

const openAddingPanelInNewColumn = (columns) => {
  const openNewTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .column__addTask`
  );
  const newTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .addTaskPanel__wrapper`
  );
  const newTaskInputPanelInput = document.querySelectorAll(
    `div.column[id="${columns.length}"] .addTaskPanel__wrapper textarea`
  );
  const closeNewTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .addTaskPanel__wrapper .cancel`
  );

  openAddingPanel(
    openNewTaskInputPanel,
    newTaskInputPanel,
    closeNewTaskInputPanel,
    newTaskInputPanelInput
  );
};

const addNewTaskToNewColumn = (columns) => {
  const addTaskButton = document.querySelectorAll(
    `div.column[id="${columns.length}"] .addTaskPanel__wrapper .addTask`
  );
  const addTaskInput = document.querySelectorAll(
    `div.column[id="${columns.length}"] .addTaskPanel__wrapper .addTask__input`
  );

  addNewTask(addTaskButton, addTaskInput, renderTasks);
};

const openEditPanel = (columns) => {
  const openEditColumnTitlePanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .column__interactionPanel .editButton`
  );
  const titleEditPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .column__editColumnTitlePanel .column__titleWrap`
  );
  const editColumnTitleInputPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .editColumnTitlePanelWrapper`
  );
  const editColumnTitleInputPanelInput = document.querySelectorAll(
    `div.column[id="${columns.length}"] .column__editColumnTitlePanel textarea`
  );
  const closeEditColumnTitleInputPanel = document.querySelectorAll(
    `div.column[id="${columns.length}"] .editColumnTitlePanelWrapper .cancel`
  );

  openAddingPanel(
    openEditColumnTitlePanel,
    editColumnTitleInputPanel,
    closeEditColumnTitleInputPanel,
    editColumnTitleInputPanelInput,
    titleEditPanel,
    true
  );
};

const editColumnTitle = (columns) => {
  const editColumnInput = document.querySelectorAll(
    `div.column[id="${columns.length}"] textarea.editColumnTitlePanel__input`
  );
  const editColumnButton = document.querySelectorAll(
    `div.column[id="${columns.length}"]  .editColumnTitlePanel__button.ediTitle`
  );

  editColumn(editColumnInput, editColumnButton, columns);
};

const dragNewColumn = (columns) => {
  const column = document.querySelectorAll(
    `div.column[id="${columns.length}"]`
  );

  dragColumn(column);
};

export const callBackFunction = (columns) => {
  closePanelAfterAdding();
  removeNewColumn(columns);
  openAddingPanelInNewColumn(columns);
  addNewTaskToNewColumn(columns);
  openEditPanel(columns);
  editColumnTitle(columns);
  dragNewColumn(columns);
};
