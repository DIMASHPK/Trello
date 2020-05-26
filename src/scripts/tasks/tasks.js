import { renderTasks } from "./renderTask/renderTask";
import { removeTask } from "./removeTask/removeTask";
import { openNewTaskPanel } from "./openTaskPanels/openNewTaskPanel";
import { addNewTask } from "./addNewTask/addNewTask";
import { openEditTaskPanel } from "./openTaskPanels/openEditTaskPanel";
import { editTask } from "./editTask/editTask";
import { dragTask } from "./dragTask/dragTask";

export let newTasks = {
  tasks: [
    {
      id: 1,
      title: "Досмотреть с Дашей мультик",
      columnId: 1,
    },
    {
      id: 2,
      title: "Досмотреть с Дашей мультик",
      columnId: 1,
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 1,
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 1,
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 1,
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 1,
    },
    {
      id: 7,
      title: "Почитаь диплом",
      columnId: 2,
    },
    {
      id: 8,
      title: "Досмотреть с Дашей мультик",
      columnId: 2,
    },
    {
      id: 9,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 2,
    },
    {
      id: 10,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 2,
    },
    {
      id: 11,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 3,
    },
    {
      id: 12,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolor numquam deserunt dolorem eum tempore qui minus. Ab, iusto doloremque esse veniam itaque architecto quaerat dolor repellendus quia iste nam officia quibusdam rerum blanditiis vel voluptatibus reiciendis! Velit, impedit. Exercitationem, ipsum.",
      columnId: 3,
    },
    {
      id: 13,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste modi itaque ad aliquam voluptatum velit reprehenderit debitis, quos numquam iure vitae sunt non aperiam dignissimos. Libero ullam totam consectetur suscipit veniam, perferendis dicta, animi, quas dignissimos voluptate ab deserunt excepturi harum. Blanditiis necessitatibus molestiae ipsum corrupti at ipsam exercitationem reiciendis porro itaque velit, error non perferendis fugiat explicabo dignissimos magni in, aliquam quasi. Libero deserunt distinctio perspiciatis, ab hic eveniet corrupti vero, maxime, neque ipsum eos. Possimus dolor neque, debitis impedit maxime aperiam. Magni optio nostrum quidem molestiae, dicta dolorem qui eveniet suscipit quisquam placeat laborum odit commodi corporis?",
      columnId: 1,
    },
  ],
  renderTask: () => renderTasks(newTasks.tasks),
  removeTask: () => {
    const taskRemoveButtons = document.querySelectorAll(
      ".task__interactionPanel .removeButton"
    );

    removeTask(taskRemoveButtons, newTasks.tasks);
  },
  openNewTaskPanel: () => openNewTaskPanel(),
  addNewTask: () => {
    const addTaskButton = document.querySelectorAll(".addTask");
    const addTaskInput = document.querySelectorAll(".addTask__input");

    addNewTask(addTaskButton, addTaskInput, renderTasks);
  },
  openEditTaskPanel: () => openEditTaskPanel(),
  editTask: () => {
    const editTasksInputs = document.querySelectorAll(
      "textarea.editTaskPanel__textarea"
    );
    const editTasksButtons = document.querySelectorAll(
      ".editTaskPanel__button.editTask"
    );

    editTask(editTasksInputs, editTasksButtons, newTasks.tasks);
  },
  dragTask: () => {
    const taskList = document.querySelectorAll(".task");
    dragTask(taskList);
  },
};
