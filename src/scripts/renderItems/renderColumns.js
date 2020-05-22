export const renderColumns = (columns) => {
  const newColumn = document.querySelector(".newColumnWrapper");
  (Array.isArray(columns) ? columns : [columns]).forEach(({ id, title }) => {
    const div = document.createElement("div");
    div.classList.add("column");
    newColumn.insertAdjacentHTML(
      "beforebegin",
      `<div class='column' id=${id}>
       <div class="column__editColumnTitlePanel editColumnTitlePanel">
          <div class="column__titleWrap">
            <h2 class="column__title">${title}</h2>
            <div class="column__interactionPanel interactionPanel">
              <button class="interactionPanel__button editButton">
                &#9998;
              </button>
              <button class="interactionPanel__button removeButton" data-id="${id}">
                &#10006;
              </button>
            </div>
          </div>
          <div
            class="column__editColumnTitlePanelWrapper editColumnTitlePanelWrapper"
          >
            <textarea
            name="title"
            class="editColumnTitlePanel__input"
            ></textarea>
            <div class="editColumnTitlePanel__buttonsWrap">
              <button class="editColumnTitlePanel__button ediTitle" data-id="${id}">
                Изменить
              </button>
              <button class="editColumnTitlePanel__button cancel">
                &#10006;
              </button>
            </div>
          </div>
        </div>
       <div class="column__taskWrapper" id=${id}></div>
       <div class="column__addTaskPanel addTaskPanel">
          <button class="column__addTask">+ Добавить еще одну карточку</button>
          <div class="addTaskPanel__wrapper">
            <textarea
              name="addTask"
              class="addTask__input"
              placeholder="Введите описание карточки"
            ></textarea>
            <div class="addTaskPanel__ButtonsWrap">
              <button class="addTaskPanel__button addTask" data-id=${id}>Добавить карточку</button>
              <button class="addTaskPanel__button cancel">&#10006;</button>
            </div>
          </div>
        </div>
     </div>`
    );
  });
};
