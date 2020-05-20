export const renderTasks = (tasks) => {
  const tasksWrapper = document.querySelectorAll(".column__taskWrapper");

  tasks.forEach(({ id, title, columnId }) => {
    tasksWrapper.forEach((taskWrapper) => {
      if (taskWrapper.id == columnId) {
        taskWrapper.insertAdjacentHTML(
          "beforeend",
          `<div class="column__task task" id=${id}>
               <div class="task__interactionPanel interactionPanel">
                <button class="interactionPanel__button editButton">&#9998;</button>
                <button class="interactionPanel__button removeButton" data-id=${id}>&#10006;</button>
               </div>
               <p class="task__title">${title}</p>
             </div>`
        );
      }
    });
  });
};
