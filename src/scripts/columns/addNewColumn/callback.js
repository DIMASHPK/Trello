import { removeColumn } from "../removeColumn/removeColumn";
import { openAddingPanel } from "../../helpers/openAddingPanel";
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

const removeNewColumn = (columnId) => {
  const lastColumnRemovButton = document.querySelectorAll(
    `.column__interactionPanel button[data-id="${columnId}"]`
  );

  removeColumn(lastColumnRemovButton);
};

const openAddingPanelInNewColumn = (columnId) => {
  const openNewTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .column__addTask`
  );
  const newTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper`
  );
  const newTaskInputPanelInput = document.querySelectorAll(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper textarea`
  );
  const closeNewTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper .cancel`
  );

  openAddingPanel(
    openNewTaskInputPanel,
    newTaskInputPanel,
    closeNewTaskInputPanel,
    newTaskInputPanelInput
  );
};

const addNewTaskToNewColumn = (columnId) => {
  const addTaskButton = document.querySelectorAll(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper .addTask`
  );
  const addTaskInput = document.querySelectorAll(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper .addTask__input`
  );

  addNewTask(renderTasks, addTaskButton, addTaskInput);
};

const openEditPanel = (columnId) => {
  const openEditColumnTitlePanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .column__interactionPanel .editButton`
  );
  const titleEditPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .column__editColumnTitlePanel .column__titleWrap`
  );
  const editColumnTitleInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .editColumnTitlePanelWrapper`
  );
  const editColumnTitleInputPanelInput = document.querySelectorAll(
    `div.column[id="${columnId}"] .column__editColumnTitlePanel textarea`
  );
  const closeEditColumnTitleInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .editColumnTitlePanelWrapper .cancel`
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

const editColumnTitle = (columnId) => {
  const editColumnInput = document.querySelectorAll(
    `div.column[id="${columnId}"] textarea.editColumnTitlePanel__input`
  );
  const editColumnButton = document.querySelectorAll(
    `div.column[id="${columnId}"]  .editColumnTitlePanel__button.ediTitle`
  );

  editColumn(editColumnInput, editColumnButton, columns);
};

const dragNewColumn = (columnId) => {
  const column = document.querySelectorAll(`div.column[id="${columnId}"]`);

  dragColumn(column);
};

export const callBackFunction = (columnId) => {
  closePanelAfterAdding();
  removeNewColumn(columnId);
  openAddingPanelInNewColumn(columnId);
  addNewTaskToNewColumn(columnId);
  openEditPanel(columnId);
  editColumnTitle(columnId);
  dragNewColumn(columnId);
};
