export const renderTasks = (tasks) => {
  const tasksWrapper = document.querySelectorAll(".column__taskWrapper");

  (Array.isArray(tasks) ? tasks : [tasks]).forEach(
    ({ id, title, columnId, fireBaseId }) => {
      tasksWrapper.forEach((taskWrapper) => {
        if (taskWrapper.id == columnId) {
          taskWrapper.insertAdjacentHTML(
            "beforeend",
            `<div class="column__task task" id=${id} draggable="true" data-fireBaseId=${fireBaseId}>
               <div class="task__wrapper">   
                <div class="task__interactionPanel interactionPanel">
                  <button class="interactionPanel__button editButton">&#9998;</button>
                  <button class="interactionPanel__button removeButton" data-id=${id}>&#10006;</button>
                 </div>
                 <p class="task__title">${title}</p>
                </div> 
                <div class="column__editTaskPanelWrapper editTaskPanel__wrapper">
                 <textarea class="editTaskPanel__textarea"></textarea>
                 <div class="editTaskPanel__buttonsWrap">
                  <button class="editTaskPanel__button editTask" data-id=${id}>
                    Изменить
                  </button>
                  <button class="editTaskPanel__button cancel">
                    &#10006;
                  </button>
                </div>
                </div>
               </div>`
          );
        }
      });
    }
  );
};
