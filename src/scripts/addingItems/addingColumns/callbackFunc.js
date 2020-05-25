import { openAddingPanel } from "../../openAddingPanel/openAddingPanel";
import { renderTasks } from "../../renderItems/renderTasks";
import { tasks } from "../..";
import { addNewTask } from "../addingTasks/addingTasks";
import { removeColumn } from "../../removeItems/removeFunc";
import { editColumns } from "../../editItems/editItems";
import { dragColumns } from "../../dragItems/dragItems";

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
  addNewTask(addTaskButton, addTaskInput, tasks, renderTasks);
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
    titleEditPanel
  );
};

const editColumnTitle = (columns) => {
  const editColumnInput = document.querySelectorAll(
    `div.column[id="${columns.length}"] textarea.editColumnTitlePanel__input`
  );
  const editColumnButton = document.querySelectorAll(
    `div.column[id="${columns.length}"]  .editColumnTitlePanel__button.ediTitle`
  );

  editColumns(editColumnInput, editColumnButton, columns);
};

const dragNewColumns = (columns) => {
  const column = document.querySelectorAll(
    `div.column[id="${columns.length}"]`
  );

  dragColumns(column);
};

export const callBackFunction = (columns) => {
  closePanelAfterAdding();
  removeNewColumn(columns);
  openAddingPanelInNewColumn(columns);
  addNewTaskToNewColumn(columns);
  openEditPanel(columns);
  editColumnTitle(columns);
  dragNewColumns(columns);
};
