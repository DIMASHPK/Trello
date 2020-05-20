import { columns } from "..";

export const columnsRender = (columns) => {
  const newColumn = document.querySelector(".newColumnWrapper");
  columns.forEach(({ id, title }) => {
    const div = document.createElement("div");
    div.classList.add("column");
    newColumn.insertAdjacentHTML(
      "beforebegin",
      `<div class='column' id=${id}>
       <h2 class="column__title">${title}</h2>
       <div class="column__interactionPanel interactionPanel">
         <button class="interactionPanel__button editButton">&#9998;</button>
         <button class="interactionPanel__button removeButton" data-id=${id}>&#10006;</button>
       </div>
       <div class="column__taskWrapper" id=${id}></div>
       <button class="column__addTask">+ Добавить еще одну карточку</button>
     </div>`
    );
  });
};
