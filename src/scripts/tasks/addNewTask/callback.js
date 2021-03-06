import { removeTask } from "../removeTask/removeTask";
import { openAddingPanel } from "../../helpers/openAddingPanel";
import { editTask } from "../editTask/editTask";
import { dragTask } from "../dragTask/dragTask";

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

const removeNewTask = (taskId) => {
  const newTaskRemovButton = document.querySelectorAll(
    `.task[id="${taskId}"] button.removeButton`
  );

  removeTask(newTaskRemovButton);
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

const editColumnTask = (columnId) => {
  const editColumnInput = document.querySelectorAll(
    `div.column[id="${columnId}"] textarea.editTaskPanel__textarea`
  );
  const editColumnButton = document.querySelectorAll(
    `div.column[id="${columnId}"]  .editTaskPanel__button.editTask`
  );
  editTask(editColumnInput, editColumnButton);
};

const dragNewTasks = (taskId) => {
  const taskForDrag = document.querySelectorAll(`.task[id="${taskId}"]`);
  dragTask(taskForDrag);
};

export const callBackFunction = (taskId, columnId) => {
  closePanelAfterAdd(columnId);
  removeNewTask(taskId);
  openEditPanel(columnId);
  editColumnTask(columnId);
  dragNewTasks(taskId);
};
