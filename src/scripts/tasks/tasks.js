import { renderTasks } from "./renderTask/renderTask";
import { removeTask } from "./removeTask/removeTask";
import { openNewTaskPanel } from "./openTaskPanels/openNewTaskPanel";
import { addNewTask } from "./addNewTask/addNewTask";
import { openEditTaskPanel } from "./openTaskPanels/openEditTaskPanel";
import { editTask } from "./editTask/editTask";
import { dragTask } from "./dragTask/dragTask";

export let newTasks = {
  tasks: [],
  renderTask: () => renderTasks(newTasks.tasks),
  removeTask: () =>
    removeTask(
      document.querySelectorAll(".task__interactionPanel .removeButton")
    ),
  openNewTaskPanel: () => openNewTaskPanel(),
  addNewTask: () => addNewTask(renderTasks),
  openEditTaskPanel: () => openEditTaskPanel(),
  editTask: () => editTask(),
  dragTask: () => {
    const taskList = document.querySelectorAll(".task");
    dragTask(taskList);
  },
};
