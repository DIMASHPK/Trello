import "normalize.css";
import "../styles/styles.scss";
import { newColumns } from "./columns/columns";
import { newTasks } from "./tasks/tasks";

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
