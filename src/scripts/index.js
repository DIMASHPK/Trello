import "normalize.css";
import "../styles/styles.scss";
import { newColumns } from "./columns/columns";
import { newTasks } from "./tasks/tasks";
import { tasksMainApiUrl, columnsMainApiUrl } from "./api/api";

(async () => {
  const columnsRequest = await fetch(columnsMainApiUrl);
  const columnsResponse = await columnsRequest.json();
  const columnsArray = Object.entries(columnsResponse).map((column) => ({
    fireBaseId: column[0],
    ...column[1],
  }));

  newColumns.columns = [...newColumns.columns, ...columnsArray];

  const tasksRequest = await fetch(tasksMainApiUrl);
  const tasksResponse = await tasksRequest.json();
  const tasksArray = Object.entries(tasksResponse).map((task) => ({
    fireBaseId: task[0],
    ...task[1],
  }));
  newTasks.tasks = [...newTasks.tasks, ...tasksArray];

  /* columns  */
  newColumns.renderColumn();
  newColumns.removeColumn();
  newColumns.openNewColumnPanel();
  newColumns.addNewColumn();
  newColumns.openEditColumnPanel();
  newColumns.editColumn();
  newColumns.dragColumn();

  /* tasks */
  newTasks.renderTask();
  newTasks.removeTask();
  newTasks.openNewTaskPanel();
  newTasks.addNewTask();
  newTasks.openEditTaskPanel();
  newTasks.editTask();
  newTasks.dragTask();
})();
