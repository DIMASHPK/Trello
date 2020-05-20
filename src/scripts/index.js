import "normalize.css";
import "../styles/styles.scss";
import { columnsRender } from "./renderItems/renderColumns";
import { renderTasks } from "./renderItems/renderTasks";
import { removeItem } from "./removeItems/removeFunc";

const columns = [
  {
    id: 1,
    title: "Новая колонка",
  },
  {
    id: 2,
    title: "Новая колонка",
  },
  {
    id: 3,
    title: "Новая колонка",
  },
];
const tasks = [
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
];

columnsRender(columns);
renderTasks(tasks);

const columnRemoveButtons = document.querySelectorAll(
  ".column__interactionPanel .removeButton"
);
const taskRemoveButtons = document.querySelectorAll(
  ".task__interactionPanel .removeButton"
);

/* remove items */
removeItem(columnRemoveButtons, columns);
removeItem(taskRemoveButtons, tasks);
