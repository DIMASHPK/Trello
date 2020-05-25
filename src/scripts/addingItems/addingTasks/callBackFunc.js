import { removeTask } from "../../removeItems/removeFunc";
import { editTasks } from "../../editItems/editItems";
import { openAddingPanel } from "../../openAddingPanel/openAddingPanel";
import { dragTasks, dragColumns } from "../../dragItems/dragItems";

const closePanelAfterAdd = (columnId) => {
  const closeNewTaskInputPanel = document.querySelector(
    `div.column[id="${columnId}"] .addTaskPanel button.column__addTask`
  );
  const newTaskInputPanel = document.querySelector(
    `div.column[id="${columnId}"] .addTaskPanel__wrapper`
  );

  closeNewTaskInputPanel.classList.remove("hiddenTitle");
  newTaskInputPanel.classList.remove("openInputPanel");
};

const removeNewTask = (tasks) => {
  const newTaskRemovButton = document.querySelectorAll(
    `.task[id="${tasks.length}"] button.removeButton`
  );

  removeTask(newTaskRemovButton, tasks);
};

const openEditPanel = (columnId) => {
  const openEditColumnTaskPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .task__interactionPanel .editButton`
  );
  const taskEditPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .task__wrapper`
  );
  const editColumnTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .editTaskPanel__wrapper`
  );
  const editColumnTaskInputPanelInput = document.querySelectorAll(
    `div.column[id="${columnId}"]  textarea.editTaskPanel__textarea`
  );
  const closeEditColumnTaskInputPanel = document.querySelectorAll(
    `div.column[id="${columnId}"] .editTaskPanel__wrapper .cancel`
  );

  openAddingPanel(
    openEditColumnTaskPanel,
    editColumnTaskInputPanel,
    closeEditColumnTaskInputPanel,
    editColumnTaskInputPanelInput,
    taskEditPanel,
    true
  );
};

const editColumnTask = (columnId, tasks) => {
  const editColumnInput = document.querySelectorAll(
    `div.column[id="${columnId}"] textarea.editTaskPanel__textarea`
  );
  const editColumnButton = document.querySelectorAll(
    `div.column[id="${columnId}"]  .editTaskPanel__button.editTask`
  );
  editTasks(editColumnInput, editColumnButton, tasks);
};

const dragNewTasks = (tasks, columnId) => {
  const dragTask = document.querySelectorAll(`.task[id="${tasks.length}"]`);
  const newColumn = document.querySelectorAll(`.column[id="${columnId}"]`)
  dragTasks(dragTask);
  dragColumns(newColumn)
};

export const callBackFunction = (tasks, columnId) => {
  closePanelAfterAdd(columnId);
  removeNewTask(tasks);
  openEditPanel(columnId);
  editColumnTask(columnId, tasks);
  dragNewTasks(tasks, columnId);
};
