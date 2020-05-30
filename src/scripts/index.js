import "normalize.css";
import "../styles/styles.scss";
import { newColumns } from "./columns/columns";
import { newTasks } from "./tasks/tasks";
import { tasksMainApiUrl, columnsMainApiUrl } from "./api/api";
import { auth } from "./auth/auth";
import { preloader } from "./preloader/preloader";
import { logOut } from "./logOut/logOut";

const token = localStorage.getItem("token");

const initContentFunc = async (idToken) => {
  document.body.insertAdjacentHTML("afterbegin", preloader());

  const columnsRequest = await fetch(columnsMainApiUrl(idToken));
  const columnsResponse = await columnsRequest.json();
  const columnsArray = Object.entries(columnsResponse).map((column) => ({
    fireBaseId: column[0],
    ...column[1],
  }));

  newColumns.columns = [...columnsArray];

  const tasksRequest = await fetch(tasksMainApiUrl(idToken));
  const tasksResponse = await tasksRequest.json();
  const tasksArray = Object.entries(tasksResponse).map((task) => ({
    fireBaseId: task[0],
    ...task[1],
  }));
  newTasks.tasks = [...tasksArray];

  document.querySelector(".preloader").remove();
  document.querySelector(".newColumnWrapper").style.display = "block";

  newColumns.renderColumn();
  newColumns.removeColumn();
  newColumns.openNewColumnPanel();
  newColumns.addNewColumn();
  newColumns.openEditColumnPanel();
  newColumns.editColumn();
  newColumns.dragColumn();

  newTasks.renderTask();
  newTasks.removeTask();
  newTasks.openNewTaskPanel();
  newTasks.addNewTask();
  newTasks.openEditTaskPanel();
  newTasks.editTask();
  newTasks.dragTask();
};

token && token.length && logOut(initContentFunc);

token && token.length > 0 ? initContentFunc(token) : auth(initContentFunc);
